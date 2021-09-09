# Measurabl Programming Task
[![Node.js CI](https://github.com/omarnyte/measurabl-programming-task/actions/workflows/test.yml/badge.svg)](https://github.com/omarnyte/measurabl-programming-task/actions/workflows/test.yml)

This single-page React web app fetches, combines, and renders some sample table data. The app is deployed at https://measurabl-programming-task.herokuapp.com. 

## Local Development

### Requirements
- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/) 

### Setup 
1. Clone the repo 

2. Install dependencies

    `npm install`

3. Start the app on default port 3000

    `npm start`

### Testing
Tests are written using [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro). API calls are mocked using the [Mock Service Worker](https://github.com/mswjs/msw) library.

- To run tests in watch mode: 
        
  `npm test`

- To run tests in watch mode: 

  `npm test:watch`

## CI/CD
This project uses Github Actions for CI/CD. The worfklow will:
- run all tests
- build the app

## Contributing
1. Fork and clone the repo.
2. Follow the [setup](#setup) steps outlined above.
3. Make your changes, ensuring that code coverage remains at 100%.
4. Open a pull request documenting your changes. Please ensure that that GitHub Actions workflow succeeds. 
