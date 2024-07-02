const Horse = require("../models/Horse");

exports.getAllHorses = async (req, res) => {
  try {
    const horses = await Horse.find();
    res.json(horses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getHorseById = async (req, res) => {
  try {
    const horse = await Horse.findById(req.params.id);
    if (horse) {
      res.json(horse);
    } else {
      res.status(404).json({ message: "Horse not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createHorse = async (req, res) => {
  const horse = new Horse({
    ...req.body,
  });
  try {
    const newHorse = await horse.save();
    res.status(201).json(newHorse);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateHorse = async (req, res) => {
  try {
    const updatedHorse = await Horse.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedHorse);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteHorse = async (req, res) => {
  try {
    const horse = await Horse.findByIdAndDelete(req.params.id);
    if (horse) {
      res.json({ message: "Deleted Successfully" });
    } else {
      res.status(404).json({ message: "Horse not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
