const express = require("express");
const router = express.Router();

const serviceController = require('../controllers/serviceController');

router.get("/", serviceController.listar);
router.post("/add", serviceController.guardar);
router.get("/delete/:id", serviceController.borrar);
router.get("/update/:id", serviceController.editar);
router.post("/update/:id", serviceController.save);

module.exports = router;
