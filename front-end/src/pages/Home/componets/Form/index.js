import React, { useContext } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import api from '../../../../api/api';
import Context from '../../../../context/Context';

function FormComponet() {
  const {
    setSaveDataFormTask,
    setIsSave,
    isSave,
    isCreate,
    setIsCreate,
    setValuesFormTasks,
    valuesFormTask,
    dataTaskUpdate,
  } = useContext(Context);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');
    try {
      const result = await api.post('/tasks', valuesFormTask, {
        headers: { Authorization: token },
      });

      setSaveDataFormTask(result.data);
      setValuesFormTasks({
        title: '',
        description: '',
        status: 'Pendente',
      });
      setIsSave(!isSave);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdat = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');
    const { id } = dataTaskUpdate;
    try {
      await api.put(`tasks/${id}`, valuesFormTask, {
        headers: { Authorization: token },
      });
      setIsCreate(true);
      setIsSave(!isSave);
      setValuesFormTasks({
        title: '',
        description: '',
        status: 'Pendente',
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form onSubmit={ isCreate ? handleSubmit : handleUpdat }>
      <Row className="mb-3">
        <Form.Group as={ Col } controlId="formGridCity">
          <Form.Label>Titulo</Form.Label>
          <Form.Control
            value={ valuesFormTask.title }
            onChange={ (event) => setValuesFormTasks({
              ...valuesFormTask, title: event.target.value,
            }) }
            required
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
            required
          />
        </Form.Group>

        <Form.Group as={ Col } controlId="formGridZip">
          <Form.Label>Status</Form.Label>
          <Form.Select
            value={ valuesFormTask.status }
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
      {isCreate ? (
        <Button variant="success" type="submit">
          Criar nova tarefa
        </Button>

      ) : (
        <Button variant="warning" type="submit">
          Savar alteração
        </Button>
      )}
    </Form>
  );
}

export default FormComponet;
