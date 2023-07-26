CREATE TABLE [dbo].[Products] (
    [ProductID]   INT   IDENTITY (1, 1) NOT NULL,
    [ProductCode] VARCHAR (20)    NOT NULL,
    [ProductName] VARCHAR (100)   NOT NULL,
    [SalePrice]   DECIMAL (10, 2) NOT NULL,
    [InsertedDate]       DATETIME       DEFAULT (getutcdate()) NOT NULL,
    [InsertedBy]         NVARCHAR (100) DEFAULT ('System') NOT NULL,
    [UpdatedDate]        DATETIME       DEFAULT (getutcdate()) NOT NULL,
    [UpdatedBy]          NVARCHAR (100) DEFAULT ('System') NOT NULL,
    [IsActive]           BIT            DEFAULT ((1)) NOT NULL,
    PRIMARY KEY CLUSTERED ([ProductID] ASC)
);

