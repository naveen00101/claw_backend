const User = require("../models/User");
const Session = require("../models/Session");
const supabase = require("../config/supabase");

exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    const { user, error } = await supabase.auth.signUp({ email, password });

    if (error) throw error;

    const newUser = new User({ email: user.email, supabaseId: user.id });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    const { user, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    const session = new Session({
      userId: user.id,
      ipAddress: req.ip,
    });
    await session.save();

    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
