const express = require('express');
const { saveMood, getMoods } = require('../controllers/moodController');
const auth = require('../middleware/auth');

const router = express.Router();

// All mood routes require authentication
router.use(auth);

// POST /api/moods - Save a mood
router.post('/', saveMood);

// GET /api/moods - Get moods for logged in user
router.get('/', getMoods);

module.exports = router;
