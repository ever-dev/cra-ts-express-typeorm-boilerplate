### Technical Stack

Every frontend and backend code is written in TypeScript.

- Frontend
  Frontend was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
  See [here](./client/README.md) for more details.

- Backend
  Backend uses Node, Express
  See [here](./server/README.md) for more details.

- ORM
  This uses [TypeORM](https://typeorm.io/) for managing database.

# Getting Started

### Development

1. Install `npm run postinstall` to install dependencies
2. Clone `.env.template` file to `.env`, and set proper values there.
3. Run `npm run start:dev` on the root folder.
   It will automatically run the backend on port 8081 and run the frontend on port 8080.
   This uses [proxy](https://create-react-app.dev/docs/proxying-api-requests-in-development/) to handle requests to backend. So please don't make any `/api` on the frontend side.
   You can just call `fetch('/api/...')` to call APIs.

# Useful Commands

# Code Style Guide

- Naming Conventions
  Follow this guide[https://www.robinwieruch.de/javascript-naming-conventions] to name variables, functions, classes, methods, and files, etc.

- Code Formatter
  Use `Prettier` to format your code
