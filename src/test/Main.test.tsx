import { render, screen } from '@testing-library/react';
import MainPage from '../pages/Main';
import { BrowserRouter } from 'react-router-dom';

describe('Main', () => {
  it('availability', () => {
    render(
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    );
    expect(screen.getByText('Thomas')).toBeInTheDocument();
    expect(screen.getByText('Add a person')).toBeInTheDocument();
    expect(screen.getByText('Search')).toBeInTheDocument();
  });
});
