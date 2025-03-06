const Snack = require('../models/Snack');

exports.getAllSnacks = async (req, res) => {
  try {
    const snacks = await Snack.find();
    res.json(snacks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createSnack = async (req, res) => {
  const snack = new Snack(req.body);
  try {
    const newSnack = await snack.save();
    res.status(201).json(newSnack);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getSnackById = async (req, res) => {
  try {
    const snack = await Snack.findById(req.params.id);
    if (!snack) return res.status(404).json({ message: 'Snack not found' });
    res.json(snack);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateSnack = async (req, res) => {
  try {
    const snack = await Snack.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!snack) return res.status(404).json({ message: 'Snack not found' });
    res.json(snack);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteSnack = async (req, res) => {
  try {
    const snack = await Snack.findByIdAndDelete(req.params.id);
    if (!snack) return res.status(404).json({ message: 'Snack not found' });
    res.json({ message: 'Snack deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};