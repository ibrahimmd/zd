CREATE DATABASE IF NOT EXISTS demodb;
/* CREATE USER 'demouser'@'172.%.%.%' IDENTIFIED BY 'password'; */
CREATE USER IF NOT EXISTS 'demouser'@'%' IDENTIFIED BY 'password';
/* GRANT ALL PRIVILEGES ON demodb.* TO 'demouser'@'172.%.%.%' WITH GRANT OPTION; */
GRANT ALL PRIVILEGES ON demodb.* TO 'demouser'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;

USE demodb;
create table if not exists users(
   user_id INT NOT NULL AUTO_INCREMENT,
   username VARCHAR(100) NOT NULL,
   name VARCHAR(40) NOT NULL,
   lastname VARCHAR(40) NOT NULL,
   PRIMARY KEY ( user_id )
);

/* FIXME: check if index,constraint exist first */
create index index_username on users(username);
alter table users add constraint uc_username UNIQUE (username); 