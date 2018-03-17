const router = require('express').Router();
const {
  getUser,
  newUser,
  getUsers,
  changeUser,
  deleteUser,
} = require('./handlers/Users');

router.get('/', getUsers);
router.post('/', newUser);
router.get('/:id', getUser);
router.delete('/:id', deleteUser);
router.put('/:id/:participated/:ticketPrice', changeUser);

module.exports = router;