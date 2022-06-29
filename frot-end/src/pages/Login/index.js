import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

function Login() {
  return (
    <>
      <Header />
      <Container>
        <h1 style={{ textAlign: 'center' }}>Login</h1>
        <Form>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Usuário</Form.Label>
            <Form.Control type='email' placeholder='E-mail' />
            <Form.Text className='text-muted'></Form.Text>
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Senha</Form.Label>
            <Form.Control type='password' placeholder='Senha' />
          </Form.Group>
          <Form.Group
            className='mb-3'
            controlId='formBasicCheckbox'></Form.Group>
          <Button variant='primary' type='submit'>
            Entrar
          </Button>
        </Form>
        <div style={{ display: 'flex', marginTop: '15px' }}>
          <p style={{ marginRight: '7px' }}>Não tem uma conta?</p>

          <Link to='/create-user'>Crie agora</Link>
        </div>
      </Container>
    </>
  );
}

export default Login;
