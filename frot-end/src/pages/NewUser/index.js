import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import api from '../../api/api';
import styles from '../../styles/pages/NewUser.module.css';

function NewUser() {
  const navigate = useNavigate();
  const [newUserData, setNewUserData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmitNewUser = async (event) => {
    event.preventDefault();
    try {
      await api.post('/users', newUserData);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={ styles.container }>
      <h1 className={ styles.title }>Criar novo usuário</h1>
      <Form onSubmit={ handleSubmitNewUser }>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nome completo"
            value={ newUserData.name }
            onChange={ (event) => setNewUserData(
              {
                ...newUserData, name: event.target.value,
              },
            ) }
          />
          <Form.Text className="text-muted" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            type="email"
            placeholder="E-mail"
            value={ newUserData.email }
            onChange={ (event) => setNewUserData(
              {
                ...newUserData,
                email: event.target.value,
              },
            ) }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Senha"
            value={ newUserData.password }
            onChange={ (event) => setNewUserData(
              {
                ...newUserData,
                password: event.target.value,
              },
            ) }
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Criar conta
        </Button>
      </Form>
    </div>
  );
}

export default NewUser;
