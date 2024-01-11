-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

CREATE TABLE shopping_items (
	id SERIAL PRIMARY KEY,
	name varchar(80) NOT NULL,
	quantity decimal NOT NULL,
  unit varchar(20),
  purchased boolean
);

INSERT INTO "shopping_items" ("name", "quantity", "unit", "purchased")
VALUES ('Bananas', 2, 'bunch', false), ('Apples', 6, 'each', false);