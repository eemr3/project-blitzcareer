import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../components/Header';
import FormComponet from './componets/Form';
import styles from '../../styles/pages/Home.module.css';
import TableComponet from './componets/Table';

function Home() {
  return (
    <>
      <Header />
      <Container>
        <h2 className={ styles.title }>
          Olá
          {' '}
          <span>Usuário de nome</span>
        </h2>
        <FormComponet />
        <div className={ styles.containerTtable }>
          <TableComponet />
        </div>
      </Container>
    </>
  );
}

export default Home;
