const Session = require("../models/Session");

exports.getSessions = async (req, res) => {
  try {
    const sessions = await Session.find({ userId: req.user.id });
    res.status(200).json(sessions);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
