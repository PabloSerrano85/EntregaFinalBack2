// src/middlewares/authorize.js

router.post('/products', authorizeRole('admin'), createProduct);
router.post('/cart/:cid/product/:pid', authorizeRole('user'), addToCart);


export function authorizeRole(role) {
    return (req, res, next) => {
      if (req.user.role !== role) return res.status(403).send("No autorizado");
      next();
    };
  }
  