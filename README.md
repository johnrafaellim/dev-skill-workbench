# Node.js Crash Course Practice

This repository was created for **practice and learning purposes** while studying Node.js.

The project was built while following the Node.js Crash Course below:

- **YouTube Crash Course:**  
  https://www.youtube.com/watch?v=bqy1Sa6Ha7o

- **Original GitHub Repository:**  
  https://github.com/piyush-eon/node-js-crash-course

## About This Repository

The purpose of this repository is to practice and improve my understanding of **Node.js backend development**.

The initial implementation follows concepts and examples demonstrated in the original crash course. I also added my own changes and improvements as part of my learning process.

This repository is not intended to be a production-ready application.

## Topics Practiced

Some of the concepts practiced in this project include:

- Node.js fundamentals
- Creating an HTTP server
- Express.js
- Routing
- Controllers
- Middleware
- Handling HTTP requests and responses
- Working with request bodies
- REST API development
- Reading and writing data
- Input validation
- HTTP status codes
- Error handling
- JavaScript array methods

## Changes and Improvements

Although this project is based on the original crash course, I added some functionality that was not part of the original implementation.

### Prevent Duplicate Companies

I added validation when creating a new job application to prevent an application from being created when the company already exists.

```js
const companyExists = applications.some(
  (app) => app.company === company
);

if (companyExists) {
  return sendError(res, 409, "Company already exists");
}