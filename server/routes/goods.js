const router = require('express').Router();
const {
  getGood,
  newGood,
  getGoods,
  changeGood,
  deleteGood,
} = require('./handlers/Goods');

router.get('/', getGoods);
router.post('/', newGood);
router.get('/:id', getGood);
router.delete('/:id', deleteGood);
router.put('/:id/participate/:uid', changeGood);

module.exports = router;