-- Create users table to hold users data
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email TEXT UNIQUE NOT NULL,
    entries SMALLINT DEFAULT 0,
    joined TIMESTAMP NOT NULL
);

-- Create login table to store login information
CREATE TABLE login(
    id SERIAL PRIMARY KEY,
    hash VARCHAR(120) NOT NULL,
    email TEXT UNIQUE NOT NULL
);