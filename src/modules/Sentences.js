import React, { Component } from 'react';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';
import { handleError, asJSON, ResultList } from './Common';
import { backURI as BACK_URI, HEADERS } from './Const';
import { Grid,
         Row,
         Col,
         Button,
         FormGroup,
         ControlLabel,
         FormControl
       } from 'react-bootstrap';

/**
 * Represents the component querying and showing the results of
 * searching sentences from a given chunk of text
 *
 * @since 0.1.0
 */
export class Sentences extends Component {
  constructor() {
    super();
    this.state = {
      sentences: [],
      text: "",
      blocking: false,
      valid: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleError = handleError.bind(this);
    this.blockUserInterface = this.blockUserInterface.bind(this);
    this.unblockUserInterface = this.unblockUserInterface.bind(this);
  }

  /**
   * Handles the form submit and Retrieves the found sentences in the
   * text from back end
   *
   * @param event the submit event
   * @since 0.1.0
   */
  handleSubmit(event) {
    event.preventDefault();
    let spec = {
	    method: 'POST',
	    mode: 'cors',
	    headers: HEADERS,
      body: JSON.stringify({
        text: this.state.text
      })
    };

    this.blockUserInterface()
      .then(() => fetch(BACK_URI, spec))
      .then(asJSON)
      .catch(this.handleError)
      .then(list => {
        this.setState({ sentences: list, blocking: false });
      }).then(this.unblockUserInterface);
  }

  handleTextChange(e) {
    if (!e.target.value) {
      this.setState({ text: e.target.value , valid: false});
    } else {
      this.setState({ text: e.target.value, valid: true });
    }
  }

  blockUserInterface() {
    this.setState({blocking: true});
    return Promise.resolve(1);
  }

  unblockUserInterface() {
    this.setState({blocking: false});
    return Promise.resolve(1);
  }

  render() {
    return (
        <Grid>
        <Row className="show-grid">
        <Col xs={12}>
        <h2>Sentence detector</h2>
        <p>A sentence detector extracts all found sentences in a given text. This service uses <a target="_blank" href="http://opennlp.apache.org/docs/1.8.1/manual/opennlp.html#tools.sentdetect">OpenNLP Sentences detector</a></p>
        <BlockUi tag="div" blocking={this.state.blocking}>
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="text" validationState={this.state.valid ? "success" : "error"}>
              <ControlLabel>Text:</ControlLabel>
              <FormControl name="text"
                           onChange={this.handleTextChange}
                           className="higher"
                           componentClass="textarea"
                           placeholder="Insert the text to extract the sentences from..." />
              <FormControl.Feedback/>
            </FormGroup>
            <FormGroup controlId="submit">
        <Button bsStyle="primary" type="submit" disabled={!this.state.valid}>Extract</Button>
            </FormGroup>
          </form>
        </BlockUi>
        </Col>
        </Row>
        <Row className="show-grid">
          <Col xs={12}>
            <ResultList value={this.state.sentences}/>
          </Col>
        </Row>
      </Grid>
    );
  }
}
