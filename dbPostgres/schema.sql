DROP DATABASE IF EXISTS alotest;
CREATE DATABASE alotest;

\c alotest;

CREATE TABLE relatedItems (
  id SERIAL,
  name VARCHAR NOT NULL,
  price decimal NOT NULL,
  img VARCHAR NOT NULL,
  cat VARCHAR NOT NULL,
  link VARCHAR NOT NULL
);


COPY relatedItems ( id,name,price,img,cat,link ) FROM '/Users/kobohkosaka/Desktop/HR/wilson_service/relatedItems.csv' WITH DELIMITER AS  ',' CSV HEADER;