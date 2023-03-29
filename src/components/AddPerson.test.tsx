import React from 'react';
import { render, screen } from '@testing-library/react';
import AddPerson from './AddPerson';

it('renders learn react', () => {
  render(<AddPerson />);
  const element = screen.getByText(/Add a person/i);
  expect(element).toBeInTheDocument();
});
