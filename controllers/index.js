const router = require('express').Router();


const apiRoutes = require('./api')
const homeRoutes = require('./home-routes')
// const userRoutes = require('./user-routes.js');
// const postRoutes = require('./post-routes');
// const commentRoutes = require('./comment-routes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes)
// router.use('/users', userRoutes);
// router.use('/posts', postRoutes);
// router.use('/comments', commentRoutes);

module.exports = router;
