import fetch from 'node-fetch';
import configs from '../config/config.js';

// Function to make a real API call to GPT-4o
async function callGPT4o(prompt) {
  const response = await fetch(configs.gpt4oApiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${configs.gpt4oApiKey}`, // Replace with your actual API key
    },
    body: JSON.stringify({
      prompt: prompt,
      max_tokens: 150, // Adjust as needed
    }),
  });

  if (!response.ok) {
    throw new Error(`GPT-4o API error: ${response.statusText}`);
  }

  const data = await response.json();
  return data.choices[0].text.trim(); // Adjust based on the actual API response structure
}

export default callGPT4o;
