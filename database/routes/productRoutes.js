const Router = require('express');
const {getProducts, getProductsByCategory} = require('../controllers/productsController');

const router = Router();

router.get('/products', getProducts);
router.get('/products/:id', getProductsByCategory)

module.exports = router;