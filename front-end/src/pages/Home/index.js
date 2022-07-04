import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../components/Header';
import FormComponet from './componets/Form';
import styles from '../../styles/pages/Home.module.css';
import TableComponent from './componets/Table';
import Context from '../../context/Context';

function Home() {
  const { nameUser } = useContext(Context);

  return (
    <>
      <Header />
      <Container>
        <h2 className={ styles.title }>
          Olá
          {' '}
          <span>{nameUser.name}</span>
        </h2>
        <FormComponet />
        <div className={ styles.containerTtable }>
          <TableComponent />
        </div>
      </Container>
    </>
  );
}

export default Home;
