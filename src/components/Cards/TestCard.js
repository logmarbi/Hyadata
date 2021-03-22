/* eslint-disable */
import { chunk } from 'lodash'
import React, { Component, useState } from 'react';
import { Col, Row, Grid } from 'react-flexbox-grid'
import { SnackbarProvider } from 'notistack'

class GridCard extends Component {
 
 render(){
   const colWidth = 12 / this.props.cols;
   const rows = chunk(React.Children.toArray(this.props.children), this.props.cols)
  return (
	     <Grid>
      {rows.map((cols) => (
        <Row>
          {cols.map((col) => (
            <Col sm={12} md={colWidth}>
              {col}
            </Col>
          ))}
        </Row>
      ))}
    </Grid>
  );

  }
}

export default GridCard;