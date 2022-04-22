-- 1	Select product with product name that begins with ‘C’.
-- 2	Select product name with the smallest price.
-- 3	Select cost(sum) of all productsfrom the USA.
-- 4	Select unique suppliers that supply Condiments.
-- 5	Select supplier (SupplierName, TotalPrice) with highest cost(sum) of all products
-- 6	Add to database new supplier with name: ‘Norske Meierier’, city: ‘Lviv’, country: ‘Ukraine’ which will supply new product with name: ‘Green tea’, price: 10, and related to category with name: ‘Beverages’



-- 1
SELECT ProductName,SupplierName,City,Country,CategoryName,Description,Price FROM products as p
JOIN suppliers USING(SupplierID)
JOIN categories USING(CategoryID)
WHERE ProductName like 'C%';

-- 2
SELECT ProductName FROM products
WHERE Price= (SELECT min(Price) FROM products);

-- 3
SELECT sum(Price) as TotalPriceUSA FROM products
JOIN suppliers as s USING(SupplierID)
WHERE s.Country='USA';

-- 4
SELECT DISTINCT(SupplierName) from products
JOIN suppliers USING(SupplierID)
JOIN categories as c USING(CategoryID)
WHERE c.CategoryName='Condiments';

-- 5
SELECT SupplierName, sum(Price) as TotalPrice FROM products
JOIN suppliers USING(SupplierID)
GROUP BY SupplierName
HAVING TotalPrice=(SELECT sum(Price) as TP FROM products
                   JOIN suppliers  USING(SupplierID)
                   GROUP BY SupplierName
                   ORDER BY TP DESC
                   LIMIT 1);

--6
INSERT INTO suppliers(SupplierName,City,Country)
VALUES('Norske Meierier','Lviv','Ukraine' );
INSERT INTO products(ProductName,SupplierID,CategoryID,Price)
VALUES('Green tea',
(SELECT last_insert_id()),
(SELECT CategoryID from categories
WHERE CategoryName='Beverages'),
10);                   


