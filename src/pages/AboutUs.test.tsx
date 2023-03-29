import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutUs from './AboutUs';

it('there is rs school link', () => {
  render(<AboutUs />);
  const element = screen.getByText(/Celebrity Vault/i);
  expect(element).toBeInTheDocument();
});
