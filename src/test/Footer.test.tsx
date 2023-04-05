import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Footer', () => {
  it('there is rs school link', () => {
    render(<Footer />);
    const element = screen.getByText(/RS School/i);
    expect(element).toBeInTheDocument();
  });

  it('there is github link', () => {
    render(<Footer />);
    const element = screen.getByText(/GitHub/i);
    expect(element).toBeInTheDocument();
  });
});
