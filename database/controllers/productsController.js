const Product = require('../models/productsModel');

const getProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        return res.status(500).json({ message: error.message });

    }
}

// const getProductsByCategory = async (req, res) => {
//     try {
//         const products = await Product.findAll(
//             {
//                 where: {
//                     category: 1
//                 }
//             }
//         );
//         res.json(products);
//     } catch (error) {
//         return res.status(500).json({ message: error.message });

//     }
// }
module.exports = { getProducts };