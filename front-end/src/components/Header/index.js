import React, { useContext } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Context from '../../context/Context';
import styles from '../../styles/components/Header.module.css';

function Header() {
  const navigate = useHistory();
  const { setNameUser } = useContext(Context);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setNameUser({ id: '', name: '' });
    navigate.push('/');
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <div className={ styles.containerHeader }>
          <h1>Ebytr </h1>
          <h2>Lista de tarefas</h2>
          <i
            className="bi bi-box-arrow-right"
            onClick={ handleLogout }
            aria-hidden
          />
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
