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

Once the command finishes successfully, create a file name `.env` based on the `.env.example` file, and complete the following information.

Inside you can find the following variables:

```
    REACT_APP_GITHUB_GRAPHQL_API_URL
```

This variable indicates the url for the GitHubA GrphQL API and it is used at every requests made to the API.

```
    REACT_APP_GITHUB_TOKEN
```

This variable sets the authorization token that grants permission to access the API. To obtain a a token, refer to the next article [Create a personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).


Once the installation process ends and the environment file has been created, you can continue by executing any of the scripts available, to run in development mode or to generate a final minfied version.

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

* Error management can be improved to take into consideration communication errors with the API, unexpected response values and user input entrance to ensure the values used are validated before being sent to the API.
* Code structuring could improve once the application increses functionalities by separating concerns of the main component `Home` which basically is performing the main task to communicate with the API.
* Visual styling can be improve to give and appearance more aesthetic based mainly on how the information is more useful to the user, to emphasize the more critical information.
* Unit tests can be applied in the future to give more stability throughout the development cycle. For this application we can create unit tests to ensure the UI is rendering messages correctly, simulate bad responses from the API and detect unwanted beahaviors, tests different data as if it would have been provided wrongly by the API.

## Limitations

* On this version of the application I haven´t added unit tests as I have not enought experience doing so and would need more time to apply them to the project.
* The application only display the related topics given by the search term and the stargazers count to that topic. Guided by the GitHub API the related topics is olny showing the first 10 values it can find.
* 

## Authors

This project was created by: [Luis Salgado - luis.arturo@points.com](mailto:luis.arturo@points.com)


[ReactJS]: <https://reactjs.org/>
[ApolloClient]: <https://www.apollographql.com/docs/#apollo-client>
[Reactstrap]: <https://reactstrap.github.io/>