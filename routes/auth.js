var express = require('express');
var router = express.Router();
const { loginUser, accessContent } = require("../controllers/auth");

router.get('/', loginUser);

router.get('/access', accessContent)

module.exports = router;
