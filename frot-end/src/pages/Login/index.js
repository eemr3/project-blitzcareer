import React from 'react';

// import { Container } from './styles';

function Login() {
  return (
    <div>
      <div>
        <h1>Lista de tarefas - Ebytr</h1>
      </div>
      <div>
        <input type='text' placeholder='E-mail' />
        <input type='text' placeholder='Password' />
        <button type='button'>Entrar</button>
      </div>
      <div>
        <p>Não tem uma conta?</p>
        <a href='#/'>Crie agora</a>
      </div>
    </div>
  );
}

export default Login;
