CREATE PROCEDURE [dbo].[TrolleyRePrice]
	@TrolleyId  UNIQUEIDENTIFIER
AS
BEGIN
	DECLARE	
		@message	nvarchar(200),
		@result		int,
		@customerId		int,
		@count		int
	;
	SET NOCOUNT ON;

	BEGIN TRY
	
	SELECT	@count		= COUNT(*)
	FROM	[dbo].[Trolleys]
	WHERE	[TrolleyId] = @TrolleyId
		AND [IsActive] = 1;

	IF (@count = 0)
	BEGIN
	  SELECT @message = CONCAT('Trolley ', CAST(@TrolleyId AS nvarchar), ' does not exist.');
	  THROW 50005, @message, 2
	END

	UPDATE [dbo].[Trolleys]
	SET [SubTotal] = (SELECT COALESCE(SUM([Quantity] * [SalePrice]), 0) FROM [dbo].[TrolleyItems] WHERE [TrolleyId] = @TrolleyId AND [IsActive] = 1),
		-- For now, we will not apply any discounts to the trolley 
		[Discounts] = 0,
		[OrderTotal] = (SELECT COALESCE(SUM([Quantity] * [SalePrice]), 0) FROM [dbo].[TrolleyItems] WHERE [TrolleyId] = @TrolleyId AND [IsActive] = 1) - [Discounts]
	WHERE [TrolleyId] = @TrolleyId;

	END TRY
 
	BEGIN CATCH
		DECLARE @PROCESS_MESSAGE VARCHAR(100), @ERROR_MESSAGE VARCHAR(200);
		SELECT @ERROR_MESSAGE = ERROR_MESSAGE();
		IF @@TRANCOUNT > 0
		SELECT @PROCESS_MESSAGE = 'SP: ' + OBJECT_SCHEMA_NAME(@@PROCID) + '.' + OBJECT_NAME(@@PROCID);
		EXEC [log].[WriteToErrorLog] @PROCESS_MESSAGE, @ERROR_MESSAGE;
		THROW 50005, @ERROR_MESSAGE, 2 
	END CATCH;
END