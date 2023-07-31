CREATE PROCEDURE [dbo].[TrolleyUpdateItem]
	@TrolleyId  UNIQUEIDENTIFIER,
	@ProductId   INT,
	@Quantity   INT
AS
BEGIN
	DECLARE	
		@message	nvarchar(200),
		@result		int,
		@customerId		int,
		@count		int
	;
	SET NOCOUNT ON;

	BEGIN TRANSACTION
	BEGIN TRY
	
	SELECT	@customerId	= MAX([CustomerId]),
			@count		= COUNT(*)
	FROM	[dbo].[Trolleys]
	WHERE	[TrolleyId] = @TrolleyId
		AND [IsActive] = 1;

	IF (@count = 0)
	BEGIN
	  SELECT @message = CONCAT('Trolley ', CAST(@TrolleyId AS nvarchar), ' does not exist.');
	  THROW 50005, @message, 2
	END

	MERGE INTO [dbo].[TrolleyItems] AS [Target]
	USING (SELECT @TrolleyId AS [TrolleyId], @ProductId AS [ProductId], @Quantity AS [Quantity],
					[P].[RRP] AS [RRP], [P].[DiscPcnt] AS [DiscPcnt], [P].[DiscAmount] AS [DiscAmount], 
					[P].[SalePrice] AS [SalePrice]
		FROM [dbo].[Products] AS [P]
			WHERE [ProductId] = @ProductId
				) AS [Source]
	ON [Target].[TrolleyId] = [Source].[TrolleyId]
		AND [Target].[ProductId] = [Source].[ProductId]
		AND [Target].[IsActive] = 1
	WHEN MATCHED THEN
		UPDATE SET 
			[IsActive] = CASE WHEN [Target].[Quantity] + [Source].[Quantity] > 0 THEN 1 ELSE 0 END,
			[Quantity] = [Target].[Quantity] + [Source].[Quantity]
	WHEN NOT MATCHED AND @Quantity > 0 THEN
		INSERT ([TrolleyId], [Sequence], [ProductId],  [Quantity], [RRP], [DiscPcnt], [DiscAmount], [SalePrice])
		VALUES ([Source].[TrolleyId], (SELECT MAX([Sequence]) + 1 FROM [dbo].[TrolleyItems] WHERE [TrolleyId] = @TrolleyId), 
				[Source].[ProductId], [Source].[Quantity], [Source].[RRP], [Source].[DiscPcnt], [Source].[DiscAmount], [Source].[SalePrice])
	;
	EXEC [dbo].[TrolleyRePrice] @TrolleyId;

	COMMIT TRANSACTION

	EXEC [dbo].[TrolleyGet] @customerId;
	END TRY
 
	BEGIN CATCH
		DECLARE @PROCESS_MESSAGE VARCHAR(100), @ERROR_MESSAGE VARCHAR(200);
		SELECT @ERROR_MESSAGE = ERROR_MESSAGE();
		IF @@TRANCOUNT > 0
		BEGIN
			ROLLBACK TRANSACTION 
		END
		SELECT @PROCESS_MESSAGE = 'SP: ' + OBJECT_SCHEMA_NAME(@@PROCID) + '.' + OBJECT_NAME(@@PROCID);
		EXEC [log].[WriteToErrorLog] @PROCESS_MESSAGE, @ERROR_MESSAGE;
		THROW 50005, @ERROR_MESSAGE, 2 
	END CATCH;
END
