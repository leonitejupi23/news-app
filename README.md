# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

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


# Docker Readme steps how to Dockerize the NewsAPI app

# News App

This is a web application that aggregates news articles from various sources. It's built using [React](https://reactjs.org/) and can be easily set up and run using Docker.

## Prerequisites

Before you begin, ensure you have met the following requirements:
* You have installed Docker on your machine. For installation instructions, visit the [official Docker documentation](https://docs.docker.com/get-docker/).

## Running the Application with Docker

To get the application running, follow these steps:

### Building the Docker Image

1. Open a terminal and navigate to the root directory of the project where the Dockerfile is located.
2. Run the following command to build the Docker image:

    ```shell
    docker build -t news-app .
    ```

    This command builds a Docker image named `news-app` based on the instructions in your Dockerfile and the context of your project's directory.

### Running the Docker Container

1. Once the image is built, run the container by executing:

    ```shell
    docker run -p 3000:3000 -d --name my-news-app news-app
    ```

    This will start a container named `my-news-app`, running the `news-app` image. It maps port 3000 on your local machine to port 3000 in the Docker container.

2. Verify that the container is running by using:

    ```shell
    docker ps
    ```

### Accessing the Application

1. Open your web browser and go to `http://localhost:3000` to view the application.

### Viewing Logs

1. To view the application logs, use:

    ```shell
    docker logs my-news-app
    ```

### Stopping the Container

1. To stop the running container, execute:

    ```shell
    docker stop my-news-app
    ```

### Starting the Container

1. To start the running container, execute:

    ```shell
    docker start my-news-app
    ```