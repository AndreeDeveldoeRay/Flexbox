<!--
@Author: Andreee Ray <develdoe>
@Date:   2017-03-10T00:42:05+01:00
@Email:  me@andreeray.se
@Filename: readme.md
@Last modified by:   develdoe
@Last modified time: 2017-04-20T11:19:54+02:00
-->



# DevelFlexbox

An implementation of Flexbox Grid.

A grid system based on the flex display property.

## Webpack & Babel

You will need to have Webpack installed globally in order to build the applicatinon.
The project uses Babel with react, es2015, stage-0 presets.


## Serving

You will need to have Supervisor installed globally in order to use `npm start`.

```bash
npm install -g supervisor
```


## Building & Testing

`npm install` to initialy install your npm modules

`webpack` to bundle your files, use `webpack -w` to autogenerate the bundle on the fly.

`npm start` to start your server.

## Backlog

* remove Redux implementation
    * uninstall modules
    * remove files associated
    * update components

* remove all component but one
* remove test suite
* update entry & component

## Release log

## 0.0 Major (Framework) branch

* 0.1 Install framework modules:
    * webpack
    * react
    * react-dom
    * express
    * babel-core
    * babel-loader
    * babel-preset-es2015
    * babel-preset-react
    * babel-preset-stage-0
* 0.2 Setup: Webpack
* 0.3 Add: public HTML
* 0.4 Add: Simple server
* 0.5 Install Test suite modules:
    * karma
    * karma-webpack
    * karma-mocha
    * karma-mocha-reporter
    * karma-chrome-launcher
    * karma-sourcemap-loader
    * mocha
    * expect
    * react-addons-test-utils
* 0.6 Add: Entry
* 0.7 Add: Component
* 0.8 Add: List
* 0.9 Add: Item

## 1.0 Major (Redux) branch
Note: removing branch since its not needed for this project

* 1.1 Install Redux modules:
    * redux
    * react-redux
    * redux-thunk
    * axios
    * redux-mock-store
* 1.2 Add: Store
* 1.3 Add: Actions
* 1.4 Add: Reducers
* 1.5 Update: component

## 1.0 Major (Flexbox) branch
