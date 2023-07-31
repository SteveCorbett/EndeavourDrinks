-- =============================================
-- Description:	Return the first active trolley 
-- and all related items for a customer 
-- (There should only every be one). If there is no active trolley
-- for the customer, create one and return it.
-- =============================================
CREATE PROCEDURE [dbo].[TrolleyGet]
	@CustomerId		int
AS
BEGIN
	DECLARE	
		@message	nvarchar(200),
		@result		int,
		@custCount		int,
		@count		int,
		@TrolleyId	uniqueidentifier;
	;
	SET NOCOUNT ON;

	BEGIN TRY
	
		SELECT @custCount = COUNT(*)
		FROM [dbo].[Customers] WHERE [CustomerId] = @CustomerId AND [IsActive] = 1;

		SELECT @TrolleyId = COALESCE(MAX([TrolleyId]), newid()),
				@Count = COUNT(*)
		FROM [dbo].[Trolleys] WHERE [CustomerId] = @CustomerId AND [IsActive] = 1;

		IF @count = 0 AND @custCount = 1
		BEGIN
			
			INSERT INTO [dbo].[Trolleys] ([TrolleyId], [CustomerId], [InsertedBy], [UpdatedBy]) VALUES (@TrolleyId, @CustomerId, 'System', 'System');
		END

		SELECT [TrolleyId]
			  ,[CustomerId]
			  ,[SubTotal]
			  ,[Discounts]
			  ,[OrderTotal]
			  ,[InsertedDate]
			  ,[InsertedBy]
			  ,[UpdatedDate]
			  ,[UpdatedBy]
			  ,[IsActive]
		  FROM [dbo].[Trolleys]
		 WHERE [TrolleyId] = @TrolleyId
		;
		SELECT [TrolleyItemId]
			  ,[TrolleyId]
			  ,[Sequence]
			  ,[ProductId]
			  ,[Quantity]
			  ,[RRP]
			  ,[DiscPcnt]
			  ,[DiscAmount]
			  ,[SalePrice]
			  ,[InsertedDate]
			  ,[InsertedBy]
			  ,[UpdatedDate]
			  ,[UpdatedBy]
			  ,[IsActive]
		  FROM [dbo].[TrolleyItems]
		 WHERE [TrolleyId] = @TrolleyId
		   AND [IsActive] = 1
	  ORDER BY [Sequence]
		;
	END TRY
 
	BEGIN CATCH
		DECLARE @PROCESS_MESSAGE VARCHAR(100), @ERROR_MESSAGE VARCHAR(200);
		SELECT @ERROR_MESSAGE = ERROR_MESSAGE();
		SELECT @PROCESS_MESSAGE = 'SP: ' + OBJECT_SCHEMA_NAME(@@PROCID) + '.' + OBJECT_NAME(@@PROCID);
		EXEC [log].[WriteToErrorLog] @PROCESS_MESSAGE, @ERROR_MESSAGE;
		THROW 50005, @ERROR_MESSAGE, 2 
	END CATCH;
END