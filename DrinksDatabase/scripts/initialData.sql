
SET IDENTITY_INSERT [dbo].[Customers] ON 
GO
INSERT [dbo].[Customers] ([CustomerId], [FirstName], [LastName], [Email], [InsertedDate], [InsertedBy], [UpdatedDate], [UpdatedBy], [IsActive]) VALUES (1, N'Walter', N'Greenway', N'wills@nowhere.com', CAST(N'2023-08-01T02:46:43.010' AS DateTime), N'System', CAST(N'2023-08-01T02:46:43.010' AS DateTime), N'System', 1)
GO
INSERT [dbo].[Customers] ([CustomerId], [FirstName], [LastName], [Email], [InsertedDate], [InsertedBy], [UpdatedDate], [UpdatedBy], [IsActive]) VALUES (2, N'Margaret', N'Smith', N'JW@somewhere.com', CAST(N'2023-08-01T02:47:06.987' AS DateTime), N'System', CAST(N'2023-08-01T02:47:06.987' AS DateTime), N'System', 1)
GO
SET IDENTITY_INSERT [dbo].[Customers] OFF
GO
SET IDENTITY_INSERT [dbo].[Products] ON 
GO
INSERT [dbo].[Products] ([ProductId], [ProductCode], [ProductName], [ProductClass], [RRP], [DiscPcnt], [DiscAmount], [SalePrice], [InsertedDate], [InsertedBy], [UpdatedDate], [UpdatedBy], [IsActive]) VALUES (1, N'JC-001', N'Jacobs Creek Classic Sauvignon Blanc', N'Wines', CAST(7.95 AS Decimal(10, 2)), CAST(0.00 AS Decimal(4, 2)), CAST(0.00 AS Decimal(10, 2)), CAST(7.95 AS Decimal(10, 2)), CAST(N'2023-08-01T02:48:23.807' AS DateTime), N'System', CAST(N'2023-08-01T02:48:23.807' AS DateTime), N'System', 1)
GO
INSERT [dbo].[Products] ([ProductId], [ProductCode], [ProductName], [ProductClass], [RRP], [DiscPcnt], [DiscAmount], [SalePrice], [InsertedDate], [InsertedBy], [UpdatedDate], [UpdatedBy], [IsActive]) VALUES (2, N'TS-123A', N'Tread Softly Pinot Noir', N'Wines', CAST(13.60 AS Decimal(10, 2)), CAST(0.00 AS Decimal(4, 2)), CAST(0.00 AS Decimal(10, 2)), CAST(13.60 AS Decimal(10, 2)), CAST(N'2023-08-01T02:49:06.753' AS DateTime), N'System', CAST(N'2023-08-01T02:49:06.753' AS DateTime), N'System', 1)
GO
INSERT [dbo].[Products] ([ProductId], [ProductCode], [ProductName], [ProductClass], [RRP], [DiscPcnt], [DiscAmount], [SalePrice], [InsertedDate], [InsertedBy], [UpdatedDate], [UpdatedBy], [IsActive]) VALUES (3, N'B23123', N'Coopers Original Pale Ale', N'Beer', CAST(4.69 AS Decimal(10, 2)), CAST(0.00 AS Decimal(4, 2)), CAST(0.00 AS Decimal(10, 2)), CAST(4.69 AS Decimal(10, 2)), CAST(N'2023-08-01T02:49:41.283' AS DateTime), N'System', CAST(N'2023-08-01T02:49:41.283' AS DateTime), N'System', 1)
GO
INSERT [dbo].[Products] ([ProductId], [ProductCode], [ProductName], [ProductClass], [RRP], [DiscPcnt], [DiscAmount], [SalePrice], [InsertedDate], [InsertedBy], [UpdatedDate], [UpdatedBy], [IsActive]) VALUES (4, N'GB', N'Ginger Ale', N'Other', CAST(2.79 AS Decimal(10, 2)), CAST(0.00 AS Decimal(4, 2)), CAST(0.00 AS Decimal(10, 2)), CAST(2.79 AS Decimal(10, 2)), CAST(N'2023-08-01T02:50:10.743' AS DateTime), N'System', CAST(N'2023-08-01T02:50:10.743' AS DateTime), N'System', 1)
GO
INSERT [dbo].[Products] ([ProductId], [ProductCode], [ProductName], [ProductClass], [RRP], [DiscPcnt], [DiscAmount], [SalePrice], [InsertedDate], [InsertedBy], [UpdatedDate], [UpdatedBy], [IsActive]) VALUES (5, N'VB-Case', N'Victoria Bitter (Case)', N'Beer', CAST(21.49 AS Decimal(10, 2)), CAST(0.00 AS Decimal(4, 2)), CAST(0.00 AS Decimal(10, 2)), CAST(21.49 AS Decimal(10, 2)), CAST(N'2023-08-01T02:50:51.820' AS DateTime), N'System', CAST(N'2023-08-01T02:50:51.820' AS DateTime), N'System', 1)
GO
INSERT [dbo].[Products] ([ProductId], [ProductCode], [ProductName], [ProductClass], [RRP], [DiscPcnt], [DiscAmount], [SalePrice], [InsertedDate], [InsertedBy], [UpdatedDate], [UpdatedBy], [IsActive]) VALUES (6, N'CL-Case', N'Crown Lager (Case)', N'Beer', CAST(22.99 AS Decimal(10, 2)), CAST(0.00 AS Decimal(4, 2)), CAST(0.00 AS Decimal(10, 2)), CAST(22.99 AS Decimal(10, 2)), CAST(N'2023-08-01T02:57:29.217' AS DateTime), N'System', CAST(N'2023-08-01T02:57:29.217' AS DateTime), N'System', 1)
GO
INSERT [dbo].[Products] ([ProductId], [ProductCode], [ProductName], [ProductClass], [RRP], [DiscPcnt], [DiscAmount], [SalePrice], [InsertedDate], [InsertedBy], [UpdatedDate], [UpdatedBy], [IsActive]) VALUES (1002, N'MS-PN', N'Marlborough Sounds Pinot Noir', N'Wines', CAST(19.99 AS Decimal(10, 2)), CAST(0.00 AS Decimal(4, 2)), CAST(2.00 AS Decimal(10, 2)), CAST(17.99 AS Decimal(10, 2)), CAST(N'2023-08-01T06:34:22.497' AS DateTime), N'System', CAST(N'2023-08-01T06:34:22.497' AS DateTime), N'System', 1)
GO
INSERT [dbo].[Products] ([ProductId], [ProductCode], [ProductName], [ProductClass], [RRP], [DiscPcnt], [DiscAmount], [SalePrice], [InsertedDate], [InsertedBy], [UpdatedDate], [UpdatedBy], [IsActive]) VALUES (1003, N'PJ-BS', N'Pepperjack Barossa Shiraz', N'Wines', CAST(25.00 AS Decimal(10, 2)), CAST(10.00 AS Decimal(4, 2)), CAST(0.00 AS Decimal(10, 2)), CAST(22.50 AS Decimal(10, 2)), CAST(N'2023-08-01T06:35:33.660' AS DateTime), N'System', CAST(N'2023-08-01T06:35:33.660' AS DateTime), N'System', 1)
GO
INSERT [dbo].[Products] ([ProductId], [ProductCode], [ProductName], [ProductClass], [RRP], [DiscPcnt], [DiscAmount], [SalePrice], [InsertedDate], [InsertedBy], [UpdatedDate], [UpdatedBy], [IsActive]) VALUES (1004, N'BBQBS', N'Baily & Baily Queen Bee Sticky', N'Wines - Dessert', CAST(12.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(4, 2)), CAST(0.00 AS Decimal(10, 2)), CAST(12.00 AS Decimal(10, 2)), CAST(N'2023-08-01T06:37:30.437' AS DateTime), N'System', CAST(N'2023-08-01T06:37:30.437' AS DateTime), N'System', 1)
GO
INSERT [dbo].[Products] ([ProductId], [ProductCode], [ProductName], [ProductClass], [RRP], [DiscPcnt], [DiscAmount], [SalePrice], [InsertedDate], [InsertedBy], [UpdatedDate], [UpdatedBy], [IsActive]) VALUES (1005, N'C-CS', N'Coopers (Case)', N'Beer', CAST(20.49 AS Decimal(10, 2)), CAST(0.00 AS Decimal(4, 2)), CAST(0.00 AS Decimal(10, 2)), CAST(20.49 AS Decimal(10, 2)), CAST(N'2023-08-01T06:38:32.887' AS DateTime), N'System', CAST(N'2023-08-01T06:38:32.887' AS DateTime), N'System', 1)
GO
INSERT [dbo].[Products] ([ProductId], [ProductCode], [ProductName], [ProductClass], [RRP], [DiscPcnt], [DiscAmount], [SalePrice], [InsertedDate], [InsertedBy], [UpdatedDate], [UpdatedBy], [IsActive]) VALUES (1007, N'TED', N'Tooheys Extra Dry', N'Beer', CAST(19.99 AS Decimal(10, 2)), CAST(0.00 AS Decimal(4, 2)), CAST(0.00 AS Decimal(10, 2)), CAST(19.99 AS Decimal(10, 2)), CAST(N'2023-08-01T06:39:19.850' AS DateTime), N'System', CAST(N'2023-08-01T06:39:19.850' AS DateTime), N'System', 1)
GO
INSERT [dbo].[Products] ([ProductId], [ProductCode], [ProductName], [ProductClass], [RRP], [DiscPcnt], [DiscAmount], [SalePrice], [InsertedDate], [InsertedBy], [UpdatedDate], [UpdatedBy], [IsActive]) VALUES (1008, N'PROMO-1', N'Endeavour Drinks Baseball Cap', N'Other', CAST(18.90 AS Decimal(10, 2)), CAST(0.00 AS Decimal(4, 2)), CAST(0.00 AS Decimal(10, 2)), CAST(18.90 AS Decimal(10, 2)), CAST(N'2023-08-01T06:40:56.800' AS DateTime), N'System', CAST(N'2023-08-01T06:40:56.800' AS DateTime), N'System', 1)
GO
SET IDENTITY_INSERT [dbo].[Products] OFF
GO
