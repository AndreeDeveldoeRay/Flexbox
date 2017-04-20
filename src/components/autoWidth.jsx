/**
 * @Author: Andreee Ray <develdoe>
 * @Date:   2017-04-20T12:52:48+02:00
 * @Email:  me@andreeray.se
 * @Filename: responsive.jsx
 * @Last modified by:   develdoe
 * @Last modified time: 2017-04-20T14:57:51+02:00
 */



import React from 'react'
import { Grid, Row , Col } from 'react-flexbox-grid'

const styleH1 = {
    fontSize: '2em',
    color: 'Rgb(255, 235, 238)',
}

const styleP = {
    color: 'Rgb(255, 235, 238)',
}

const styleGrid = {
    marginTop: '40px',
    marginBottom: '40px'
}

const styleRow = {
    margin: '10px 0',
    padding: '10px',
    background: 'transparent'
}

const styleCol = {
    padding: '10px',
    color: 'Rgb(255, 235, 238)',
    background: 'rgb(183,28,28)',
    border: '1px solid Rgb(45, 45, 45)'
}

export var AutoWidth = React.createClass({
    render: function () {
        return (
            <div>

                <Grid responsive style={styleGrid} >

                    <h1 style={styleH1} >Auto Width</h1>

                    <p style={styleP} >Add any number of auto sizing columns to a row. Let the grid figure it out.</p>

                    <Row style={styleRow} >
                        <Col xs style={styleCol} />
                        <Col xs style={styleCol} />
                    </Row>
                    <Row style={styleRow} >
                        <Col xs style={styleCol} />
                        <Col xs style={styleCol} />
                        <Col xs style={styleCol} />
                    </Row>

                </Grid>
            </div>

        )
    }
})

export default AutoWidth
