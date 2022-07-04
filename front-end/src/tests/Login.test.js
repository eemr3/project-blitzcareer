import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../helpers/renderWithRouter';

describe('Tela de Login', () => {
  it('renderiza titulo na tela', () => {
    renderWithRouter(<App />);
    const title = screen.getByText('Login');

    expect(title).toBeInTheDocument();
  });

  it('renderiza inputs na tela', () => {
    renderWithRouter(<App />);
    const inputEmail = screen.getByPlaceholderText('E-mail');
    const inputPassword = screen.getByPlaceholderText('Senha');
    expect(inputEmail).toHaveValue('');
    expect(inputEmail).toBeInTheDocument();
    userEvent.type(inputEmail, 'ichigo@gmail.com');
    expect(inputEmail).toHaveValue('ichigo@gmail.com');

    expect(inputPassword).toHaveValue('');
    expect(inputPassword).toBeInTheDocument();
    expect(inputPassword).toHaveAttribute('type', 'password');
  });
});
