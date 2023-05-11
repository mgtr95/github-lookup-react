# GitHub User and Repository Search App

This is a simple React app that allows users to search for a GitHub user and view their public repositories.

## Getting Started

To run this app on your local machine, you'll need to have Node.js and npm installed.

Clone this repository onto your local machine.
Navigate to the project directory in your terminal.
Install dependencies by running npm install.
Run the app by running npm start.
Open your browser and navigate to http://localhost:3000.

## Using the App
Firstly, go to search app page - https://simple-github-lookup-app.netlify.app/

To use the app, simply enter a GitHub username into the search bar and hit the "Search" button. The app will then retrieve the user's information and display it, along with a list of their public repositories.

## API Calls
This app makes use of the GitHub API to retrieve user information and public repositories. Specifically, it uses the following endpoints:

https://api.github.com/users/{username} to retrieve user information
https://api.github.com/users/{username}/repos to retrieve a list of the user's public repositories

## Technologies Used

This app was built using the following technologies:
- React: a JavaScript library for building user interfaces

## Contributing
If you'd like to contribute to this project, feel free to submit a pull request. However, please note that this is a simple app meant as a learning exercise, so major feature additions or changes may not be accepted.
