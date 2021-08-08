CREATE TABLE Delilah_db.`order` (
	order_ID INT auto_increment NOT NULL,
	user_ID INT NOT NULL,
	`date` DATETIME NOT NULL,
	total DECIMAL(10,2) NOT NULL,
	state varchar(100) NOT NULL,
	address varchar(100) NOT NULL,
	pay_type varchar(100) NOT NULL,
	CONSTRAINT order_PK PRIMARY KEY (order_ID)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_0900_ai_ci;
