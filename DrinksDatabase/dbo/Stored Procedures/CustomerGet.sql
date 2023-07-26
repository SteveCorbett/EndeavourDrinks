-- =============================================
-- Description:	Return a customer 
-- =============================================
CREATE PROCEDURE [dbo].[CustomerGet]
	@CustomerId		int
AS
BEGIN
	DECLARE	
		@message	nvarchar(200),
		@result		int
	;
	SET NOCOUNT ON;

	BEGIN TRY

		SELECT [CustomerId]
			  ,[FirstName]
			  ,[LastName]
			  ,[Email]
			  ,[InsertedDate]
			  ,[InsertedBy]
			  ,[UpdatedDate]
			  ,[UpdatedBy]
			  ,[IsActive]
		  FROM [dbo].[Customers]
		 WHERE [CustomerId] = @CustomerId
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