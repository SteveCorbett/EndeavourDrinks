CREATE TABLE [dbo].[Products] (
    [ProductId]   INT   IDENTITY (1, 1) NOT NULL,
    [ProductCode] VARCHAR (20)    NOT NULL,
    [ProductName] VARCHAR (100)   NOT NULL,
    [ProductClass] VARCHAR (15)   NOT NULL DEFAULT('Wine'),
    [SalePrice]   DECIMAL (10, 2) NOT NULL,
    [InsertedDate] DATETIME       CONSTRAINT [DF_Prod_Inserted] DEFAULT (getutcdate()) NOT NULL,
    [InsertedBy]   NVARCHAR (100) CONSTRAINT [DF_Prod_InsertedBy] DEFAULT ('System') NOT NULL,
    [UpdatedDate]  DATETIME       CONSTRAINT [DF_Prod_Updated] DEFAULT (getutcdate()) NOT NULL,
    [UpdatedBy]    NVARCHAR (100) CONSTRAINT [DF_Prod_UpdatedBy] DEFAULT ('System') NOT NULL,
    [IsActive]     BIT            CONSTRAINT [DF_Prod_IsActive] DEFAULT ((1)) NOT NULL,
    CONSTRAINT [PK_Products] PRIMARY KEY CLUSTERED ([ProductId] ASC)
);

