const express = require("express");
const router = express.Router();
const horsesController = require("../controllers/horsesController");

router.get("/", horsesController.getAllHorses);

router.get("/:id", horsesController.getHorseById);

router.post("/", horsesController.createHorse);

router.put("/:id", horsesController.updateHorse);

router.delete("/:id", horsesController.deleteHorse);

module.exports = router;
