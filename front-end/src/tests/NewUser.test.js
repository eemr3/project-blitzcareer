import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helpers/renderWithRouter';
import NewUser from '../pages/NewUser';

describe('Tela de New User', () => {
  it('renderiza titulo na tela', () => {
    renderWithRouter(<NewUser />);
    const title = screen.getByText('Criar novo usuário');

    expect(title).toBeInTheDocument();
  });

  it('renderiza inputs na tela', () => {
    renderWithRouter(<NewUser />);
    const inputNome = screen.getByPlaceholderText('Nome completo');
    const inputEmail = screen.getByPlaceholderText('E-mail');
    const inputPassword = screen.getByPlaceholderText('Senha');

    expect(inputNome).toHaveValue('');
    expect(inputNome).toBeInTheDocument();
    userEvent.type(inputNome, 'Ichigo');
    expect(inputNome).toHaveValue('Ichigo');

    expect(inputEmail).toHaveValue('');
    expect(inputEmail).toBeInTheDocument();
    userEvent.type(inputEmail, 'ichigo@gmail.com');
    expect(inputEmail).toHaveValue('ichigo@gmail.com');

    expect(inputPassword).toHaveValue('');
    expect(inputPassword).toBeInTheDocument();
    expect(inputPassword).toHaveAttribute('type', 'password');
  });
});
