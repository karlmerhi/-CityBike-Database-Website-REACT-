import React from "react";
import {Card} from 'react-bootstrap';

function About() {
    return (
      <>
        <Card border="dark" style={{ width: '40rem' }}>
        <Card.Header>ABOUT</Card.Header>
        <Card.Body>
          <Card.Title>Hello, my name is Karl I am a developer.</Card.Title>
        </Card.Body>
      </Card>
      <br />
    </>
    );
  }

  export default About