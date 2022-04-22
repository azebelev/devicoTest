import mysql from 'mysql2';
import { dbCreation, insert, select, deleteProd } from '../repository/queries.js';
import dotenv from 'dotenv'
dotenv.config()

const dbConfig = {
  password: process.env.DB_PASS,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  host: 'localhost',
  port: process.env.DB_PORT
};

const db = mysql.createConnection({ ...dbConfig, multipleStatements: true });

async function getALL() {
  let products, suppliers, categories;
  let result;
  try {
    products = (await db.promise().query(select.selectProducts))[0];
    suppliers = (await db.promise().query(select.selectSuppliers))[0];
    categories = (await db.promise().query(select.selectCategories))[0];
    result = true;
  } catch (error) {
    console.log('error in during select all', error);
  }
  if (result) return { products, suppliers, categories };

  return;
}

async function createProduct(product) {
  let id;
  try {
    if (!product.supplierID) {
      const { supplierName, city, country } = product;
      product.supplierID = (await db.promise().query(insert.supplier, [supplierName, city, country]))[0].insertId

    }
    if (!product.categoryID) {
      const { categoryName, description } = product;
      product.categoryID = (await db.promise()
        .query(insert.category, [categoryName, description]))[0].insertId
    }

    const { productName, supplierID, categoryID, price } = product;
    id = (await db.promise().
      query(insert.product, [productName, supplierID, categoryID, price]))[0].insertId
  } catch (error) {
    console.log('creation of product failed ', error);
  }

  return id;
}


async function deleteProduct({ id }) {
  let result;
  try {
    await db.promise().query(deleteProd, id)
    result = 'ok';
  } catch (error) {
    console.log('deletion of product failed ', error);
  }
  return result;
}

async function createDB() {
  await db.promise().query(dbCreation);
}

export { createDB, deleteProduct, createProduct, getALL };
