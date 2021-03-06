USE [master]
GO
/****** Object:  Database [MemoryGame]    Script Date: 28/01/2019 16:48:55 ******/
CREATE DATABASE [MemoryGame]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'MemoryGame', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS01\MSSQL\DATA\MemoryGame.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'MemoryGame_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS01\MSSQL\DATA\MemoryGame_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [MemoryGame] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [MemoryGame].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [MemoryGame] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [MemoryGame] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [MemoryGame] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [MemoryGame] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [MemoryGame] SET ARITHABORT OFF 
GO
ALTER DATABASE [MemoryGame] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [MemoryGame] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [MemoryGame] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [MemoryGame] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [MemoryGame] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [MemoryGame] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [MemoryGame] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [MemoryGame] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [MemoryGame] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [MemoryGame] SET  DISABLE_BROKER 
GO
ALTER DATABASE [MemoryGame] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [MemoryGame] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [MemoryGame] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [MemoryGame] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [MemoryGame] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [MemoryGame] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [MemoryGame] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [MemoryGame] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [MemoryGame] SET  MULTI_USER 
GO
ALTER DATABASE [MemoryGame] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [MemoryGame] SET DB_CHAINING OFF 
GO
ALTER DATABASE [MemoryGame] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [MemoryGame] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [MemoryGame] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [MemoryGame] SET QUERY_STORE = OFF
GO
USE [MemoryGame]
GO
ALTER DATABASE SCOPED CONFIGURATION SET IDENTITY_CACHE = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET LEGACY_CARDINALITY_ESTIMATION = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET MAXDOP = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET PARAMETER_SNIFFING = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET QUERY_OPTIMIZER_HOTFIXES = PRIMARY;
GO
USE [MemoryGame]
GO
/****** Object:  Table [dbo].[ContactUsForms]    Script Date: 28/01/2019 16:48:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ContactUsForms](
	[ContactUsId] [int] IDENTITY(1,1) NOT NULL,
	[CreateDate] [datetime] NOT NULL,
	[FirstName] [nvarchar](50) NOT NULL,
	[LastName] [nvarchar](50) NOT NULL,
	[PhoneNumber] [varchar](30) NULL,
	[Email] [nvarchar](100) NULL,
	[Message] [nvarchar](max) NOT NULL,
	[PlayerId] [int] NULL,
 CONSTRAINT [PK_T_ContactUs] PRIMARY KEY CLUSTERED 
(
	[ContactUsId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Feedbacks]    Script Date: 28/01/2019 16:48:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Feedbacks](
	[FeedbackId] [int] IDENTITY(1,1) NOT NULL,
	[PlayerId] [int] NOT NULL,
	[FeedbackDate] [datetime] NULL,
	[FeedbackText] [nvarchar](500) NULL,
 CONSTRAINT [PK_T_Feedbacks] PRIMARY KEY CLUSTERED 
(
	[FeedbackId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Images]    Script Date: 28/01/2019 16:48:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Images](
	[ImageId] [int] IDENTITY(1,1) NOT NULL,
	[ImageName] [nvarchar](50) NULL,
	[ImageTypeId] [int] NULL,
 CONSTRAINT [PK_Images] PRIMARY KEY CLUSTERED 
(
	[ImageId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ImagesTypes]    Script Date: 28/01/2019 16:48:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ImagesTypes](
	[ImageTypeId] [int] IDENTITY(1,1) NOT NULL,
	[ImageTypeDescription] [nchar](10) NULL,
 CONSTRAINT [PK_ImagesTypes] PRIMARY KEY CLUSTERED 
(
	[ImageTypeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Players]    Script Date: 28/01/2019 16:48:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Players](
	[PlayerId] [int] IDENTITY(1,1) NOT NULL,
	[FullName] [nvarchar](200) NOT NULL,
	[UserName] [nvarchar](20) NOT NULL,
	[Password] [nvarchar](20) NOT NULL,
	[Email] [nvarchar](500) NULL,
	[BirthDate] [date] NULL,
 CONSTRAINT [PK_T_Users] PRIMARY KEY CLUSTERED 
(
	[PlayerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Results]    Script Date: 28/01/2019 16:48:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Results](
	[ResultId] [int] IDENTITY(1,1) NOT NULL,
	[PlayerId] [int] NOT NULL,
	[GameDate] [datetime] NOT NULL,
	[Duration] [time](7) NOT NULL,
	[NumberOfSteps] [int] NOT NULL,
 CONSTRAINT [PK_T_Results] PRIMARY KEY CLUSTERED 
(
	[ResultId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[ContactUsForms] ON 

INSERT [dbo].[ContactUsForms] ([ContactUsId], [CreateDate], [FirstName], [LastName], [PhoneNumber], [Email], [Message], [PlayerId]) VALUES (1, CAST(N'2018-11-15T21:17:30.977' AS DateTime), N'Ohad', N'Kaplan', N'053-7173997', N'ohadkaplan@gmail.com', N'Test 1 - api', 3)
INSERT [dbo].[ContactUsForms] ([ContactUsId], [CreateDate], [FirstName], [LastName], [PhoneNumber], [Email], [Message], [PlayerId]) VALUES (2, CAST(N'2018-12-04T21:45:23.070' AS DateTime), N'ohad', N'Kaplan', N'0537173996', N'kaplan_oh@mac.org.il', N'Test 1 From site', NULL)
INSERT [dbo].[ContactUsForms] ([ContactUsId], [CreateDate], [FirstName], [LastName], [PhoneNumber], [Email], [Message], [PlayerId]) VALUES (3, CAST(N'2018-12-04T21:49:15.060' AS DateTime), N'אוהד', N'קפלן', N'0537173997', N'ohadkaplan@gmail.com', N'ניסיון ראשון מתוך הטופס :)
', NULL)
INSERT [dbo].[ContactUsForms] ([ContactUsId], [CreateDate], [FirstName], [LastName], [PhoneNumber], [Email], [Message], [PlayerId]) VALUES (4, CAST(N'2019-01-01T21:10:56.403' AS DateTime), N'ohad kaplan', N'kaplan', N'87032', NULL, N'HELLO', NULL)
INSERT [dbo].[ContactUsForms] ([ContactUsId], [CreateDate], [FirstName], [LastName], [PhoneNumber], [Email], [Message], [PlayerId]) VALUES (5, CAST(N'2019-01-15T05:52:15.607' AS DateTime), N'ddddd', N'ddd', N'ddddd', N'n,knkm,', N'nmcdns,mnckl sn lcnslk;c sdnlkcd', NULL)
INSERT [dbo].[ContactUsForms] ([ContactUsId], [CreateDate], [FirstName], [LastName], [PhoneNumber], [Email], [Message], [PlayerId]) VALUES (6, CAST(N'2019-01-21T22:25:31.133' AS DateTime), N'אוהד', N'קפלן', N'0537173996', N'ohadkaplan@gmail.com', N'בלה בלה בלה בלה בלה', NULL)
INSERT [dbo].[ContactUsForms] ([ContactUsId], [CreateDate], [FirstName], [LastName], [PhoneNumber], [Email], [Message], [PlayerId]) VALUES (7, CAST(N'2019-01-21T22:37:00.997' AS DateTime), N'Moshe Ninio', N'Moshe Ninio', N'769879798', N'denwjl@jks', N'לכהיחלהי לי הכלגי הכקלך יהק, ', NULL)
INSERT [dbo].[ContactUsForms] ([ContactUsId], [CreateDate], [FirstName], [LastName], [PhoneNumber], [Email], [Message], [PlayerId]) VALUES (8, CAST(N'2019-01-21T22:38:50.970' AS DateTime), N'Moshe Ninio', N'Moshe Ninio', N'6786', N'ewnkl@ncjsk', N'nlklnlcasnl casnkl ca ', NULL)
INSERT [dbo].[ContactUsForms] ([ContactUsId], [CreateDate], [FirstName], [LastName], [PhoneNumber], [Email], [Message], [PlayerId]) VALUES (9, CAST(N'2019-01-21T22:45:48.123' AS DateTime), N'fvdb', N'vfdvd', N'787897987', N'vfvfds@vdsvs', N'797nkjdsnkj dfskjlh k;j  
 יגד
 ידג
י 
ד ח
הךדג', NULL)
INSERT [dbo].[ContactUsForms] ([ContactUsId], [CreateDate], [FirstName], [LastName], [PhoneNumber], [Email], [Message], [PlayerId]) VALUES (10, CAST(N'2019-01-21T22:46:56.917' AS DateTime), N'הכג', N'כג', N'7768689', N'hjk@ncjkan', N'nkjdcns kjbn vdf;n vf''d', NULL)
INSERT [dbo].[ContactUsForms] ([ContactUsId], [CreateDate], [FirstName], [LastName], [PhoneNumber], [Email], [Message], [PlayerId]) VALUES (11, CAST(N'2019-01-21T22:48:35.607' AS DateTime), N'cdcsd', N'cdscds', N'76979', N'cdsdccs@vmskl', N'bkb dkjvdbs k', NULL)
INSERT [dbo].[ContactUsForms] ([ContactUsId], [CreateDate], [FirstName], [LastName], [PhoneNumber], [Email], [Message], [PlayerId]) VALUES (12, CAST(N'2019-01-28T00:46:17.290' AS DateTime), N'אוהד', N'קפלן', N'053-7173996', N'OHADKAPLAN@hjlkhkjh', N'mkclsmvkldf', NULL)
INSERT [dbo].[ContactUsForms] ([ContactUsId], [CreateDate], [FirstName], [LastName], [PhoneNumber], [Email], [Message], [PlayerId]) VALUES (13, CAST(N'2019-01-28T10:00:39.853' AS DateTime), N'אוהד', N'קפלן', N'053-7173997', N'mail@mail', N'בדיקת מערכות מידע', NULL)
SET IDENTITY_INSERT [dbo].[ContactUsForms] OFF
SET IDENTITY_INSERT [dbo].[Feedbacks] ON 

INSERT [dbo].[Feedbacks] ([FeedbackId], [PlayerId], [FeedbackDate], [FeedbackText]) VALUES (1, 3, CAST(N'2019-01-28T08:10:37.413' AS DateTime), N'בוקר טוב - אחלה אתר  :)')
INSERT [dbo].[Feedbacks] ([FeedbackId], [PlayerId], [FeedbackDate], [FeedbackText]) VALUES (2, 3, CAST(N'2019-01-28T08:10:54.790' AS DateTime), N'ואוו - תמונה מהמהמת!')
INSERT [dbo].[Feedbacks] ([FeedbackId], [PlayerId], [FeedbackDate], [FeedbackText]) VALUES (3, 19, CAST(N'2019-01-28T10:32:16.123' AS DateTime), N'ממכר!!')
INSERT [dbo].[Feedbacks] ([FeedbackId], [PlayerId], [FeedbackDate], [FeedbackText]) VALUES (4, 3, CAST(N'2019-01-28T14:33:34.053' AS DateTime), N'יש!!! - הסתיים :)')
SET IDENTITY_INSERT [dbo].[Feedbacks] OFF
SET IDENTITY_INSERT [dbo].[Images] ON 

INSERT [dbo].[Images] ([ImageId], [ImageName], [ImageTypeId]) VALUES (1, N'christmas.jpg', 2)
INSERT [dbo].[Images] ([ImageId], [ImageName], [ImageTypeId]) VALUES (2, N'garfield.jpg', 2)
INSERT [dbo].[Images] ([ImageId], [ImageName], [ImageTypeId]) VALUES (3, N'GarfieldCharacter.jpg', 2)
INSERT [dbo].[Images] ([ImageId], [ImageName], [ImageTypeId]) VALUES (4, N'garfieldcomic.jpg', 2)
INSERT [dbo].[Images] ([ImageId], [ImageName], [ImageTypeId]) VALUES (5, N'Happy.png', 2)
INSERT [dbo].[Images] ([ImageId], [ImageName], [ImageTypeId]) VALUES (6, N'InLovedgarfield.jpg', 2)
INSERT [dbo].[Images] ([ImageId], [ImageName], [ImageTypeId]) VALUES (7, N'MadGarfield.png', 2)
INSERT [dbo].[Images] ([ImageId], [ImageName], [ImageTypeId]) VALUES (8, N'Tallgarfield.jpg', 2)
INSERT [dbo].[Images] ([ImageId], [ImageName], [ImageTypeId]) VALUES (9, N'front.jpg', 1)
INSERT [dbo].[Images] ([ImageId], [ImageName], [ImageTypeId]) VALUES (10, N'0127.png', 3)
INSERT [dbo].[Images] ([ImageId], [ImageName], [ImageTypeId]) VALUES (11, N'2017-06-28.gif', 4)
INSERT [dbo].[Images] ([ImageId], [ImageName], [ImageTypeId]) VALUES (12, N'2018-03-01.gif', 4)
INSERT [dbo].[Images] ([ImageId], [ImageName], [ImageTypeId]) VALUES (13, N'2018-11-17.gif', 4)
INSERT [dbo].[Images] ([ImageId], [ImageName], [ImageTypeId]) VALUES (14, N'garfield-logo-png-5.png', 6)
INSERT [dbo].[Images] ([ImageId], [ImageName], [ImageTypeId]) VALUES (15, N'bottomImage.png', 5)
INSERT [dbo].[Images] ([ImageId], [ImageName], [ImageTypeId]) VALUES (16, N'Garfield.gif', 5)
INSERT [dbo].[Images] ([ImageId], [ImageName], [ImageTypeId]) VALUES (17, N'transperent.png', 8)
SET IDENTITY_INSERT [dbo].[Images] OFF
SET IDENTITY_INSERT [dbo].[ImagesTypes] ON 

INSERT [dbo].[ImagesTypes] ([ImageTypeId], [ImageTypeDescription]) VALUES (1, N'Front     ')
INSERT [dbo].[ImagesTypes] ([ImageTypeId], [ImageTypeDescription]) VALUES (2, N'Back      ')
INSERT [dbo].[ImagesTypes] ([ImageTypeId], [ImageTypeDescription]) VALUES (3, N'Background')
INSERT [dbo].[ImagesTypes] ([ImageTypeId], [ImageTypeDescription]) VALUES (4, N'Banner    ')
INSERT [dbo].[ImagesTypes] ([ImageTypeId], [ImageTypeDescription]) VALUES (5, N'General   ')
INSERT [dbo].[ImagesTypes] ([ImageTypeId], [ImageTypeDescription]) VALUES (6, N'LOGO      ')
INSERT [dbo].[ImagesTypes] ([ImageTypeId], [ImageTypeDescription]) VALUES (8, N'Empty     ')
SET IDENTITY_INSERT [dbo].[ImagesTypes] OFF
SET IDENTITY_INSERT [dbo].[Players] ON 

INSERT [dbo].[Players] ([PlayerId], [FullName], [UserName], [Password], [Email], [BirthDate]) VALUES (3, N'Ohad Kaplan', N'sysadmin', N'123456', NULL, NULL)
INSERT [dbo].[Players] ([PlayerId], [FullName], [UserName], [Password], [Email], [BirthDate]) VALUES (8, N'Assaf', N'Finkel', N'789273', N'assaf.fink@gmail.com ', NULL)
INSERT [dbo].[Players] ([PlayerId], [FullName], [UserName], [Password], [Email], [BirthDate]) VALUES (9, N'Idan Kaplan', N'DaKing', N'16112007', N'idanik2007@gmail.com', CAST(N'2007-11-16' AS Date))
INSERT [dbo].[Players] ([PlayerId], [FullName], [UserName], [Password], [Email], [BirthDate]) VALUES (17, N'Moshe Ninio', N'Mosh', N'q1w2e3', NULL, NULL)
INSERT [dbo].[Players] ([PlayerId], [FullName], [UserName], [Password], [Email], [BirthDate]) VALUES (18, N'yossi steren', N'yoss', N'1234', NULL, NULL)
INSERT [dbo].[Players] ([PlayerId], [FullName], [UserName], [Password], [Email], [BirthDate]) VALUES (19, N'אוהד קפלן', N'ohadik', N'q1w2e3', N'ohadkaplan@gmail.com', NULL)
INSERT [dbo].[Players] ([PlayerId], [FullName], [UserName], [Password], [Email], [BirthDate]) VALUES (20, N'אלכס סשה קפלן', N'sasha', N'123456', NULL, NULL)
INSERT [dbo].[Players] ([PlayerId], [FullName], [UserName], [Password], [Email], [BirthDate]) VALUES (22, N'אוהד קפלן', N'ohadik38', N'1234', N'ohadkaplan@gmail.com', NULL)
INSERT [dbo].[Players] ([PlayerId], [FullName], [UserName], [Password], [Email], [BirthDate]) VALUES (24, N'עופרי קפלן', N'OFRI1976', N'123456', N'jldsnkl@ncjdsncksl', NULL)
INSERT [dbo].[Players] ([PlayerId], [FullName], [UserName], [Password], [Email], [BirthDate]) VALUES (25, N'cat test', N'ohad', N'אוהד', N'nelnewlk@ckln', NULL)
SET IDENTITY_INSERT [dbo].[Players] OFF
SET IDENTITY_INSERT [dbo].[Results] ON 

INSERT [dbo].[Results] ([ResultId], [PlayerId], [GameDate], [Duration], [NumberOfSteps]) VALUES (1, 3, CAST(N'2018-11-11T20:14:27.607' AS DateTime), CAST(N'00:10:34' AS Time), 54)
INSERT [dbo].[Results] ([ResultId], [PlayerId], [GameDate], [Duration], [NumberOfSteps]) VALUES (3, 8, CAST(N'2018-11-18T21:13:58.300' AS DateTime), CAST(N'00:42:58' AS Time), 123)
INSERT [dbo].[Results] ([ResultId], [PlayerId], [GameDate], [Duration], [NumberOfSteps]) VALUES (4, 3, CAST(N'2018-11-18T21:14:57.270' AS DateTime), CAST(N'01:22:58' AS Time), 423)
INSERT [dbo].[Results] ([ResultId], [PlayerId], [GameDate], [Duration], [NumberOfSteps]) VALUES (7, 8, CAST(N'2018-11-18T21:24:09.867' AS DateTime), CAST(N'00:42:58' AS Time), 53)
INSERT [dbo].[Results] ([ResultId], [PlayerId], [GameDate], [Duration], [NumberOfSteps]) VALUES (8, 8, CAST(N'2018-12-07T21:44:35.337' AS DateTime), CAST(N'00:42:58' AS Time), 53)
INSERT [dbo].[Results] ([ResultId], [PlayerId], [GameDate], [Duration], [NumberOfSteps]) VALUES (9, 9, CAST(N'2018-12-07T21:47:10.167' AS DateTime), CAST(N'00:42:58' AS Time), 123)
INSERT [dbo].[Results] ([ResultId], [PlayerId], [GameDate], [Duration], [NumberOfSteps]) VALUES (10, 8, CAST(N'2019-01-17T16:01:06.190' AS DateTime), CAST(N'00:10:34' AS Time), 54)
INSERT [dbo].[Results] ([ResultId], [PlayerId], [GameDate], [Duration], [NumberOfSteps]) VALUES (11, 8, CAST(N'2019-01-17T16:04:21.867' AS DateTime), CAST(N'00:42:58' AS Time), 59)
INSERT [dbo].[Results] ([ResultId], [PlayerId], [GameDate], [Duration], [NumberOfSteps]) VALUES (21, 3, CAST(N'2019-01-28T00:16:00.743' AS DateTime), CAST(N'00:00:34' AS Time), 48)
INSERT [dbo].[Results] ([ResultId], [PlayerId], [GameDate], [Duration], [NumberOfSteps]) VALUES (22, 9, CAST(N'2019-01-28T08:13:29.560' AS DateTime), CAST(N'00:00:47' AS Time), 60)
INSERT [dbo].[Results] ([ResultId], [PlayerId], [GameDate], [Duration], [NumberOfSteps]) VALUES (23, 19, CAST(N'2019-01-28T10:08:07.250' AS DateTime), CAST(N'00:00:43' AS Time), 40)
INSERT [dbo].[Results] ([ResultId], [PlayerId], [GameDate], [Duration], [NumberOfSteps]) VALUES (24, 19, CAST(N'2019-01-28T10:10:36.850' AS DateTime), CAST(N'00:00:52' AS Time), 46)
INSERT [dbo].[Results] ([ResultId], [PlayerId], [GameDate], [Duration], [NumberOfSteps]) VALUES (25, 19, CAST(N'2019-01-28T10:14:28.693' AS DateTime), CAST(N'00:00:28' AS Time), 28)
INSERT [dbo].[Results] ([ResultId], [PlayerId], [GameDate], [Duration], [NumberOfSteps]) VALUES (26, 17, CAST(N'2019-01-28T15:23:53.693' AS DateTime), CAST(N'00:00:32' AS Time), 46)
SET IDENTITY_INSERT [dbo].[Results] OFF
ALTER TABLE [dbo].[ContactUsForms] ADD  CONSTRAINT [DF_T_ContactUs_CreateDate]  DEFAULT (getdate()) FOR [CreateDate]
GO
ALTER TABLE [dbo].[Feedbacks] ADD  CONSTRAINT [DF_T_Feedbacks_FeedbackDate]  DEFAULT (getdate()) FOR [FeedbackDate]
GO
ALTER TABLE [dbo].[Results] ADD  CONSTRAINT [DF_T_Results_GameDate]  DEFAULT (getdate()) FOR [GameDate]
GO
ALTER TABLE [dbo].[ContactUsForms]  WITH CHECK ADD  CONSTRAINT [FK_ContactUsForms_Players] FOREIGN KEY([PlayerId])
REFERENCES [dbo].[Players] ([PlayerId])
GO
ALTER TABLE [dbo].[ContactUsForms] CHECK CONSTRAINT [FK_ContactUsForms_Players]
GO
ALTER TABLE [dbo].[Feedbacks]  WITH CHECK ADD  CONSTRAINT [FK_Feedbacks_Players] FOREIGN KEY([PlayerId])
REFERENCES [dbo].[Players] ([PlayerId])
GO
ALTER TABLE [dbo].[Feedbacks] CHECK CONSTRAINT [FK_Feedbacks_Players]
GO
ALTER TABLE [dbo].[Results]  WITH CHECK ADD  CONSTRAINT [FK_Results_Players] FOREIGN KEY([PlayerId])
REFERENCES [dbo].[Players] ([PlayerId])
GO
ALTER TABLE [dbo].[Results] CHECK CONSTRAINT [FK_Results_Players]
GO
/****** Object:  StoredProcedure [dbo].[GetFeedbacks]    Script Date: 28/01/2019 16:48:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[GetFeedbacks] as
select f.FeedbackId,f.FeedbackText,f.FeedbackDate,p.UserName
from [dbo].[Feedbacks] as f join [dbo].[Players] as p
on f.PlayerId = p.PlayerId
order by f.FeedbackDate desc

GO
/****** Object:  StoredProcedure [dbo].[GetLastFeedbacks]    Script Date: 28/01/2019 16:48:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE procedure [dbo].[GetLastFeedbacks] as
select top 5 f.FeedbackId,f.FeedbackText,f.FeedbackDate,p.UserName
from [dbo].[Feedbacks] as f join [dbo].[Players] as p
on f.PlayerId = p.PlayerId
order by f.FeedbackDate
GO
/****** Object:  StoredProcedure [dbo].[GetResults]    Script Date: 28/01/2019 16:48:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

create procedure [dbo].[GetResults] as
select r.ResultId,r.PlayerId,p.UserName,r.GameDate,r.Duration,r.NumberOfSteps
from Results as r
join Players as p
on r.PlayerId=p.PlayerId
order by r.Duration,r.NumberOfSteps
GO
/****** Object:  StoredProcedure [dbo].[GetTopScores]    Script Date: 28/01/2019 16:48:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure [dbo].[GetTopScores] as 
SELECT TOP (10) r.ResultId,p.FullName,r.GameDate
      ,[Duration]
      ,[NumberOfSteps]
  FROM [MemoryGame].[dbo].[Results] as r with(nolock)
  join [MemoryGame].[dbo].[Players] as p with(nolock)
  on r.PlayerId = p.PlayerId
  order by r.Duration ,r.NumberOfSteps

GO
USE [master]
GO
ALTER DATABASE [MemoryGame] SET  READ_WRITE 
GO
