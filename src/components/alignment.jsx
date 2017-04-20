/**
 * @Author: Andreee Ray <develdoe>
 * @Date:   2017-04-20T12:52:48+02:00
 * @Email:  me@andreeray.se
 * @Filename: responsive.jsx
 * @Last modified by:   develdoe
 * @Last modified time: 2017-04-20T14:57:24+02:00
 */



import React from 'react'
import { Grid, Row , Col } from 'react-flexbox-grid'

const styleH1 = {
    fontSize: '2em',
    color: 'Rgb(255, 235, 238)',
    marginBottom: '10px'
}

const styleh2 = {
    fontSize: '1.5em',
    color: 'Rgb(255, 235, 238)',
    marginBottom: '10px',
    marginTop: '10px'
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

export var Alignment = React.createClass({
    render: function () {
        return (
            <div>

                <Grid responsive style={styleGrid} >

                    <h1 style={styleH1} >Alignment</h1>

                    <p style={styleP} >Add classes to align elements to the start or end of row as well as the top, bottom, or center of a column</p>


                    <Row style={styleRow} >
                        <Col xs={12} style={styleCol} >
                            <Row start="xs" style={styleRow}>
                                <Col xs={6} style={styleCol} >start</Col>
                            </Row>
                        </Col>
                    </Row>


                    <Row style={styleRow} >
                        <Col xs={12} style={styleCol} >
                            <Row center="xs" style={styleRow}>
                                <Col xs={6} style={styleCol} >center</Col>
                            </Row>
                        </Col>
                    </Row>


                    <Row style={styleRow} >
                        <Col xs={12} style={styleCol} >
                            <Row end="xs" style={styleRow}>
                                <Col xs={6} style={styleCol} >end</Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row top="xs" style={styleRow} >
                        <Col xs={6} style={styleCol} >top</Col>
                        <Col xs={6} style={styleCol} />
                    </Row>

                    <Row middle="xs" style={styleRow} >
                        <Col xs={6} style={styleCol} >middle</Col>
                        <Col xs={6} style={styleCol} />
                    </Row>

                    <Row bottom="xs" style={styleRow} >
                        <Col xs={6} style={styleCol} >bottom</Col>
                        <Col xs={6} style={styleCol} />
                    </Row>

                </Grid>
            </div>

        )
    }
})

export default Alignment
