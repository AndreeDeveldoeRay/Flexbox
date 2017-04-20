/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-03-13T13:54:41+01:00
* @Email:  me@andreeray.se
* @Filename: app.jsx
 * @Last modified by:   develdoe
 * @Last modified time: 2017-04-20T11:34:33+02:00
*/


var React = require('react'),
    ReactDOM = require('react-dom'),
    {Provider} = require('react-redux')

import Component from 'component'

var store = require('store').configureStore(),
    actions = require('actions')

store.dispatch(actions.changeStatus('Scripting'))

var appName = "DevelFlexbox"
document.title = appName
store.dispatch(actions.changeAppName(appName))



store.dispatch(actions.addItem('item 1','test'))
store.dispatch(actions.addItem('item 2','test'))
store.dispatch(actions.addItem('item 3','test'))
store.dispatch(actions.removeItem(2))

store.dispatch(actions.fetchLocation())


ReactDOM.render(<Provider store={store}><Component/></Provider>, document.getElementById('app'))

console.log(`
%cMETA########################################
 * @Author              : Andreee Ray <DevelDoe>
 * @Date                : 2017-02-18T23:58:38+01:00
 * @Email               : me@andreeray.se
 * @Site                : andreeray.se
 * @Patch               : 0.
 * @Last modified by    : develdoe
 * @Last modified time: 2017-04-20T11:34:33+02:00
##############################################

%cABOUT#######################################

Welcome! I am the Devel, a HTML CSS and
JavaScript ninja @ Devel Devils.

##############################################

%cRELEASELOG#####################################

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

## 1.0 Major (Flexbox) branch

* 1.1 uninstall redux modules

##############################################

%cBACKLOG#####################################

##############################################

%cDEBUGG######################################
`,
'color: orange','color: #fc8daa','color: #93dcff','color: #93dcff','color: #ccc')
