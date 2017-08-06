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
        <p>A tokenizer segments an input character sequence into tokens. You can read more at <a href="http://opennlp.apache.org/docs/1.8.1/manual/opennlp.html#tools.tokenizer" target="_blank">OpenNLP Tokenizer documentation</a></p>
            <DefaultForm uri={tokenizerURI}/>
          </Col>
        </Row>
      </Grid>
    );
  }
}
