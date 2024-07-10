CREATE DATABASE petadoption;

CREATE TABLE accounts(
   user_id SERIAL PRIMARY KEY,
   username VARCHAR (50),
   password VARCHAR (50));

CREATE TABLE meet (
   
   parentname VARCHAR(50),
   petname VARCHAR(50),
   meetdate VARCHAR(50),
   phonenumber VARCHAR(9),
   description VARCHAR(100)
);
CREATE TABLE adoptme (
    pet_id SERIAL PRIMARY KEY,
    parentname VARCHAR(50),
    petname VARCHAR(50),
    category VARCHAR(50),
    meetdate DATE,
    phonenumber VARCHAR(15), 
    description VARCHAR(100)
);


CREATE TABLE dog (
   
   petsname VARCHAR(50),
   gender VARCHAR(50),
   age VARCHAR(50),
   location VARCHAR(50),
   ownername VARCHAR(100),
   phoneno VARCHAR(100)
);
CREATE TABLE cat (
   cat_id SERIAL PRIMARY KEY,
   catname VARCHAR(50),
   gender VARCHAR(50),
   age VARCHAR(50),
   location VARCHAR(50),
   ownername VARCHAR(100),
   phoneno VARCHAR(100)
);
CREATE TABLE bird (
   bird_id SERIAL PRIMARY KEY,
   birdname VARCHAR(50),
   gender VARCHAR(50),
   age VARCHAR(50),
   location VARCHAR(50),
   ownername VARCHAR(100),
   phoneno VARCHAR(100)
);
