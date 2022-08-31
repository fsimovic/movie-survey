# Movie Survey App

![image](https://user-images.githubusercontent.com/57597242/187725916-fa2aea0c-ee91-4eb5-ac37-979ff05a63ff.png)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Live demo

App is deployed on Heroku (platform as a service "PaaS" that enables developers to build, run, and operate applications entirely in the cloud) and an overview is available at this [link](https://movie-survey-app.herokuapp.com/).

## Environment

  - Node.js v16.17.0
  - npm v8.15.0
  - ESLint v8.22.0
  - Docker v20.10.17

# Available Scripts

In the project directory, you can run:

## Automatic instalation

Navigate to root folder and run `docker-compose up`. This will create 2 containers, one for node server and one for react app.\
To shut down both containers, use the `docker-compose down` command. 

## Manual instalation

**Note: Before running any script, you must install the packages with `npm install` in both folders, `./client` and `./server`**

### `npm start`

#### Server

**It's necessary to navigate to `./server` folder.**\
The server starts on port 8000.\
http://localhost:8000/api/v1/survey is base URL for API calls.

#### Web

**It's necessary to navigate to `./client` folder.**\
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### `npm run lint`

This script  identify and reports on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs. ESLint rules are available in `.eslintrc.json`.

### `npm run lint-fix`

This script instructs ESLint to try to fix as many issues as possible. The fixes are made to the actual files themselves and only the remaining unfixed issues are output. Not all problems are fixable using this option, and the option does not work in these situations:

  - This script throws an error when code is piped to ESLint.
  - This script has no effect on code that uses a processor, unless the processor opts into allowing autofixes.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
