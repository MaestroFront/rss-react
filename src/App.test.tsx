import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it('renders learn react', () => {
  render(<App />);
  const element = screen.getByText(/Hello/i);
  expect(element).toBeInTheDocument();
});
