import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorPage from './Error';

it('there is rs school link', () => {
  render(<ErrorPage />);
  const element = screen.getByText(/Error/i);
  expect(element).toBeInTheDocument();
});
