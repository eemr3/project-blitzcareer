import React from 'react';
import { Button, Form } from 'react-bootstrap';
import styles from '../../styles/pages/NewUser.module.css';

function NewUser() {
  return (
    <div className={ styles.container }>
      <h1 className={ styles.title }>Criar novo usuário</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" placeholder="Nome completo" />
          <Form.Text className="text-muted" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control type="email" placeholder="E-mail" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Senha" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Criar conta
        </Button>
      </Form>
    </div>
  );
}

export default NewUser;
