/**
 * @Author: Andreee Ray <develdoe>
 * @Date:   2017-04-20T12:52:48+02:00
 * @Email:  me@andreeray.se
 * @Filename: responsive.jsx
 * @Last modified by:   develdoe
 * @Last modified time: 2017-04-20T14:57:56+02:00
 */



import React from 'react'
import { Grid, Row , Col } from 'react-flexbox-grid'
import styles from './style'

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

export var Fluid = React.createClass({
    render: function () {
        return (
            <div>

                <Grid fluid style={styleGrid} >

                    <h1 style={styleH1}>Fluid</h1>

                    <p style={styleP}>Percent based width allow fluid resizing of columns and rows.</p>

                    <Row style={styleRow} >
                        <Col xs={12} sm={3} md={2} lg={1} style={styleCol} >

                        </Col>
                        <Col className="custom" xs={6} sm={6} md={8} lg={10} style={styleCol} >

                        </Col>
                        <Col xs={6} sm={3} md={2} lg={1} style={styleCol} >

                        </Col>
                    </Row>

                </Grid>
            </div>

        )
    }
})

export default Fluid
