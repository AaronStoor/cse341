# Node.js REST API

This project is a simple Node.js REST API that serves data required by a frontend application. It uses Express.js to handle HTTP requests and serves data from a JSON file.

## Project Structure

```
nodejs-rest-api
├── src
│   ├── controllers
│   │   └── dataController.js
│   ├── routes
│   │   └── dataRoutes.js
│   ├── app.js
│   └── data
│       └── data.json
├── package.json
├── .env
└── README.md
```

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd nodejs-rest-api
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create a `.env` file:**
   Create a `.env` file in the root directory and specify the port number:
   ```
   PORT=3000
   ```

4. **Run the server:**
   ```bash
   npm start
   ```

## Usage

- The server will start on the port specified in the `.env` file (default is 3000).
- You can access the data by sending a GET request to:
  ```
  http://localhost:3000/api/data
  ```

## Testing the API

You can test the API using a REST client like Postman or curl. Send a GET request to the endpoint mentioned above to retrieve the data.

## License

This project is licensed under the MIT License.