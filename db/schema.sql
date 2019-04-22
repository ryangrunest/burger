### SCHEMA

CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    NAME VARCHAR(255) NOT NULL,
    DEVOURED BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);

### -- Insert rows into table 'burgers'
INSERT INTO burger_db.burgers(name, devoured)
VALUES
('cheeseburger', false),
('killerburger', true),
('veggieburger', false)