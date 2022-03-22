CREATE DATABASE 'bmi';

CREATE TABLE user(
    ID_user INT AUTO_INCREMENT,
    name VARCHAR(255),
    lastName VARCHAR(255),
    mail VARCHAR(255),
    password VARCHAR(255),
    lastUsed INT,
    PRIMARY KEY(ID_user)
)

CREATE TABLE user(
    ID_user INT,
    height FLOAT,
    weight FLOAT,
    BMI FLOAT
)

ALTER TABLE `user_data` ADD CONSTRAINT `FK_user_ID` FOREIGN KEY (`ID_user`) REFERENCES `user`(`ID_user`) ON DELETE CASCADE ON UPDATE CASCADE;
