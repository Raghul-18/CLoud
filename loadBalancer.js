const express = require('express');
const axios = require('axios');

const app = express();
const servers = ['http://localhost:3000', 'http://localhost:3001'];
let currentServer = 0;

// Load balancing route
app.get('/', async (req, res) => {
  try {
    const server = servers[currentServer];
    const response = await axios.get(server);
    res.send(response.data);

    // Move to the next server in a round-robin manner
    currentServer = (currentServer + 1) % servers.length;
  } catch (error) {
    res.status(500).send("Server error");
  }
});

// Start load balancer
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Load balancer running on port ${PORT}`);
});
