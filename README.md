# Health and Wellness App - Backend

## Overview
Backend service for the Health and Wellness App built with the MERN stack.

## Tech Stack
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB
- **Authentication:** JWT
- **Environment:** Node.js

## Getting Started

### Prerequisites
- Node.js (v14+)
- MongoDB
- npm or yarn

### Installation
```bash
npm install
```

### Environment Setup
Create a `.env` file in the root directory:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/health-wellness
JWT_SECRET=your_secret_key
NODE_ENV=development
```

### Running the Server
```bash
npm start
```

## Project Structure
```
/src
    /routes      - API endpoints
    /controllers - Business logic
    /models      - Database schemas
    /middleware  - Custom middleware
    /config      - Configuration files
```

## API Endpoints
Document your main endpoints here once implemented.

## Contributing
Follow the coding standards and create feature branches.

## License
MIT

## API Documentation
https://documenter.getpostman.com/view/50347547/2sBXVbGtaQ