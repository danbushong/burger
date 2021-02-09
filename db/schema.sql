DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  burger_name VARCHAR(30),
  devoured TINYINT

);
INSERT INTO burgers ( burger_name, devoured)
VALUE ("DanBurger", false);
INSERT INTO burgers ( burger_name, devoured)
VALUE ("SophiaBurger", false);
INSERT INTO burgers ( burger_name, devoured)
VALUE ("AndyBurger", false);
INSERT INTO burgers ( burger_name, devoured)
VALUE ("CharBurger", true);