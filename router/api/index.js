const router = require('express').Router();

router.use('/users', require('./usersRouter.js'));

router.use('/', require('./authRouter'));

module.exports = router;