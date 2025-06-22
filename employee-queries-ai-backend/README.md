# Employee Query Backend

This project is a backend application for handling employee-related queries using Node.js, Express, and GPT-4o. It provides an API for retrieving employee data, dynamically fetching documentation from SharePoint, and generating responses using GPT-4o.

## Features

- Handles employee queries related to benefits, roles, departments, and HR contact information.
- Integrates with GPT-4o to generate contextually relevant responses.
- Fetches dynamic documentation from an external source based on user queries.
- Uses Natural Language Processing (NLP) for intent classification.
- Integrates with GPT-4o to generate contextually relevant responses.
- Fetches dynamic documentation from an external source based on user queries.
- Uses Natural Language Processing (NLP) for intent classification.

## Folder Structure

```plaintext
employee-queries-ai-backend/
├── src/
│   ├── config/                 # Configuration files
│   ├── controllers/            # Route controllers
│   ├── middlewares/            # Express middleware
│   ├── models/                 # Data models
│   ├── routes/                 # API route definitions
│   ├── services/               # Core business logic and integrations
│   ├── utils/                  # Utility/helper functions
│   ├── server.js               # App entry point
├── intents                     # Organized intents of user
├── documents                   # Organized documentation for AI
├── knowledge_base              # Sample Data being used for AI user fetching details
├── package.json                # Project metadata and dependencies
└── node_modules/               # Installed npm packages
```

## Installation

To install the required dependencies for the backend application, follow the process and navigate to the **`employee-queries-ai-backend`** directory and run the following command:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/employee-queries-ai-backend.git
   cd employee-queries-ai-backend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Update configuration:**

- Create **`.env`** file in root folder
- Enter **`GPT4O_API_URL`** and **`GPT4O_API_KEY`** with your actual **GPT-4o** API URL and API key. They are being used in **`src/services/gptService.js`** for the **`GPT-4o`** usage.
- Enter **`DOCUMENTATION_API_URL`** and **`DOCUMENTATION_ACCESS_TOKEN`** with your documentation API access token which is being used in **`src/services/documentationService.js`**.
- Enter **`SECRET_TOKEN`** that will be used as checker for authorization in **`src/middlewares/authMiddleware.js`** as security for API, can be modified as needed
- (Optional) Enter **`PORT`**, default is 3000

## Running the Application

To start the server, run the following command:

```bash
npm run start
```

## Usage

Once the server is running, you can interact with the API using tools like Postman or curl. The main endpoints include:

- **`GET /api/employees`**: Retrieve a list of employees.
- **`GET /api/employees/:id`**: Get details for a specific employee.
- **`POST /api/query`**: Submit a query related to employee information or documentation.

Refer to the route definitions in **`src/routes/employeeRoutes.js`** for more details.

## Troubleshooting

- Ensure all environment variables are set correctly.
- Check logs in the console for error messages.
- For SharePoint integration issues, verify your access token and permissions.
- For GPT-4o integration issues, confirm your API key and endpoint are valid.

### Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request.

### License

This project is licensed under the MIT License.

### Contact

For any inquiries, please contact [Arvey Jimenez](mailto:arve505@gmail.com).
