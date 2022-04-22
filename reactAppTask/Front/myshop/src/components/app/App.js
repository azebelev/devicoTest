
import { useState, useEffect } from 'react';
import AddingNewProduct from '../addingNewProduct/AddingNewProduct';
import AppHeader from '../appHeader/AppHeader';
import ProductsList from '../productsList/ProductList';
import ProductService from '../services/requestServer';
import './App.css';

function App() {
  const [productPage, setProductPage] = useState(true);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    loadData();
  }, [productPage]);

  const loadData = async () => {
    const { products, suppliers, categories } = await ProductService.getData();
    setProducts(products);
    setCategories(categories);
    setSuppliers(suppliers);
  }

  return (
    <div className="App">
      <AppHeader setProductPage={setProductPage} productPage={productPage} />
      <main>
        {productPage ?
          <ProductsList products={products} loadData={loadData} /> :
          < AddingNewProduct categories={categories} suppliers={suppliers} setProductPage={setProductPage} />}
      </main>
    </div>
  );
}

export default App;
