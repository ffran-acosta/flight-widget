const { Router } = require("express");
const router = Router();

const controller = require('../controller/db.controller');

router.get('/', controller.index)
router.get('/create', controller.create)
router.get('/users', controller.showAll)

module.exports = router

