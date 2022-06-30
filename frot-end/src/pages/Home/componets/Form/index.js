import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

function FormComponet() {
  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={ Col } controlId="formGridCity">
          <Form.Label>Titulo</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={ Col } controlId="formGridState">
          <Form.Label>Descrição</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={ Col } controlId="formGridZip">
          <Form.Label>Status</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Button variant="success" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default FormComponet;
