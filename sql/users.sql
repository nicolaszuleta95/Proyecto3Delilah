CREATE TABLE Delilah_db.users (
	user_ID INT auto_increment NOT NULL,
	username varchar(100) NOT NULL,
	password varchar(100) NOT NULL,
	email varchar(100) NOT NULL,
	fullname varchar(100) NOT NULL,
	address varchar(100) NOT NULL,
	phone NUMERIC NOT NULL,
	user_type BOOL NOT NULL,
	CONSTRAINT users_PK PRIMARY KEY (user_ID)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_0900_ai_ci;