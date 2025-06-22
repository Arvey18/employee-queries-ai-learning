import fs from 'fs';
import path from 'path';
import pdf from 'pdf-parse/lib/pdf-parse.js';
import logger from '../utils/logger.js';

// Function to fetch documentation from local PDF files based on the topic
async function getDocumentation(topic) {
  if (topic && typeof topic === 'string') {
    try {
      const filePath = path.join(__dirname, `../../documentations/${topic}.pdf`); // Path to the PDF file

      // Check if the file exists
      if (!fs.existsSync(filePath)) {
        logger.error(`Documentation file not found: ${filePath}`);
        return ''; // Return empty string if the file doesn't exist
      }

      // Read the PDF file and extract text
      const dataBuffer = fs.readFileSync(filePath); // Read the PDF file into a buffer
      const data = await pdf(dataBuffer); // Use pdf-parse to extract text from the buffer

      return data.text; // Return the extracted text
    } catch (error) {
      logger.error(`Error fetching documentation: ${error.message}`);
      return ''; // Return empty string on error
    }
  } else {
    logger.error('Topic for documentation is empty or undefined.');
    return ''; // Return empty string if the topic is invalid
  }
}

export default getDocumentation;
