CREATE TABLE [dbo].[Customers] (
    [CustomerID] INT    IDENTITY (1, 1) NOT NULL,
    [FirstName]  VARCHAR (50)  NULL,
    [LastName]   VARCHAR (50)  NULL,
    [Email]      VARCHAR (200) NULL,
    [InsertedDate]       DATETIME       DEFAULT (getutcdate()) NOT NULL,
    [InsertedBy]         NVARCHAR (100) DEFAULT ('System') NOT NULL,
    [UpdatedDate]        DATETIME       DEFAULT (getutcdate()) NOT NULL,
    [UpdatedBy]          NVARCHAR (100) DEFAULT ('System') NOT NULL,
    [IsActive]           BIT            DEFAULT ((1)) NOT NULL,
    PRIMARY KEY CLUSTERED ([CustomerID] ASC)
);

