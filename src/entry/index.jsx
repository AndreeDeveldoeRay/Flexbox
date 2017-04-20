/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-03-13T13:54:41+01:00
* @Email:  me@andreeray.se
* @Filename: app.jsx
 * @Last modified by:   develdoe
 * @Last modified time: 2017-04-20T12:07:53+02:00
*/


import React from 'react'
import ReactDOM from 'react-dom'
import Component from 'component'


var appName = "DevelFlexbox"

document.title = appName


ReactDOM.render(<Component/>, document.getElementById('app'))

console.log(`
%cMETA########################################
 * @Author              : Andreee Ray <DevelDoe>
 * @Date                : 2017-02-18T23:58:38+01:00
 * @Email               : me@andreeray.se
 * @Site                : andreeray.se
 * @Patch               : 0.
 * @Last modified by    : develdoe
 * @Last modified time: 2017-04-20T12:07:53+02:00
##############################################

%cABOUT#######################################

Welcome! I am the Devel, a HTML CSS and
JavaScript ninja @ Devel Devils.

##############################################

%cBACKLOG#####################################

* Install flexbox modules
* Add layouts with color scheme

##############################################

%cRELEASELOG#####################################

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

##############################################

%cDEBUGG######################################
`,
'color: orange','color: #fc8daa','color: #93dcff','color: #93dcff','color: #ccc')
