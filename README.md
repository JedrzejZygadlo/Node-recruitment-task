# Project Name: Node-recruitment-task

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Project documentation](#project-documentation)
* [Tests](#tests)

## General info
The project was created as a recruitment task. The main goal was to refactor app.js file to improve code quality. Initial file includes: data of 6 matches from different sports, EventParser class with two methods responsible for formatting the results and the loop in which istance of this class is created and fuctions are executed. To achieve the goal i created new sctructure of the project, I've moved EventParser class to special module. I've made static methods inside this class because they are independent of state and it allow me to not create istance of this class, witch can help to save time and memory. I've also crated some utils functions for validation (filter out wrong data) and formatting (depending which kind of sport we have different types of formatting). As project is created in TS I've created types.ts file which include all enums, types and interfaces. As project is small i decided to keep all of them in one file. For most of functionality I've added some unit tests. I've also added prettier, linter to the project. On the "additional approach branch" I've created small database with connection and function allows to read and save these events.

## Technologies
Project is created with:
Typescript
Node.js (I was using version: v16.19.1)
Eslint
Prettier
Jest

In additional part also mongoDB and mongoose

## Setup
To run this project, clone the repo and install packages:
```
$ npm install
```
To run application locally (just to see result) run:
```
$ npm start
```

To run application locally (and it will be reflected due to changes) run:
```
$ npm run start:dev
```
To run unit tests:
```
$ npm test
```
To build project:
```
$ npm run build
```
To lint project:
```
$ npm run lint
```

## Project documentation

### Data
The data contains 6 sports events. They have properties such as sport name, participants, score. I've moved data to seperate file and also added special type for it.

### Data validation
Data is passed throught function which is repsonsible for filter out these events for which some property is missing or sport is not allowed ( there is list of allowed sport created based on enum).

### Formatting
The results may be different. The deciding factor in this case is sport. That's why i created mappingRules where for each sport that is specified which joint rule and score format rule should be used. In this case there are 2 types of joints (dash and versus) and 3 types of formatting.

### EventParser
I've decided to move EventParser class to seperate module. It contains two static functions resposible for joining event name and formatting the score.

### Additional approach
In this case we have very small project with small amount of data. But it easy to imagine that number of sports events. But it can be assumed that in a real situation the number of events is large and its number is growing rapidly and the functionality can be of course much more complicated. That's why it's worth using a database.
I've created database collection using mongoDB Atlas. I've used mongoose to connect with it and add model and schama. In app.ts I've create two methods to comunicate with db. SaveMatchesToDatabase() method let us to save matches to database (I've invoked it once to be compatibile with based example). Actually when starting the script only getMatchesResultsFromDatabase() will be invoked and printed results should be the same as in main version.

Code responsible for this part can be found on branch "additional-approach"

![database-atlas](https://user-images.githubusercontent.com/38325349/226284267-5e3cb996-2744-4afa-970a-52df20c03d23.JPG)


## Tests
Most of functionality is cover by unit tests. There are few of them for methods from EventParser. There are also a few tests for small function from validation and formatting utils.

Test executed example:

![node-app-tests](https://user-images.githubusercontent.com/38325349/226272027-2566a413-cf4a-4de7-97cf-376ba63370c9.JPG)
