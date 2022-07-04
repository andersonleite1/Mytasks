DROP SCHEMA IF EXISTS mytasks_db;

CREATE SCHEMA IF NOT EXISTS mytasks_db;

CREATE TABLE mytasks_db.Users (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  username VARCHAR(300) NOT NULL,
  password VARCHAR(50) NOT NULL
);

CREATE TABLE mytasks_db.Tasks (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  userId INTEGER,
  task TEXT NOT NULL,
  status CHAR(50) NOT NULL,
  created TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (userId) REFERENCES mytasks_db.Users (id)
);

INSERT INTO
  mytasks_db.Users (username, password)
VALUES
  ("joao", "1234567");

INSERT INTO
  mytasks_db.Users (username, password)
VALUES
  ("maria", "abcdef");

INSERT INTO
  mytasks_db.Tasks (userId, task, status)
VALUES
  (1, "Enviar email para o cliente x", "in progress");

INSERT INTO
  mytasks_db.Tasks (userId, task, status)
VALUES
  (2, "Enviar email para o cliente y", "pending");
