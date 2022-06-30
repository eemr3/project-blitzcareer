import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../api/api';
import styles from '../../styles/pages/Login.module.css';

function Login() {
  const navigate = useNavigate();
  const [inputLogin, setInputLogin] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await api.post('/login', inputLogin);

      localStorage.setItem('token', result.data.token);
      navigate('/home');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={ styles.container }>

      <h1 className={ styles.title }>Login</h1>
      <Form onSubmit={ handleSubmit }>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Usuário</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="E-mail"
            value={ inputLogin.email }
            onChange={ (event) => setInputLogin({
              ...inputLogin, email: event.target.value,
            }) }
          />
          <Form.Text className="text-muted" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            required
            type="password"
            value={ inputLogin.password }
            placeholder="Senha"
            onChange={ (event) => setInputLogin({
              ...inputLogin, password: event.target.value,
            }) }
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="formBasicCheckbox"
        />
        <Button
          variant="primary"
          type="submit"
        >
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
