import getEmployeeData from '../models/employeeModel.js';
import getDocumentation from '../services/documentationService.js';
import callGPT4o from '../services/gptService.js';
import logger from '../utils/logger.js';
import nlpService from '../services/nlpService.js';

// Controller to handle employee queries
async function handleEmployeeQuery(req, res) {
  const userId = req.body.userId; // Expecting userId in the request body
  const userQuery = req.body.query; // Expecting query in the request body

  const employeeResponse = await getEmployeeData(userId);

  if (employeeResponse.status === 'success') {
    const employee = employeeResponse.data;

    // Use the NLP service to determine the intent
    const intent = nlpService.classify(userQuery);

    // Determine the topic based on the user query
    let topic;
    if (intent === 'benefits') {
      topic = 'employee_benefits';
    } else if (intent === 'policies') {
      topic = 'policies';
    } else if (intent === 'contactHR') {
      topic = 'contact_hr';
    } else {
      topic = ''; // Fallback to a general documentation topic
    }

    // Fetch dynamic documentation from the external source
    let documentation;
    try {
      documentation = await getDocumentation(topic);
    } catch (error) {
      logger.error(`Error fetching documentation: ${error.message}`);
      return res.json({
        status: 'error',
        message: `Error fetching documentation: ${error.message}`,
      });
    }

    // Create a prompt for GPT-4o that includes employee context and dynamic documentation
    const prompt = `
		User data: ${JSON.stringify(employee)}.
		The user asked: "${userQuery}".
		Based on intent: ${intent}.
		The documentation can be used as a basis: ${documentation}. 
		
		Please provide a specific, helpful, and informative response.
		Use the documentation if it is not empty and if the user is asking for an explanation about the ${topic} topic. 
		Include specific details relevant to the user's query.
		`;

    // Call GPT-4o to generate a response
    try {
      const gptResponse = await callGPT4o(prompt);
      res.json({
        status: 'success',
        message: gptResponse,
      });
    } catch (error) {
      logger.error(`Error calling GPT-4o: ${error.message}`);
      res.json({
        status: 'error',
        message: `Error calling GPT-4o: ${error.message}`,
      });
    }
  } else {
    logger.error('Employee not found');
    res.json({
      status: 'error',
      message: 'Employee not found.',
    });
  }
}

export default handleEmployeeQuery;
