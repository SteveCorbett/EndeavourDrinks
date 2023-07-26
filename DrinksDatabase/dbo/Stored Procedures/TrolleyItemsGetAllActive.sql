-- =============================================
-- Description:	Return all active trolley lines and parts for a given trolley
-- =============================================
CREATE PROCEDURE [dbo].[TrolleyItemsGetAllActive]
	@TrolleyId		UNIQUEIDENTIFIER
AS
BEGIN
	DECLARE	
		@message	nvarchar(200),
		@result		int
	;
	SET NOCOUNT ON;

	BEGIN TRY

		SELECT [TrolleyItemId]
			  ,[TrolleyId]
			  ,[Sequence]
			  ,[ProductId]
			  ,[Quantity]
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
		SELECT [ProductId]
			  ,[ProductCode]
			  ,[ProductName]
			  ,[SalePrice]
			  ,[InsertedDate]
			  ,[InsertedBy]
			  ,[UpdatedDate]
			  ,[UpdatedBy]
			  ,[IsActive]
		  FROM [dbo].[Products]
		 WHERE [ProductId] IN 
				(SELECT [ProductId] 
				   FROM [dbo].[TrolleyItems]
				  WHERE [TrolleyId] = @TrolleyId
				    AND [IsActive] = 1)
	END TRY
 
	BEGIN CATCH
		DECLARE @PROCESS_MESSAGE VARCHAR(100), @ERROR_MESSAGE VARCHAR(200);
		SELECT @ERROR_MESSAGE = ERROR_MESSAGE();
		SELECT @PROCESS_MESSAGE = 'SP: ' + OBJECT_SCHEMA_NAME(@@PROCID) + '.' + OBJECT_NAME(@@PROCID);
		EXEC [log].[WriteToErrorLog] @PROCESS_MESSAGE, @ERROR_MESSAGE;
		THROW 50005, @ERROR_MESSAGE, 2 
	END CATCH;
END