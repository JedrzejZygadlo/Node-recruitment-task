# Project Name: Node-recruitment-task

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Project documentation](#project-documentation)
* [Tests](#tests)

## General info
The project was created as a recruitment task. The main goal was to refactor app.js file to improve code quality. Initial file includes: data of 6 matches from different sports, EventParser class with two methods responsible for formatting the results and the loop in which istance of this class is created and fuctions are executed. To achieve the goal i created new sctructure of the project, I've moved EventParser class to special module. I've made static methods inside this class because they are independent of state and it allow me to not create istance of this class, witch can help to save time and memory. I've also crated some utils functions for validation (filter out wrong data) and formatting (depending which kind of sport we have different types of formatting). As project is created in TS I've created types.ts file which include all enums, types and interfaces. As project is small i decided to keep all of them in one file. For most of functionality I've added some unit tests. I've also added prettier, linter to the project.

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

## Project documentation

### Data


## Tests
Most of functionality is cover by unit tests. There are few of them for methods from EventParser. There are also a few tests for small function from validation and formatting utils.

Test executed example:

![node-app-tests](https://user-images.githubusercontent.com/38325349/226272027-2566a413-cf4a-4de7-97cf-376ba63370c9.JPG)
