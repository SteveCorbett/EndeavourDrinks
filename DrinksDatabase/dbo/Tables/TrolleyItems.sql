CREATE TABLE [dbo].[TrolleyItems] (
    [TrolleyItemId] UNIQUEIDENTIFIER DEFAULT (newid()) NOT NULL,
    [TrolleyId]     UNIQUEIDENTIFIER NOT NULL,
    [Sequence]      INT              NOT NULL,
    [ProductId]     INT              NOT NULL,
    [Quantity]      INT              NOT NULL,
    [InsertedDate] DATETIME       CONSTRAINT [DF_Trolley_Item_Inserted] DEFAULT (getutcdate()) NOT NULL,
    [InsertedBy]   NVARCHAR (100) CONSTRAINT [DF_Trolley_Item_InsertedBy] DEFAULT ('System') NOT NULL,
    [UpdatedDate]  DATETIME       CONSTRAINT [DF_Trolley_Item_Updated] DEFAULT (getutcdate()) NOT NULL,
    [UpdatedBy]    NVARCHAR (100) CONSTRAINT [DF_Trolley_Item_UpdatedBy] DEFAULT ('System') NOT NULL,
    [IsActive]     BIT            CONSTRAINT [DF_Trolley_Item_IsActive] DEFAULT ((1)) NOT NULL,
    CONSTRAINT [PK_TrolleyItems] PRIMARY KEY CLUSTERED ([TrolleyItemId] ASC),
    CONSTRAINT [FK_TrolleyItems_Products] FOREIGN KEY ([ProductId]) REFERENCES [dbo].[Products] ([ProductId]),
    CONSTRAINT [FK_TrolleyItems_Trollys] FOREIGN KEY ([TrolleyId]) REFERENCES [dbo].[Trolleys] ([TrolleyId])
);

