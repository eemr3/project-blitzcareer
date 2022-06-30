import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from '../../styles/pages/Login.module.css';

function Login() {
  return (
    <div className={ styles.container }>

      <h1 className={ styles.title }>Login</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Usuário</Form.Label>
          <Form.Control type="email" placeholder="E-mail" />
          <Form.Text className="text-muted" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Senha" />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="formBasicCheckbox"
        />
        <Button variant="primary" type="submit">
          Entrar
        </Button>
      </Form>
      <div style={ { display: 'flex', marginTop: '15px' } }>
        <p style={ { marginRight: '7px' } }>Não tem uma conta?</p>

        <Link to="/create-user">Crie agora</Link>
      </div>

    </div>
  );
}

export default Login;
