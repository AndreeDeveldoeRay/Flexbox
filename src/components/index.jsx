/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-03-08T03:39:38+01:00
* @Email:  me@andreeray.se
* @Filename: App.jsx
*
* Note: react-flexbox-grid For the time being always use fluid for <Grid> to prevent horizontal overflow issues.
*
 * @Last modified by:   develdoe
 * @Last modified time: 2017-04-20T14:59:16+02:00
*/



import React from 'react'
import Responsive from 'responsive'
import Fluid from 'fluid'
import Offset from 'offset'
import AutoWidth from 'AutoWidth'
import Alignment from 'alignment'
import Distribution from 'distribution'

export var DevelFlexbox = React.createClass({
    render: function () {
        return (
            <div>
                <Responsive/>
                <Fluid/>
                <Offset/>
                <AutoWidth/>
                <Alignment/>
                <Distribution/>
            </div>
        )
    }
})
export default DevelFlexbox
