
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user"
(
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "review"
(
    "review_id" SERIAL PRIMARY KEY,
    "review" VARCHAR (5000)
);

CREATE TABLE "rating"
(
    "rating_id" SERIAL PRIMARY KEY,
    "rating" INT NOT NULL CHECK (rating >= 0)
);

CREATE TABLE "series"
(
    "series_id" SERIAL PRIMARY KEY,
    "series" VARCHAR (1000),
    "episode" VARCHAR (1000),
    "season" VARCHAR (1000),
    "platform" VARCHAR (1000)
);