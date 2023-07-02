#uuid-ossp required

CREATE TABLE users(user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(), user_name VARCHAR(255) NOT NULL, user_email VARCHAR(255) NOT NULL, user_password VARCHAR(255) NOT NULL, user_mobile VARCHAR(255), user_address VARCHAR(255));
INSERT INTO users(user_name, user_email, user_password) VALUES('haamym','haamym@gmail.com','haamym123');