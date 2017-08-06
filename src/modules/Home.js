import React, { Component } from 'react';
import { Grid, Row, Col, Media } from 'react-bootstrap';

export class Home extends Component {
  render() {
    return (
<Grid>
  <Row className="show-grid">
    <Col xs={12}>
      <h2>PNLP</h2>
      <h4>This web application shows different interactions exposed by the <b>Paco Natural Language Processing</b> Rest API.</h4>
      <h3>Technologies used</h3>
      <h4>Frontend</h4>
      <Media>
        <Media.Left align="top">
          <img width={64} height={64} src="https://facebook.github.io/react/img/logo.svg" alt="Image"/>
        </Media.Left>
        <Media.Body>
          <Media.Heading>React</Media.Heading>
          <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
        </Media.Body>
      </Media>
      <Media>
        <Media.Left align="top">
          <img width={64} height={64} src="https://react-bootstrap.github.io/assets/logo.png" alt="Image"/>
        </Media.Left>
        <Media.Body>
          <Media.Heading>React Bootstrap</Media.Heading>
          <p>React-Bootstrap is a library of reusable front-end components. You'll get the look-and-feel of Twitter Bootstrap, but with much cleaner code, via Facebook's React.js framework.</p>
        </Media.Body>
      </Media>
      <Media>
        <Media.Left align="top">
          <img width={64} height={64} src="https://camo.githubusercontent.com/f63754b8412368e820601967af6dea84312b925b/68747470733a2f2f7265616374747261696e696e672e636f6d2f72656163742d726f757465722f616e64726f69642d6368726f6d652d313434783134342e706e67" alt="Image"/>
        </Media.Left>
        <Media.Body>
          <Media.Heading>React Router</Media.Heading>
          <p>React Router is a powerful routing library built on top of React that helps you add new screens and flows to your application incredibly quickly, all while keeping the URL in sync with what is being displayed on the page.</p>
        </Media.Body>
      </Media>
      <h4>Backend</h4>
      <div>
        <Media>
          <Media.Left align="top">
            <img width={64} height={64} src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Groovy-logo.svg/1200px-Groovy-logo.svg.png" alt="Image"/>
          </Media.Left>
          <Media.Body>
            <Media.Heading>Groovy</Media.Heading>
            <p>Apache Groovy is a powerful, optionally typed and dynamic language, with static-typing and static compilation capabilities, for the Java platform aimed at improving developer productivity</p>
          </Media.Body>
        </Media>
        <Media>
          <Media.Left align="top">
            <img width={64} height={64} src="https://pbs.twimg.com/media/BtPDedmCEAAvw9N.png:small" alt="Image"/>
          </Media.Left>
          <Media.Body>
            <Media.Heading>Ratpack</Media.Heading>
            <p>Ratpack is a set of Java libraries for building modern HTTP applications. It provides just enough for writing practical, high performance, apps.</p>
          </Media.Body>
        </Media>
        <Media>
          <Media.Left align="top">
            <img width={64} height={64} src="http://opennlp.apache.org/img/opennlp-logo.png" alt="Image"/>
          </Media.Left>
          <Media.Body>
            <Media.Heading>OpenNLP</Media.Heading>
            <p>OpenNLP supports the most common NLP tasks, such as tokenization, sentence segmentation, part-of-speech tagging, named entity extraction, chunking, parsing, language detection and coreference resolution.</p>
          </Media.Body>
        </Media>
      </div>
    </Col>
  </Row>
</Grid>
    );
  }
}
