CREATE DATABASE talkalot;

CREATE TABLE messages (
  id VARCHAR(2000) PRIMARY KEY,
  user_email VARCHAR(250),
  title VARCHAR(5000),
  date VARCHAR(300)
);

CREATE TABLE users (
  email VARCHAR(255) PRIMARY KEY,
  hashed_password VARCHAR(250)
);
