
const urlApi = 'http://localhost:8080/api/'

class ProductService {
  static getData = async () => {
    const res = await fetch(urlApi + 'getAll');

    return await res.json();
  }
  static createProduct = async (product) => {
    const body = JSON.stringify(product);
    const res = await fetch(urlApi + 'createProduct', {
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return await res.json();
  }

  static deleteProduct = async (id) => {

    await fetch(urlApi + 'deleteProduct', {
      method: 'DELETE',
      body: JSON.stringify({ id }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}

export default ProductService;