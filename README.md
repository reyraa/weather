# Weather app

A basic React app that displays a weather information set.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
You can select each hour to see the details.

## Installation

This application is written in JavaScript and uses several npm packages. Therefore you need to install the dependencies to get it up and running.

### Prerequisites

You need the following tools to install the application
- [Node](nodejs)
- [Git](https://git-scm.com)

### Steps
Run the following command will install the desired version of dependencies: 

```
npm ci
```

If you wish to update to the latest backward compatible version of the dependencies, run

```
npm i
```

The complete logs of the changes will be written in `package-lock.json`.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Testing

The unit test are written using `react-testing-library`. You can run them by:

```
npm test
```

There are no e2e tests at the moment.

## Contributors

See [contributors section](https://github.com/reyraa/weather/graphs/contributors).


## License
Redux Monitor is licensed under MIT. Feel free to use it for personal or business purpose.
