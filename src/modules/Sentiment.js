import React, { Component } from 'react';
import { EMPTY, HEADERS, sentimentURI } from './Const';
import { asJSON } from './Common';
import { Grid,
         Row,
         Col,
         Button,
         Alert,
         FormGroup,
         ControlLabel,
         FormControl
       } from 'react-bootstrap';


/**
 * Completely reusable component with a text box and a button which
 * shows a result banner presenting the message result.
 *
 * @since 0.2.0
 */
export class Form extends Component {
  /**
   * Renders the component
   *
   * @since 0.2.0
   */
  render() {
    return (
        <Grid>
          <Row className="show-grid">
            <Col xs={12}>
              <FormGroup controlId="text" validationState={this.props.text ? "success" : "error"}>
                <ControlLabel>Sentence:</ControlLabel>
                <FormControl name="text"
                             type="text"
                             onChange={this.props.onChange}
                             placeholder="Insert the text to process..." />
                <FormControl.Feedback/>
              </FormGroup>
              <FormGroup controlId="submit">
                <Button bsStyle="primary"
                        type="submit"
                        onClick={this.props.onClick}
                        disabled={!this.props.text}>Process</Button>
              </FormGroup>
            </Col>
          </Row>
          <Row className="show-grid">
             <Col xs={12}>
               <Alert bsStyle={this.props.result.state}>{this.props.result.message}</Alert>
            </Col>
          </Row>
        </Grid>
    );
  }
}

/**
 * Sentiment analysis parent component
 *
 * @since 0.2.0
 */
export class Sentiment extends Component {

  /**
   * Default constructor. Initializes state and some functions
   *
   * @since 0.2.0
   */
  constructor() {
    super();
    this.state = {
      result: {
        state: "success",
        message: "Expect for the best, prepare for the worst :P"
      },
      text: EMPTY
    };

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  /**
   * This function handles changing text in the Form child component. It will
   * set this component's text state
   *
   * @param ev the triggered event of changing component's text
   * @since 0.2.0
   */
  handleTextChange(ev) {
    this.setState({ text: ev.target.value});
  }

  /**
   * Will set the component's state with the result of processing the tweet message
   *
   * @param ev the event triggered when clicking on the child component's button
   * @since 0.2.0
   */
  handleOnClick(ev) {
    let spec = {
	    method: 'POST',
	    mode: 'cors',
	    headers: HEADERS,
      body: JSON.stringify({
        text: this.state.text
      })
    };

    fetch(sentimentURI, spec)
      .then(asJSON)
      .then(json => {
        if (json.result) {
          this.setState({result: { state: "success", message: "Uhh, that was nice"}});
        } else {
          this.setState({result: { state: "danger", message: "Uhh, that was bad"}});
        }
      });
  }

  /**
   * Renders the component
   *
   * @since 0.2.0
   */
  render() {
    return (
        <Grid>
          <Row className="show-grid">
            <Col xs={12}>
              <h2>Sentiment Analysis</h2>
              <p>The OpenNLP Document Categorizer can classify text into pre-defined categories. This example shows a categorization between good and bad tweets.</p>
              <Form onClick={this.handleOnClick}
                    onChange={this.handleTextChange}
      result={this.state.result}
      text={this.state.text}/>
            </Col>
          </Row>
      </Grid>
    );
  }
}
