DROP DATABASE IF EXISTS bamazon;

CREATE database bamazon;

USE bamazon;

CREATE TABLE products(
    item_id INT NOT NULL,
    product_name VARCHAR NOT NULL,
    department_name VARCHAR NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INT(20) NOT NULL,
    PRIMARY KEY (item_id)
);

Select * FROM products;

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (101, "The Last of Us-Remastered", "PS4", 29.99, 30),
       (102, "God of War", "PS4", 59.99, 20),
       (103, "Spiderman", "PS4", 59.99, 25),
       (104, "Horizon: Zero Dawn", "PS4", 59.99, 25),
       (201, "Gears of War 5", "Xbox One", 59.99, 15),
       (202, "Halo: The Master Chief Collection", "Xbox One", 39.99, 30),
       (203, "Crackdown 3", "Xbox One", 15.99, 60),
       (204, "Forza Horizon 4", "Xbox One", 29.99, 45), 
       (301, "Zelda: Breath of the Wild", "Nintendo Switch", 59.99, 5),
       (302, "Super Smash Brothers Ultimate", "Nintendo Switch", 59.99, 6),
       (303, "Luigi's Mansion 3", "Nintendo Switch", 59.99, 4),
       (304, "Untitled Goose Game", "Nintendo Switch", 19.99, 10)