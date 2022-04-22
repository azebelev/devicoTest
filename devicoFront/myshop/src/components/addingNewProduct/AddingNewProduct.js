import { useState } from 'react';
import CategoryForm from '../CategoryForm/CategoryForm';
import ProductService from '../services/requestServer';
import SuppliersForm from '../SuppliesForm/SuppliersForm';



const AddingNewProduct = ({ suppliers, categories, setProductPage }) => {

  const [visibleSupplierForm, setVisibleSupplierForm] = useState(false);
  const [visibleCategoryForm, setVisibleCategoryForm] = useState(false);
  const [productData, setProductData] = useState({});
  const [supplierData, setSupplierData] = useState({});
  const [categoryData, setCategoryData] = useState({});

  const showCategoryForm = (e) => {
    if (e.target.value) {
      setVisibleCategoryForm(false);
      handleChangeCategory(e);
    } else setVisibleCategoryForm(true);
  }
  const showSupplierForm = (e) => {
    if (e.target.value) {
      setVisibleSupplierForm(false)
      handleChangeSupplier(e);
    } else setVisibleSupplierForm(true);
  }

  const handleChangeProduct = (e) => {
    setProductData(prev => ({
      ...prev, [e.target.name]: e.target.value
    }))
  }

  const handleChangeCategory = (e) => {
    if (e.target.name === 'categoryID') setCategoryData({ [e.target.name]: e.target.value });
    else {
      if (categoryData.categoryID) setCategoryData({});

      setCategoryData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }
  }

  const handleChangeSupplier = (e) => {
    if (e.target.name === 'supplierID') setSupplierData({ [e.target.name]: e.target.value });
    else {
      if (supplierData.supplierID) setSupplierData({});

      setSupplierData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ ...productData, ...supplierData, ...categoryData });
    console.log(productData.Price)
    if (Number(productData.Price) === 'NaN') {
      alert('Price should be a number')
      return
    }
    await ProductService.createProduct({ ...productData, ...supplierData, ...categoryData });
    setProductPage(true);

  }



  return (
    <div className="bg-light p-5">
      <form id="admin__form " action="#" className="row" onSubmit={handleSubmit}>
        <div className="form-floating col-md-6 mb-2">
          <input onChange={handleChangeProduct} name="productName" type="text" className="form-control" placeholder="." required />
          <label for="productName">Product name</label>
        </div>
        <div className="form-floating col-md-6">
          <input onChange={handleChangeProduct} type="text" name="price" className="form-control" placeholder="." required />
          <label className="form-label form-label-sm " for="price">Price</label>
        </div>


        <div className="col-md-6">
          <label className="form-label form-label-sm ">Choose Category</label>
          <select name='categoryID' className="form-select"
            aria-label="Default select example"
            required
            onChange={showCategoryForm}>


            <option value=""></option>
            {categories.map(category =>
              <option name="categoryID" value={category.CategoryID}>{category.CategoryName}</option>
            )}
            <option value="">add new category</option>
          </select>

          {visibleCategoryForm && <CategoryForm handleChangeCategory={handleChangeCategory} />}

        </div>
        <div className="col-md-6">
          <label className="form-label form-label-sm ">Choose supplier</label>
          <select name='supplierID' className="form-select"
            aria-label="Default select example"
            required
            onChange={showSupplierForm}>
            <option value=""></option>
            {suppliers.map(supplier =>
              <option value={supplier.SupplierID}>{supplier.SupplierName}</option>
            )}
            <option value="" >add new supplier</option>
          </select>

          {visibleSupplierForm && <SuppliersForm handleChangeSupplier={handleChangeSupplier} />}
        </div>



        <button type="submit" className="col-sm-5 col-lg-3  btn btn-primary btn-md m-auto mt-5">Submit</button>
      </form >

    </div >


  )
}

export default AddingNewProduct;

