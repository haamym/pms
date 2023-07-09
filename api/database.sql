#uuid-ossp required

admin = 0543
user = 9870



CREATE TABLE users (user_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,user_name character varying(255) NOT NULL,user_email character varying(255) NOT NULL,user_password character varying(255) NOT NULL,user_mobile character varying(255),user_address character varying(255),role integer NOT NULL,property_id integer);
INSERT INTO users(user_name, user_email, user_password) VALUES('haamym','haamym@gmail.com','haamym123');

CREATE TABLE properties(property_id SERIAL PRIMARY KEY, property_name VARCHAR(255) NOT NULL, description VARCHAR(255), location VARCHAR(255) NOT NULL);