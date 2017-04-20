<!--
@Author: Andreee Ray <develdoe>
@Date:   2017-03-10T00:42:05+01:00
@Email:  me@andreeray.se
@Filename: readme.md
@Last modified by:   develdoe
@Last modified time: 2017-04-20T12:08:00+02:00
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

* Install modules
* Add layouts with color scheme

## Release log

## 0.0 Major (Framework) branch

* 0.1 NPM    : npm install --save-dev webpack react react-dom express babel-core babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-0
* 0.2 Setup  : Webpack
* 0.3 Add    : public HTML
* 0.4 Add    : Simple server
* 0.5 Add    : Entry
* 0.6 Add    : Component

## 1.0 Major (Flexbox) branch

* 1.1 NPM    : redux modules
* 1.2 Remove : redux files & all unnecessary files
* 1.3 Update : webpack, components and entry
* 1.4 NPM    : Test suite modules
* 1.5 Remove : test files, karma.conf
* 1.6 NPM    : remove & re-install modules (just to be sure no old dependencies are still present)
