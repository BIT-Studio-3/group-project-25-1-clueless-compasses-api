/**
 * @file Manages all operations related to the API
 * @author Clueless Compassess Studio 3 Group
 */

// Import the Express module
import express from 'express';

// This should be declared under - import express from "express";
import swaggerJSDoc from "swagger-jsdoc";

// This should be declared under - import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

// Import the index routes module
import indexRoutes from './routes/index.js';

import userRoutes from "./routes/v1/user.js";

// This should be declared under - import institutionRoutes from "./routes/v1/institution.js";
import { isContentTypeApplicationJSON } from "./middleware/utils.js";

// Create an Express application
const app = express();

// Use the PORT environment variable or 3000
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false })); // To parse the incoming requests with urlencoded payloads. For example, form data

// This should be declared under - app.use(urlencoded({ extended: false }));
app.use(express.json()); // To parse the incoming requests with JSON payloads. For example, REST API requests

// This should be declared under - app.use(express.json());
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Disaster Management System API",
      version: "1.0.0",
      description: "A disaster management system API",
      contact: {
        name: "Clueless Compassess Studio 3 Group",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  //Added both to include docs for non version api too
  apis: ["./swagger/*.js","./routes/v1/*.js", "./routes/*.js"],
};

// This should be declared under - const swaggerOptions = { ... };
const swaggerDocs = swaggerJSDoc(swaggerOptions);

// This should be declared under - const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use(isContentTypeApplicationJSON);

// Use the user module
app.use("/api/v1/users", userRoutes);

// Use the api docs module
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Use the routes module
app.use('/', indexRoutes);


// Catch-all handler for undefined routes (Chatgpt generated html)
app.get('*', (req, res) => {
  res.status(404).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>404 Not Found</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f0f0f0;
          color: #333;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }
        .container {
          text-align: center;
          padding: 20px;
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          max-width: 500px;
        }
        h1 {
          font-size: 48px;
          color: #d9534f;
        }
        p {
          font-size: 18px;
          color: #555;
        }
        a {
          text-decoration: none;
          color: #0275d8;
          font-weight: bold;
        }
        a:hover {
          text-decoration: underline;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>404</h1>
        <p>Sorry, the requested endpoint does not exist.</p>
        <p><a href="/">Go back to the homepage</a></p>
      </div>
    </body>
    </html>
  `);
});



// Start the server on port 3000
app.listen(PORT, () => {
  console.log(
    `Server is listening on port ${PORT}. Visit http://localhost:${PORT}`,
  );
});

// Export the Express application. May be used by other modules. For example, API testing
export default app;
