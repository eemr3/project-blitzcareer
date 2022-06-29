import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

function Login() {
  return (
    <div>
      <Header />
      <div>
        <input type='text' placeholder='E-mail' />
        <input type='text' placeholder='Password' />
        <button type='button'>Entrar</button>
      </div>
      <div>
        <p>Não tem uma conta?</p>
        <Link to='/create-user'>Crie agora</Link>
      </div>
    </div>
  );
}

export default Login;
