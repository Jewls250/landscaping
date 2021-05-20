DROP DATABASE cust_reviews;
CREATE DATABASE cust_reviews;
USE cust_reviews;
CREATE TABLE review(
    id INTEGER AUTO_INCREMENT,
    userName VARCHAR (50),
    userComment VARCHAR (250),
    rating INTEGER,
    primary key (id)
);
CREATE TABLE page_admin(
    id INTEGER AUTO_INCREMENT,
    email VARCHAR(50),
    password VARCHAR(50),
    primary key (id)
);


INSERT INTO review (userName, userComment, rating)
VALUES ("david","this is the best company ever",5 ) ;