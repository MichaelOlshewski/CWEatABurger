### Schema

CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers (
	id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	isDevoured BOOLEAN DEFAULT false
);
