import React, { useContext, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import api from '../../../../api/api';
import Context from '../../../../context/Context';

function FormComponet() {
  const { setSaveDataFormTask, setIsSave, nameUser } = useContext(Context);
  const [valuesFormTask, setValuesFormTasks] = useState({
    title: '',
    description: '',
    status: 'Pendente',
    userId: nameUser.id,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const result = await api.post('/tasks', valuesFormTask, {
        headers: { Authorization: token },
      });

      setSaveDataFormTask(result.data);
      setIsSave(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form onSubmit={ handleSubmit }>
      <Row className="mb-3">
        <Form.Group as={ Col } controlId="formGridCity">
          <Form.Label>Titulo</Form.Label>
          <Form.Control
            value={ valuesFormTask.title }
            onChange={ (event) => setValuesFormTasks({
              ...valuesFormTask, title: event.target.value,
            }) }
          />
        </Form.Group>

        <Form.Group as={ Col } controlId="formGridState">
          <Form.Label>
            Descrição

          </Form.Label>
          <Form.Control
            value={ valuesFormTask.description }
            onChange={ (event) => setValuesFormTasks({
              ...valuesFormTask, description: event.target.value,
            }) }
          />
        </Form.Group>

        <Form.Group as={ Col } controlId="formGridZip">
          <Form.Label>Status</Form.Label>
          <Form.Select
            onChange={ (event) => setValuesFormTasks({
              ...valuesFormTask, status: event.target.value,
            }) }
          >
            <option value="Pendente">Pendente</option>
            <option value="Em adamento">Em adamento</option>
            <option value="Pronto">Pronto</option>
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
