#uuid-ossp required

admin = 0543
user = 9870



CREATE TABLE users(user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(), user_name VARCHAR(255) NOT NULL, user_email VARCHAR(255) NOT NULL, user_password VARCHAR(255) NOT NULL, user_mobile VARCHAR(255), user_address VARCHAR(255));
INSERT INTO users(user_name, user_email, user_password) VALUES('haamym','haamym@gmail.com','haamym123');

	Properties	
Column Name	Data Type	Constraints
property_id	Int	Primary
property_name	text	Not Null
property_address	text	Not Null
property_contact	text	Not Null
property_email	text	Not Null




CREATE TABLE facilities(facility_id SERIAL PRIMARY KEY, facility_name VARCHAR(255) NOT NULL, description VARCHAR(255), location VARCHAR(255) NOT NULL);