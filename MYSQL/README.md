# Database Creation

## To create database 
--> create database db_name

## To use the database 
--> use db_name

# categories of datatypes - 1.string , 2.numeric , 3.date and time

in string datatype we have char (0 to 255), varchar (0 to 65535), binary , varbinary, enum ,set and many more

in number datatype we have bit (1 to 64), tinybit (-128 to 127), int , integer, smallint, bigint , boolen , float , double, etc

in date dataype we have date , datetime, timestamp , time , year, etc

# Create Query

## to create table

--> CREATE TABLE users(
    id int unsigned,
    name varchar(100),
    email varchar(150),
    password varchar(100),
    contact varchar(15),
    address text,
    dob date,
    gender enum("M","F","O"),
    status boolean
)

# Insert Query 
## to insert single row 

--> insert into tablename (col1, col2, col3 ,col4 ,col5) values (val1, val2, val3 , val4 , val5);

--> INSERT INTO users
(id, name , email, password, contact, address, dob, gender, status) VALUES 
(1, "Yash", "y@gmail.com", "12341234" , "1234567890","gitai nivas", "1999-01-10", "F" , 1);

## to insert multiple rows 

--> insert into tablename 
(col1, col2, col3 ,col4 ,col5) values 
(val1, val2, val3 , val4 , val5),
(val1, val2, val3 , val4 , val5),
(val1, val2, val3 , val4 , val5),
(val1, val2, val3 , val4 , val5);

--> INSERT INTO users
(id, name , email, password, contact, address, dob, gender, status) VALUES 
(1, "Yash1", "y1@gmail.com", "11111111" , "1111111111","gitai1", "1999-01-10", "F" , 1),
(2, "Yash2", "y2@gmail.com", "22222222" , "2222222222","gitai2", "1999-01-10", "F" , 1),
(1, "Yash3", "y3@gmail.com", "33333333" , "3333333333","gitai3", "1999-01-10", "F" , 1),
(1, "Yash4", "y4@gmail.com", "44444444" , "4444444444","gitai4", "1999-01-10", "F" , 1);

## if we are inserting data to all columns then we dont need to mention column name 

--> INSERT INTO users VALUES 
(4, "Yash4", "y4@gmail.com", "11111111" , "1111111111","gitai1", "1999-01-10", "F" , 1),
(5, "Yash5", "y5@gmail.com", "22222222" , "2222222222","gitai2", "1999-01-10", "F" , 1);


# select query

## select some columns 
--> select id , name from users;

## select all columns 
--> select * from users;

## selecting with aliac value
--> select id , name as "Student name" from users;

