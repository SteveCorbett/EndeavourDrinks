CREATE TABLE [dbo].[Customers] (
    [CustomerId]   INT            IDENTITY (1, 1) NOT NULL,
    [FirstName]    VARCHAR (50)   NOT NULL,
    [LastName]     VARCHAR (50)   NOT NULL,
    [Email]        VARCHAR (200)  NOT NULL,
    [InsertedDate] DATETIME       CONSTRAINT [DF_Cust_Inserted] DEFAULT (getutcdate()) NOT NULL,
    [InsertedBy]   NVARCHAR (100) CONSTRAINT [DF_Cust_InsertedBy] DEFAULT ('System') NOT NULL,
    [UpdatedDate]  DATETIME       CONSTRAINT [DF_Cust_Updated] DEFAULT (getutcdate()) NOT NULL,
    [UpdatedBy]    NVARCHAR (100) CONSTRAINT [DF_Cust_UpdatedBy] DEFAULT ('System') NOT NULL,
    [IsActive]     BIT            CONSTRAINT [DF_Cust_IsActive] DEFAULT ((1)) NOT NULL,
    CONSTRAINT [PK_Customers] PRIMARY KEY CLUSTERED ([CustomerId] ASC)
);



