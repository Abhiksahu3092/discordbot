const { GoogleGenAI } = require("@google/genai");

const genAI = new GoogleGenAI({apiKey:process.env.API_KEY});

async function askGemini(prompt) {
  const response = await genAI.models.generateContent({
    model: "gemini-2.0-flash",
    contents: `${prompt}+provide the answer under 3000 character and don't provide any info about 3000 character limit and try providing it in paragpraph form or else bullet points where ever neccessary`,
  });
  return response.text;
}

module.exports = { askGemini };
