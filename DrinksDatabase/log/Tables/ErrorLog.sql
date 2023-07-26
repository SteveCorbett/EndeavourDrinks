CREATE TABLE [log].[ErrorLog] (
    [ErrorLogId]     BIGINT             IDENTITY (1, 1) NOT NULL,
    [ProcessMessage] NVARCHAR (MAX)     NOT NULL,
    [Errormessage]   NVARCHAR (MAX)     NOT NULL,
    [Recorded]       DATETIMEOFFSET (7) CONSTRAINT [DF_ErrorLog_Recorded] DEFAULT (getutcdate()) NOT NULL,
    CONSTRAINT [PK_ErrorLog] PRIMARY KEY CLUSTERED ([ErrorLogId] ASC)
);

