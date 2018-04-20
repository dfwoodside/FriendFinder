# Friend Finder Application

## Description

*Friend Finder* implements friend matching based on the user's responses to a ten question survey. The user responds to questions with values from 1 (Strongly Disagree) to 5 (Strongly Agree). When the survey is submitted, an existing user record closest to the current user's responses is found and returned. The closest set of user responses is defined as the set with the lowest absolute difference for all ten questions combined.

*Friend Finder* application is meant to simulate a simple dating app. The application is implemented using a [Node.js](https://nodejs.org/en/) and [Express](https://expressjs.com/) server on the back end and the [Materialize](http://materializecss.com/) CSS framework on the front end.

## Demo
	
*Friend Finder* is deployed to Heroku. Please check it out [here](https://dashboard.heroku.com/apps/friendfinder-dfw).

## Prerequisites
- Node.js/NPM

## Instructions
To run the site locally and interact with your own and the example data,
 - Make sure you have fulfilled the prerequisites above.
 - Install modules with `npm install`
 - Run `node server.js`
 - Go to `localhost:8080` in your web browser.

## Technologies Used
- Node.js/NPM (JavaScript environment/Package manager)
- Bootstrap (Front-end framework)
- Express.js (Web framework)
- Google Fonts (Front-end framework)
- Heroku (Cloud platform)

## Author
Don Woodside - https://github.com/dfwoodside/FriendFinder
