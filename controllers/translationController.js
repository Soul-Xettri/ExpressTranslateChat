// server/controllers/translationController.js
const { Translate } = require('@google-cloud/translate').v2;

// Replace 'YOUR_API_KEY' with your actual API key
const translate = new Translate({ key: 'YOUR_API_KEY' });

async function translateMessage(text, targetLanguage) {
  try {
    const [translation] = await translate.translate(text, targetLanguage);
    return translation;
  } catch (error) {
    console.error('Translation error:', error.message);
    return text; // Return the original text on error
  }
}

module.exports = {
  translateMessage,
};
