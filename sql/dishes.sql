CREATE TABLE Delilah_db.dishes (
	dish_ID INT auto_increment NOT NULL,
	name varchar(100) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	description VARCHAR(100) NOT NULL,
	category varchar(100) NOT NULL,
	photo VARCHAR(100) NOT NULL,
	CONSTRAINT dishes_PK PRIMARY KEY (dish_ID)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_0900_ai_ci;
