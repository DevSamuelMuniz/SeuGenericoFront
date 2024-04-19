// Button.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'; // Para simular interações do usuário
import Button from './Button'; // Importe o componente que você deseja testar

test('renders button with correct text', () => {
  render(<Button text="Click me" />);
  const buttonElement = screen.getByText(/click me/i); // Use as consultas do Testing Library para encontrar elementos na tela
  expect(buttonElement).toBeInTheDocument(); // Use expect do Jest para fazer afirmações
});

test('calls onClick when clicked', () => {
  const handleClick = jest.fn(); // Cria uma função espiã para verificar se a função foi chamada
  render(<Button text="Click me" onClick={handleClick} />);
  const buttonElement = screen.getByText(/click me/i);
  userEvent.click(buttonElement); // Simula um clique no botão
  expect(handleClick).toHaveBeenCalledTimes(1); // Verifica se a função foi chamada uma vez
});
