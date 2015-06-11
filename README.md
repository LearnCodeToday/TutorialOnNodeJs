# TutorialOnNodeJs

STEP 1 :

Please create database  in mysql with the 2 of these tables :


CREATE TABLE `productcategory` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `CategoryName` varchar(100) NOT NULL,
  `Details` varchar(400) DEFAULT NULL,
  `IsValid` tinyint(1) NOT NULL,
  `CreatedDate` datetime NOT NULL,
  `ModifiedDate` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `idx_productcategory_CreatedDate` (`CreatedDate`) COMMENT 'Added Index on the createdate'
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;



CREATE TABLE `product` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `ProductCategory_FK` int(11) DEFAULT NULL,
  `ProductCost` float NOT NULL,
  `Name` varchar(200) NOT NULL,
  `Description` longtext,
  `CreatedDt` datetime NOT NULL,
  `IsActive` tinyint(1) NOT NULL,
  `UpdatedDt` datetime DEFAULT NULL,
  `ProductPrice` float NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `FKC_Product_to_ProductCategory_idx` (`Id`,`ProductCategory_FK`),
  KEY `FKC_Product_to_ProductCategory` (`ProductCategory_FK`),
  CONSTRAINT `FKC_Product_to_ProductCategory` FOREIGN KEY (`ProductCategory_FK`) REFERENCES `productcategory` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;


STEP 2:


Please find the code Inside the Server/Dao/mysqlConnectionString.js; include your mysql connecting string information such as host name, user, password, database etc

connection  :{
        
        dev : {
            host: 'localhost',
            user: 'root',
            password : 'yourdevpassword',
            database : 'yourdevdatabase'
        }

        ,

        qa : {
             host: 'localhost',
            user: 'root',
            password : 'yourtestpassword',
            database : 'yourdatabase'
        }
        ,prod : {
            host: 'urProductonHost',
            user: 'userId',
            password : 'password',
            database : 'databaseName'
        }
    
    }

	
