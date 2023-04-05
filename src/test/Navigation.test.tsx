import { render, screen } from '@testing-library/react';
import Navigation from '../components/Navigation';
import { BrowserRouter } from 'react-router-dom';

describe('Navigation', () => {
  it('navigation', () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );
    expect(screen.getByText('Main')).toBeInTheDocument();
    expect(screen.getByText('AboutUs')).toBeInTheDocument();
  });
});
