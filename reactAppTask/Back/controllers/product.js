import { Router } from 'express';
import { deleteProduct, getALL, createProduct } from '../services/mysqlCRUD.js';


const router = Router();

router.get('/getAll', async (req, res) => {
  const { products, suppliers, categories } = await getALL();
  if (products) {
    res.status(200).send({ products, suppliers, categories })
  } else res.status(500).send('INTERNAL SERVER ERROR');

})


router.post('/createProduct', async (req, res) => {
  const product = req.body;
  const id = await createProduct(product);

  if (id) {
    res.status(201).send({ created: true })
  } else res.status(500).send({ created: false })
});


router.delete('/deleteProduct', async (req, res) => {
  const productID = req.body;
  console.log('req.body', req.body)
  const result = await deleteProduct(productID);

  if (result) {
    res.status(200).send({ deleted: true });
  } else res.status(500).send({ deleted: false });
})

export { router };