import React, { Component } from 'react';
import { sentencesURI } from './Const';
import { DefaultForm } from './DefaultForm';
import { Grid, Row, Col } from 'react-bootstrap';

/**
 * Represents the component querying and showing the results of
 * searching sentences from a given chunk of text
 *
 * @since 0.1.0
 */
export class Sentences extends Component {

  render() {
    return (
        <Grid>
        <Row className="show-grid">
        <Col xs={12}>
        <h2>Sentence detector</h2>
        <p>A sentence detector extracts all found sentences in a given text. This service uses <a target="_blank" href="http://opennlp.apache.org/docs/1.8.1/manual/opennlp.html#tools.sentdetect">OpenNLP Sentences detector</a></p>
        <DefaultForm uri={sentencesURI}/>
      </Col>
        </Row>
      </Grid>
    );
  }
}
