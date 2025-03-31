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

import logger from "./middleware/logger.js";

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

app.use((req, res, next) => {
  logger.info(`${req.method} ${req.originalUrl}`);
  next();
});

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
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f4f6f9;
          color: #333;
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
        .container {
          text-align: center;
          padding: 30px;
          background-color: #ffffff;
          border-radius: 12px;
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
          max-width: 600px;
          width: 100%;
        }
        h1 {
          font-size: 72px;
          color: #e74c3c;
          margin: 0;
        }
        p {
          font-size: 18px;
          color: #555;
          line-height: 1.6;
        }
        a {
          text-decoration: none;
          color: #3498db;
          font-weight: 600;
          transition: color 0.3s ease;
        }
        a:hover {
          color: #2980b9;
        }
        .sigma-message {
          font-size: 22px;
          color: #e74c3c;
          font-weight: bold;
          margin-top: 20px;
          font-style: italic;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>404</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <p class="sigma-message">What the sigma! This isn't a page that exists, very skibidi.</p>
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
