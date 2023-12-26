const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const chatController = require('./controllers/chatController');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Serve the main chat interface
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/layout.html');
});

io.on('connection', (socket) => {
  // Pass the io instance to the handleConnection function
  chatController.handleConnection(io, socket);
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
