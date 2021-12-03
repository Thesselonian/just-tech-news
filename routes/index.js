const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

//if fetch is made to an endpoint that doesn't exist the server will return a 404 error
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;