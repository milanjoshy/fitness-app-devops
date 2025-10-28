const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Fitness App!</h1><p>Your journey to a healthier lifestyle starts now.</p>');
});

app.get('/workouts', (req, res) => {
  res.send('<h2>Today\'s Workout Plan:</h2><p>30-minute cardio and full-body strength training.</p>');
});

app.get('/diet', (req, res) => {
  res.send('<h2>Today\'s Diet Plan:</h2><p>High protein, low carb meals. Drink plenty of water!</p>');
});

app.listen(PORT, () => {
  console.log(`Fitness app server running on http://localhost:${PORT}`);
});