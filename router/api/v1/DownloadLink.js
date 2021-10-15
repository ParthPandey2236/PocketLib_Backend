const express = require('express');

const router = express.Router();

const ControllerDownload = require('../../../controller/api/v1/DownloadLink');

router.post('/', ControllerDownload.downloadLink);

module.exports = router;