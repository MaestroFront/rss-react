import { render, screen } from '@testing-library/react';
import App from '../App';
import { BrowserRouter } from 'react-router-dom';

describe('App', () => {
  it('availability', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByText('Main')).toBeInTheDocument();
    expect(screen.getByText('AboutUs')).toBeInTheDocument();
  });
});
