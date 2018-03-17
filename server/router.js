const router = require('express').Router();
router.use('/goods', require('./routes/goods'));
router.use('/users', require('./routes/users'));
module.exports = router;