import React from 'react';
import { Button, Table } from 'react-bootstrap';
import styles from '../../../../styles/components/Table.module.css';

function TableComponent() {
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
        <tr>
          <td>Ir ao supermercado</td>
          <td>Realizar compras do mês e compras de pneus para o carro</td>
          <td>pendente</td>
          <td className={ styles.tdContent }>
            <Button type="button" variant="secondary">
              <i className="bi bi-pencil-square" />
            </Button>
            <Button type="button" variant="danger">
              <i className="bi bi-trash" />
            </Button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td className={ styles.tdContent }>
            <Button type="button" variant="secondary">
              <i className="bi bi-pencil-square" />
            </Button>
            <Button type="button" variant="danger">
              <i className="bi bi-trash" />
            </Button>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry the Bird</td>
          <td>@twitter</td>
          <td className={ styles.tdContent }>
            <Button type="button" variant="secondary">
              <i className="bi bi-pencil-square" />
            </Button>
            <Button type="button" variant="danger">
              <i className="bi bi-trash" />
            </Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TableComponent;
