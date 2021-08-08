CREATE TABLE Delilah_db.items (
	item_ID INT auto_increment NOT NULL,
	order_ID INT NOT NULL,
	dish_ID INT NOT NULL,
	quantity INT NOT NULL,
	price DOUBLE(10,2) NOT NULL,
	CONSTRAINT items_PK PRIMARY KEY (item_ID)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_0900_ai_ci;
