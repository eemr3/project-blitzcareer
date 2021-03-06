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

  it('renderiza link "Crie agora"', () => {
    const { history } = renderWithRouter(<App />);
    const link = screen.getByRole('link', { name: 'Crie agora' });
    expect(link).toBeInTheDocument();
    userEvent.click(link);
    const { pathname } = history.location;
    expect(pathname).toBe('/create-user');
  });

  it('renderiz botão "Entrar"', () => {
    renderWithRouter(<App />);
    const button = screen.getByRole('button', { name: 'Entrar' });
    expect(button).toBeInTheDocument();
    userEvent.click(button);
  });
});
