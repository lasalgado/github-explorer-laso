# Github Topic Explorer

This project was created to display topics related to a given term,
utilizing the GitHub GraphQL API.

## Description

This application uses ReactJS to communicate with the GitHub GraqphQL API, and display the related topics and to click on those related topics to display stargarzers for each topic.

This application implements basic styling in order to have an initial layout with a functional application.

If more functionalities are required the path to follow will be to have a Minimum Viable Product (MVP) in order to achieve enough features to provide the required functionalities and increase the application capabilities on each development iteration.

This application includes the following functionalities:

* Searching topics given by the user entry.
* Display the number of stargazers a found topic has.
* Display a list of the first 10 related topics
* Click on a related topic so it becomes the search term to look at github for stargarzers.

## Frameworks and Libraries

* [ReactJS] - A JavaScript library for building user interfaces
* [ApolloClient] - Comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL
* [Reactstrap] - React component library for Bootstrap

All libraries ans utilities are included at the `package.json` file, so no need to install them separately.t

## Installation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), and tyhe available scripts to run in development mode, to build or to test come from that project.

In the project directory, to begin installation

Run the following command that will install all libraries and dependecies needed for the project.
```
npm install
```

Once the installation process ends, you can continue executing any of the scripts available, to rtun in development mode or to generate a final minfied version.

## Available Scripts


### `npm start`

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


## Running the project

To run the project in development mode, it its just needed to execute one of the available commands above `npm start`.

Once the command is executed, the application will deploy the development server, and will be avaible at `http://localhost:3000`.

## Roadmap



## Authors

This project was created by: [Luis Salgado - luis.arturo@points.com](mailto:luis.arturo@points.com)


[ReactJS]: <https://reactjs.org/>
[ApolloClient]: <https://www.apollographql.com/docs/#apollo-client>
[Reactstrap]: <https://reactstrap.github.io/>