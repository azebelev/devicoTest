
const dbCreation = `CREATE TABLE IF NOT EXISTS suppliers 
    (SupplierID INT NOT NULL AUTO_INCREMENT,
    SupplierName VARCHAR(255) NOT NULL,
    City VARCHAR(255) NOT NULL,
    Country VARCHAR(255) NOT NULL,
    PRIMARY KEY (SupplierID))
    ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS categories 
    (CategoryID INT NOT NULL AUTO_INCREMENT,
    CategoryName VARCHAR(255) NOT NULL,
    Description VARCHAR(255) NOT NULL,
    PRIMARY KEY (CategoryID))
    ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS products
    (ProductID INT NOT NULL AUTO_INCREMENT,
    ProductName VARCHAR(255) NOT NULL,
    SupplierID INT NOT NULL,
    CategoryID INT NOT NULL,
    Price DOUBLE NOT NULL,
    FOREIGN KEY (SupplierID) 
    REFERENCES suppliers(SupplierID),
    FOREIGN KEY (CategoryID) 
    REFERENCES categories(CategoryID),
    PRIMARY KEY (ProductID))
    ENGINE=InnoDB;`


const insertInitial = `INSERT INTO suppliers(SupplierName,City,Country)
                       VALUES('Exotic Liquid','London','UK');
                       INSERT INTO suppliers(SupplierName,City,Country)
                       VALUES('New Orleans Cajun Delights','New Orleans','USA');
                       INSERT INTO suppliers(SupplierName,City,Country)
                       VALUES('Grandma Kelly’s Homestead','Ann Arbor','USA');
                       INSERT INTO suppliers(SupplierName,City,Country)
                       VALUES('Tokyo Traders','Tokyo','Japan');
                       INSERT INTO suppliers(SupplierName,City,Country)
                       VALUES('Cooperativa de Quesos ‘Las Cabras’','Oviedo','Spain');
                       
                       
                       
                       INSERT INTO categories(CategoryName,Description)
                       VALUES('Beverages','Soft drinks, coffees, teas, beers, and ales');
                       INSERT INTO categories(CategoryName,Description)
                       VALUES('Condiments','Sweet and savory sauces, relishes, spreads, and seasonings');
                       INSERT INTO categories(CategoryName,Description)
                       VALUES('Confections','Desserts, candies, and sweet breads');
                       INSERT INTO categories(CategoryName,Description)
                       VALUES('Dairy Products','Cheeses');
                       INSERT INTO categories(CategoryName,Description)
                       VALUES('Grains/Cereals','Breads, crackers, pasta, and cereal');
                       
                       
                       INSERT INTO products(ProductName,SupplierID,CategoryID,Price)
                       VALUES('Chais',1,1,18.00);
                       INSERT INTO products(ProductName,SupplierID,CategoryID,Price)
                       VALUES('Chang',1,1,19.00);
                       INSERT INTO products(ProductName,SupplierID,CategoryID,Price)
                       VALUES('Aniseed Syrup',1,2,10.00);
                       INSERT INTO products(ProductName,SupplierID,CategoryID,Price)
                       VALUES('Chef Anton’s Cajun Seasoning',2,2,22.00);
                       INSERT INTO products(ProductName,SupplierID,CategoryID,Price)
                       VALUES('Chef Anton’s Gumbo Mix',2,2,21.35);`;


const product = `INSERT INTO products(ProductName,SupplierID,CategoryID,Price) VALUES(?,?,?,?);`;
const supplier = `INSERT INTO suppliers(SupplierName,City,Country) VALUES(?,?,?);`;
const category = `INSERT INTO categories(CategoryName,Description) VALUES(?,?);`;
const deleteProd = `DELETE FROM products WHERE ProductID=?`;
const selectProducts = `SELECT ProductID,ProductName, CategoryName, Country, Price FROM products
                   JOIN suppliers USING(SupplierID)
                   JOIN categories USING(CategoryID)
                   ORDER BY ProductName`;
const selectCategories = `SELECT CategoryID,CategoryName FROM categories ORDER BY CategoryName`;
const selectSuppliers = `SELECT SupplierID,SupplierName FROM suppliers ORDER BY SupplierName`;


const insert = { product, supplier, category };
const select = { selectProducts, selectCategories, selectSuppliers };

export { dbCreation, insert, select, deleteProd, insertInitial };