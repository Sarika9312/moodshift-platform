const Mood = require('../models/Mood');

// Save mood controller
const saveMood = async (req, res) => {
  try {
    const { moodType, note } = req.body;
    const userId = req.user.userId;

    // Validate input
    if (!moodType) {
      return res.status(400).json({ message: 'Please provide a mood type' });
    }

    const validMoods = ['calm', 'energetic', 'mystery', 'happy'];
    if (!validMoods.includes(moodType)) {
      return res.status(400).json({ 
        message: 'Invalid mood type. Must be one of: calm, energetic, mystery, happy' 
      });
    }

    // Create and save mood
    const mood = new Mood({
      user: userId,
      moodType,
      note: note || '',
    });

    await mood.save();

    res.status(201).json({
      message: 'Mood saved successfully',
      mood,
    });
  } catch (error) {
    console.error('Save mood error:', error);
    res.status(500).json({ message: 'Failed to save mood', error: error.message });
  }
};

// Get moods for logged in user
const getMoods = async (req, res) => {
  try {
    const userId = req.user.userId;

    // Fetch all moods for the user
    const moods = await Mood.find({ user: userId })
      .sort({ createdAt: -1 })
      .populate('user', 'name email');

    res.status(200).json({
      message: 'Moods retrieved successfully',
      count: moods.length,
      moods,
    });
  } catch (error) {
    console.error('Get moods error:', error);
    res.status(500).json({ message: 'Failed to retrieve moods', error: error.message });
  }
};

module.exports = { saveMood, getMoods };
