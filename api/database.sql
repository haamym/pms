#uuid-ossp required

admin = 0543
user = 9870



CREATE TABLE users (user_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,user_name character varying(255) NOT NULL,user_email character varying(255) NOT NULL,user_password character varying(255) NOT NULL,user_mobile character varying(255),user_address character varying(255),role integer NOT NULL,property_id integer);
INSERT INTO users(user_name, user_email, user_password) VALUES('haamym','haamym@gmail.com','haamym123');
CREATE TABLE properties(property_id SERIAL PRIMARY KEY, property_name VARCHAR(255) NOT NULL, description VARCHAR(255), location VARCHAR(255) NOT NULL);
CREATE TABLE facilities(facility_id SERIAL PRIMARY KEY, property_id INT, FOREIGN KEY(property_id) REFERENCES properties(property_id), facility_name VARCHAR(255) NOT NULL, description VARCHAR(255) NOT NULL, location VARCHAR(255) NOT NULL);
-- property id is missing here
CREATE TABLE access_cards(access_id SERIAL PRIMARY KEY, user_id uuid, FOREIGN KEY(user_id) REFERENCES users(user_id), card_number VARCHAR(255) NOT NULL, expiration_date DATE NOT NULL);
CREATE TABLE maintenance_requests(request_id SERIAL PRIMARY KEY, user_id uuid, FOREIGN KEY(user_id) REFERENCES users(user_id), facility_id INT, FOREIGN KEY(facility_id) REFERENCES facilities(facility_id), request_date DATE NOT NULL, description TEXT NOT NULL);
CREATE TABLE parking_system(parking_id SERIAL PRIMARY KEY, user_id uuid, FOREIGN KEY(user_id) REFERENCES users(user_id), vehicle_number VARCHAR(255) NOT NULL, parking_slot VARCHAR(255) NOT NULL);
CREATE TABLE reports(report_id SERIAL PRIMARY KEY, user_id uuid, FOREIGN KEY(user_id) REFERENCES users(user_id), report_date DATE NOT NULL, category VARCHAR(255) NOT NULL, description VARCHAR(255) NOT NULL);

-- Table: Advertisement		
-- Column Name	Data Type	Constraints
-- ad_id	Integer	Primary Key
-- admin_id	Integer	Foreign Key (Admins)
-- ad_title	Text	Not Null
-- ad_content	Text	Not Null
-- ad_date	Date	Not Null

CREATE TABLE