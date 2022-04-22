
import ProductService from '../services/requestServer';
import './productList.css';

const ProductsList = ({ products, loadData }) => {

  const deleteProduct = async (e) => {
    await ProductService.deleteProduct(e.target.id)
      .catch(error => alert('product is not deleted'));
    loadData();
  }

  return (
    <>

      <table className="table table-primary table-striped" >
        <thead>
          <tr>
            <th scope="col">ProductName</th>
            <th scope="col">CategoryName</th>
            <th scope="col">Country</th>
            <th scope="col">Price</th>
            <th scope="col">delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map(item => (
            <tr key={item.ProductID} className="tab__row">
              <td className="tab__item">{item.ProductName}</td>
              <td className="tab__item">{item.CategoryName}</td>
              <td className="tab__item">{item.Country}</td>
              <td className="tab__item">{item.Price}</td>
              <td className="tab__item">
                <button id={item.ProductID}
                  onClick={deleteProduct}
                  className="btn btn-outline-danger">delete</button>
              </td>
            </tr>
          ))}

        </tbody>
      </table>
    </>
  )
}

export default ProductsList;