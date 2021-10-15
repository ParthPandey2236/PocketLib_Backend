const express = require('express');

const router = express.Router();

const ControllerAuthenticate = require('../../../controller/api/v1/Authenticate_api');

router.post('/signIn',ControllerAuthenticate.signIn);

router.post('/signUp', ControllerAuthenticate.signUp);

module.exports = router;