import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import Header from '../../components/Header';

function NewUser() {
  return (
    <>
      <Header />
      <Container>
        <Form>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Nome</Form.Label>
            <Form.Control type='text' placeholder='Nome completo' />
            <Form.Text className='text-muted'></Form.Text>
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>E-mail</Form.Label>
            <Form.Control type='email' placeholder='E-mail' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Senha</Form.Label>
            <Form.Control type='password' placeholder='Senha' />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Criar conta
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default NewUser;
