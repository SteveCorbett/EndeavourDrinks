CREATE TABLE [dbo].[TrolleyItems] (
    [TrolleyItemID] UNIQUEIDENTIFIER DEFAULT (newid()) NOT NULL,
    [TrolleyID]     UNIQUEIDENTIFIER NOT NULL,
    [ProductID]     INT              NOT NULL,
    [Quantity]      INT              DEFAULT ((1)) NOT NULL,
    [InsertedDate]       DATETIME       DEFAULT (getutcdate()) NOT NULL,
    [InsertedBy]         NVARCHAR (100) DEFAULT ('System') NOT NULL,
    [UpdatedDate]        DATETIME       DEFAULT (getutcdate()) NOT NULL,
    [UpdatedBy]          NVARCHAR (100) DEFAULT ('System') NOT NULL,
    [IsActive]           BIT            DEFAULT ((1)) NOT NULL,
    CONSTRAINT [PK_TrolleyItems] PRIMARY KEY CLUSTERED ([TrolleyItemID] ASC),
    CONSTRAINT [FK_TrolleyItems_Products] FOREIGN KEY ([ProductID]) REFERENCES [dbo].[Products] ([ProductID]),
    CONSTRAINT [FK_TrolleyItems_Trollys] FOREIGN KEY ([TrolleyID]) REFERENCES [dbo].[Trolleys] ([TrolleyID])
);

