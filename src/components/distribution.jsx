/**
 * @Author: Andreee Ray <develdoe>
 * @Date:   2017-04-20T12:52:48+02:00
 * @Email:  me@andreeray.se
 * @Filename: responsive.jsx
 * @Last modified by:   develdoe
 * @Last modified time: 2017-04-20T15:01:48+02:00
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

export var Distribution = React.createClass({
    render: function () {
        return (
            <div>

                <Grid responsive style={styleGrid} >

                    <h1 style={styleH1} >Distribution</h1>

                    <p style={styleP} >Add classes to distribute the contents of a row or column.</p>

                    <Row around="xs" style={styleRow} >
                        <Col xs={2} style={styleCol} >around</Col>
                        <Col xs={2} style={styleCol} >around</Col>
                        <Col xs={2} style={styleCol} >around</Col>
                    </Row>

                    <Row between="xs" style={styleRow} >
                        <Col xs={2} style={styleCol} >between</Col>
                        <Col xs={2} style={styleCol} >between</Col>
                        <Col xs={2} style={styleCol} >between</Col>
                    </Row>

                </Grid>
            </div>

        )
    }
})

export default Distribution
