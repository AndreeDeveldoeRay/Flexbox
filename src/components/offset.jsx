/**
 * @Author: Andreee Ray <develdoe>
 * @Date:   2017-04-20T12:52:48+02:00
 * @Email:  me@andreeray.se
 * @Filename: responsive.jsx
 * @Last modified by:   develdoe
 * @Last modified time: 2017-04-20T14:58:00+02:00
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

export var Offset = React.createClass({
    render: function () {
        return (
            <div>

                <Grid responsive style={styleGrid} >

                    <h1 style={styleH1} >Offset</h1>

                    <p style={styleP} >Offset a column.</p>

                    <Row style={styleRow} >
                        <Col xsOffset={11} xs={1} style={styleCol} />
                         <Col xsOffset={10} xs={2} style={styleCol} />
                         <Col xsOffset={9} xs={3} style={styleCol} />
                         <Col xsOffset={8} xs={4} style={styleCol} />
                         <Col xsOffset={7} xs={5} style={styleCol} />
                         <Col xsOffset={6} xs={6} style={styleCol} />
                         <Col xsOffset={5} xs={7} style={styleCol} />
                         <Col xsOffset={4} xs={8} style={styleCol} />
                         <Col xsOffset={3} xs={9} style={styleCol} />
                         <Col xsOffset={2} xs={10} style={styleCol} />
                         <Col xsOffset={1} xs={11} style={styleCol} />
                    </Row>

                </Grid>
            </div>

        )
    }
})

export default Offset
