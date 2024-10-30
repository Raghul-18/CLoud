const express = require('express');
const app = express();

// Basic route
app.get('/', (req, res) => {
  res.send(`Hello from server on port ${process.env.PORT}`);
});

// Start server on specified port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
