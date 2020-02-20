const express = require('express');
const router = express.Router();

const PetsController = require('../controller/PetsController');

router.get('/', PetsController.home);
router.get('/lista', PetsController.index);
router.get('/add/:nome?/:tipo?/:idade?/:raca?/:genero?', PetsController.add);
router.get('/remove/:id?', PetsController.remove);
router.get('/search/:nome?', PetsController.search);

module.exports = router;