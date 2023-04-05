import { render, screen } from '@testing-library/react';
import SearchBar from '../components/SearchBar';
import { BrowserRouter } from 'react-router-dom';

describe('SearchBar', () => {
  it('navigation', () => {
    render(
      <BrowserRouter>
        <SearchBar />
      </BrowserRouter>
    );
    expect(screen.getByPlaceholderText('try to search a person')).toBeInTheDocument();
    expect(screen.getByText('Search')).toBeInTheDocument();
    expect(screen.getByText('Add a person')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
