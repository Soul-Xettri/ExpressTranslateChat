# ExpressTranslateChat

ExpressTranslateChat is a real-time chat translator built with Node.js and Express.js.

## Overview

This project enables users to send messages in one language, and the messages are translated in real-time based on the preferred language of the recipient. The communication is facilitated using Socket.io, and translation is performed using a translation API (e.g., Google Translate).

![Translator GIF](https://media4.giphy.com/media/UjYn0QffVnZhYcJ7Rl/giphy.gif?cid=ecf05e471x5maud9snzwy0xbuq3yo9gvmbpzbm4uj8tqgl7x&ep=v1_gifs_search&rid=giphy.gif&ct=g)

## Features

- Real-time chat using Socket.io
- Message translation based on the target language
- Integration with a translation API (replace with your chosen API)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm package manager
- Google Cloud Translation API key (replace with your API key)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/soul-xettri/ExpressTranslateChat.git
    cd ExpressTranslateChat
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up your Google Cloud Translation API key:**

    - Replace 'YOUR_API_KEY' in `server/controllers/translationController.js` with your actual API key.

### Usage

1. **Start the server:**

    ```bash
    npm start
    ```

    The server will run on http://localhost:3000.

2. **Open your browser and navigate to http://localhost:3000.**

3. **Enter a message in the input field, specify the target language, and click "Send."**

4. **The translated message will appear in the chat window.**

## Customization

- Modify the translation logic in `server/controllers/translationController.js` for your preferred translation service.
- Customize the front-end in `public/index.html` as needed.

## License

This project is licensed under the MIT License - see the [LICENSE](/path/to/LICENSE) file for details.
