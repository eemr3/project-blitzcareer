import React, { useContext, useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import api from '../../../../api/api';
import Context from '../../../../context/Context';
import styles from '../../../../styles/components/Table.module.css';

function TableComponent() {
  const {
    setNameUser,
    isSave, setIsSave,
    setDataTaskUpdate,
    setValuesFormTasks,
    setIsCreate } = useContext(Context);
  const [dataToDoUser, setDataToDoUser] = useState([]);

  useEffect(() => {
    const tokenLS = localStorage.getItem('token') || '';
    const getDataUserApi = async () => {
      const resultTaks = await api.get('/users/userid', {
        headers: { Authorization: tokenLS },
      });

      setDataToDoUser(resultTaks.data.toDos);
      setNameUser({ id: resultTaks.data.id, name: resultTaks.data.name });
    };

    getDataUserApi();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSave]);

  const handleDeleteTask = async (id) => {
    await api.delete(`/tasks/${id}`, {
      headers: { Authorization: tokenLS },
    });

    setIsSave(!isSave);
  };

  const handleUpdateTask = (titleT, descriptionT, statusT, id) => {
    setValuesFormTasks({ title: titleT, description: descriptionT, status: statusT });
    setDataTaskUpdate({ title: titleT, description: descriptionT, status: statusT, id });
    setIsCreate(false);
  };

  const handleOrderList = (col) => {
    const n = 1;
    const dataSort = [...dataToDoUser].sort(
      (colA, colB) => (colA[col] > colB[col] ? 1 : -n),
    );

    setDataToDoUser(dataSort);
  };

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th
            style={ { cursor: 'pointer' } }
            aria-hidden="true"
            onClick={ () => handleOrderList('title') }
          >
            Titulo
          </th>
          <th>Descrição</th>
          <th
            style={ { cursor: 'pointer' } }
            aria-hidden="true"
            onClick={ () => handleOrderList('createdAt') }
          >
            Data de criação

          </th>
          <th
            style={ { cursor: 'pointer' } }
            aria-hidden="true"
            onClick={ () => handleOrderList('status') }
          >
            Status

          </th>
          <th>Ação</th>
        </tr>
      </thead>
      <tbody>
        {dataToDoUser.map((task) => (
          <tr key={ task.id }>
            <td
              className={ task.status === 'Pronto'
                ? styles.completeTask : '' }
            >
              {task.title}

            </td>
            <td
              className={ task.status === 'Pronto'
                ? styles.completeTask : '' }
            >
              {task.description}

            </td>
            <td
              className={ task.status === 'Pronto'
                ? styles.completeTask : '' }
            >
              {task.createdAt.split('-').reverse().join('/') }

            </td>
            <td
              className={ task.status === 'Pronto'
                ? styles.completeTask : '' }
            >
              {task.status}

            </td>
            <td className={ styles.tdContent }>
              <Button
                type="button"
                variant="secondary"
                disabled={ task.status === 'Pronto' }
                onClick={ () => handleUpdateTask(
                  task.title, task.description, task.status, task.id,
                ) }
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
