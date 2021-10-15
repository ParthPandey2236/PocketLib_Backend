 const express = require('express');

 const router = express.Router();
 
 const HomeController = require('../controller/Home');

 router.use('/api/v1/authenticate',require('./api/v1/Authenticate_api'));
 router.use('/api/v1/download',require('./api/v1/DownloadLink'));
 router.get('/',HomeController.home);
 
 module.exports = router;