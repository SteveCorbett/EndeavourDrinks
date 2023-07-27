CREATE TABLE [dbo].[Trolleys] (
    [TrolleyId]  UNIQUEIDENTIFIER DEFAULT (newid()) NOT NULL,
    [CustomerId] INT              NOT NULL,
    [SubTotal]   DECIMAL (10, 2)  CONSTRAINT [DF_Trolley_SubTotal] DEFAULT (0) NOT NULL,
    [Discounts]   DECIMAL (10, 2)  CONSTRAINT [DF_Trolley_Discounts] DEFAULT (0) NOT NULL,
    [OrderTotal]   DECIMAL (10, 2)  CONSTRAINT [DF_Trolley_OrderTotal] DEFAULT (0) NOT NULL,
    [InsertedDate] DATETIME       CONSTRAINT [DF_Trolley_Inserted] DEFAULT (getutcdate()) NOT NULL,
    [InsertedBy]   NVARCHAR (100) CONSTRAINT [DF_Trolley_InsertedBy] DEFAULT ('System') NOT NULL,
    [UpdatedDate]  DATETIME       CONSTRAINT [DF_Trolley_Updated] DEFAULT (getutcdate()) NOT NULL,
    [UpdatedBy]    NVARCHAR (100) CONSTRAINT [DF_Trolley_UpdatedBy] DEFAULT ('System') NOT NULL,
    [IsActive]     BIT            CONSTRAINT [DF_Trolley_IsActive] DEFAULT ((1)) NOT NULL,
    CONSTRAINT [PK_Trolleys] PRIMARY KEY CLUSTERED ([TrolleyId] ASC),
    CONSTRAINT [FK_Trolley_Customers] FOREIGN KEY ([CustomerId]) REFERENCES [dbo].[Customers] ([CustomerId])
);

