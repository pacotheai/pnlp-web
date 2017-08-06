import React, { Component } from 'react';
import { tokenizerURI } from './Const';
import { DefaultForm } from './DefaultForm';
import { Grid, Row, Col } from 'react-bootstrap';

/**
 * Represents the component querying and showing the results of
 * searching sentences from a given chunk of text
 *
 * @since 0.1.0
 */
export class Tokenizer  extends Component {

  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12}>
            <h2>Tokenizer </h2>
            <p>Tokenizer is...</p>
            <DefaultForm uri={tokenizerURI}/>
          </Col>
        </Row>
      </Grid>
    );
  }
}
