// server/controllers/chatController.js
const translationController = require('./translationController');

module.exports = {
  handleConnection: (io, socket) => {
    console.log('A user connected');

    // Handle incoming messages
    socket.on('chat message', async (msg) => {
      try {
        // For simplicity, let's assume the target language is specified in the message
        const targetLanguage = msg.targetLanguage || 'en';
        const translatedMsg = await translationController.translateMessage(msg.text, targetLanguage);

        // Broadcast the translated message to all connected clients
        io.emit('chat message', translatedMsg);
      } catch (error) {
        console.error('Message handling error:', error.message);
      }
    });

    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  },
};
