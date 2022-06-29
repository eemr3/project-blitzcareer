import React from 'react';
import Header from '../../components/Header';

function NewUser() {
  return (
    <div>
      <Header />
      <form onSubmit={() => {}}>
        <input type='text' placeholder='Nome' />
        <input type='text' placeholder='E-mail' />
        <input type='text' placeholder='Password' />
        <button type='submit'>Criar</button>
      </form>
    </div>
  );
}

export default NewUser;
