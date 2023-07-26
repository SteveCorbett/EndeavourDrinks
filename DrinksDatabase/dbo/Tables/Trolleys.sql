CREATE TABLE [dbo].[Trolleys] (
    [TrolleyID]  UNIQUEIDENTIFIER DEFAULT (newid()) NOT NULL,
    [CustomerID] INT              NOT NULL,
    [InsertedDate]       DATETIME       DEFAULT (getutcdate()) NOT NULL,
    [InsertedBy]         NVARCHAR (100) DEFAULT ('System') NOT NULL,
    [UpdatedDate]        DATETIME       DEFAULT (getutcdate()) NOT NULL,
    [UpdatedBy]          NVARCHAR (100) DEFAULT ('System') NOT NULL,
    [IsActive]           BIT            DEFAULT ((1)) NOT NULL,
    CONSTRAINT [PK_Trolleys] PRIMARY KEY CLUSTERED ([TrolleyID] ASC),
    CONSTRAINT [FK_Trolley_Customers] FOREIGN KEY ([CustomerID]) REFERENCES [dbo].[Customers] ([CustomerID])
);

