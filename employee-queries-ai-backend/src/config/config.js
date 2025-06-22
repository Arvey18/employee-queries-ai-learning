import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const requiredEnv = [
  'GPT4O_API_URL',
  'GPT4O_API_KEY',
  'DOCUMENTATION_API_URL',
  'DOCUMENTATION_ACCESS_TOKEN',
  'SECRET_TOKEN',
];

requiredEnv.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
});

const configs = {
  gpt4oApiUrl: process.env.GPT4O_API_URL,
  gpt4oApiKey: process.env.GPT4O_API_KEY,
  documentationApiUrl: process.env.DOCUMENTATION_API_URL,
  documentationAccessToken: process.env.DOCUMENTATION_ACCESS_TOKEN,
  secretToken: process.env.SECRET_TOKEN,
  port: process.env.PORT || 3000,
};

export default configs;
