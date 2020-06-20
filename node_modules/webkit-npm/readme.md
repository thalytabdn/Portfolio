# Webkit npm

 [![Generic badge](https://img.shields.io/badge/github-webkit-blue.svg)](https://github.com/Sylhare/webkit)
 [![npm version](https://badge.fury.io/js/webkit-npm.svg)](https://badge.fury.io/js/webkit-npm) 
 [![Generic badge](https://img.shields.io/badge/build-passing-green.svg)](https://github.com/Sylhare/webkit) 
 [![Generic badge](https://img.shields.io/badge/maintainability-A-green.svg)](https://github.com/Sylhare/webkit)

Experiment with npm and how to create a package and publish it online. Node Package Manager (npm) needs [node.js](https://nodejs.org/en/) to be installed in order for any application or package to run.

## Installation

To install this package you can do:

```bash
npm install webkit-npm
```

## Getting started

Start the application with:

```bash
node index.js
```

It should be running on [localhost:3000](http://localhost:3000/) and you should see "Hello World".

Try going to different pages or using a query like:

```bash
http://localhost:3000/?firstname=John&lastname=Doe
```

## Create a Package

Once you have installed node (npm is included) you'll need to create the `package.json` which is where the node dependecies and project information is sotred. The best way to do it:

```bash
npm init
```

Then you can test the installation of your package using:

```bash
npm install -d
```

## Publish a package

You should have an account created on [npm](https://www.npmjs.com/). Once it is done, add the user to the machine using:

```bash
npm adduser
```

Then you can publish your package (you need to be a level higher of your package to do that).

```bash
npm publish
```

To publish a package you need a unique name, you can test if your package name is taken or not with:

```bash
npm view unique-package-name
```


## Sources

- [Creating your first app with Node.js](https://openclassrooms.com/courses/ultra-fast-applications-using-node-js/creating-your-first-app-with-node-js)
- [Publush and update a package on npm](https://docs.npmjs.com/getting-started/publishing-npm-packages)
- [webkit on npm](https://www.npmjs.com/package/webkit-npm)