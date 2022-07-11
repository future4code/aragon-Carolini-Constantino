A)
SELECT * FROM Users_List;

B)
SELECT id AS identifier, name 
FROM Users_List;

C)
SELECT * 
FROM Users_List
WHERE id = "003";

D)
SELECT *
FROM Users_List
WHERE name LIKE "%a%";

E)
SELECT *
FROM Users_List
WHERE name NOT LIKE "%r%" AND name LIKE "%u%";