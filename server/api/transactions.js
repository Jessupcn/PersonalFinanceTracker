const router = require('express').Router();
const { Transaction } = require('../db/models');
module.exports = router;

//get all the products
router.get('/', (req, res, next) => {
  Transaction.findAll({
    where: '',
  })
  .then(transactions => res.json(transactions))
  .catch(next);
});

router.post('/', (req, res, next) => {
  Transaction.create()
  .then(transactions => res.json(transactions))
  .catch(next);
});
