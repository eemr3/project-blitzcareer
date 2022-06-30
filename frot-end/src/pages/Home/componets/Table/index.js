import React, { useContext, useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import api from '../../../../api/api';
import Context from '../../../../context/Context';
import styles from '../../../../styles/components/Table.module.css';

function TableComponent() {
  const { setNameUser, isSave, setIsSave } = useContext(Context);
  const [dataToDoUser, setDataToDoUser] = useState([]);
  const tokenLS = localStorage.getItem('token') || '';

  useEffect(() => {
    const getDataUserApi = async () => {
      const resultTaks = await api.get('/users/userid', {
        headers: { Authorization: tokenLS },
      });
      const { id, name } = resultTaks.data;
      setDataToDoUser(resultTaks.data.toDos);
      setNameUser({ id, name });
    };

    getDataUserApi();
  }, [isSave, setNameUser, tokenLS]);

  const handleDeleteTask = async (id) => {
    const resultDelete = await api.delete(`/tasks/${id}`, {
      headers: { Authorization: tokenLS },
    });

    setIsSave(!isSave);
    console.log(resultDelete);
  };

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Titulo</th>
          <th>Descrição</th>
          <th>Status</th>
          <th>Ação</th>
        </tr>
      </thead>
      <tbody>
        {dataToDoUser.map((task) => (
          <tr key={ task.id }>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td>{task.status}</td>
            <td className={ styles.tdContent }>
              <Button
                type="button"
                variant="secondary"
                disabled={ task.status === 'Pronto' }
                onClick={ () => { console.log('Oi'); } }
              >
                <i className="bi bi-pencil-square" />
              </Button>
              <Button
                onClick={ () => handleDeleteTask(task.id) }
                type="button"
                variant="danger"
              >
                <i className="bi bi-trash" />
              </Button>
            </td>
          </tr>

        ))}
      </tbody>
    </Table>
  );
}

export default TableComponent;
