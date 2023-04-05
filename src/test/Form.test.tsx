import { fireEvent, render, screen } from '@testing-library/react';
import FormCard from '../components/Form';

describe('Form', () => {
  it('render inputs', () => {
    render(<FormCard />);
    expect(screen.getByPlaceholderText('add a name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('add a mail')).toBeInTheDocument();
    expect(screen.getByText('File image')).toBeInTheDocument();
    expect(screen.getByText('Date of Birthday')).toBeInTheDocument();
    expect(screen.getByText('Choose a sphere')).toBeInTheDocument();
    expect(screen.getByText('Starred in a movie')).toBeInTheDocument();
    expect(screen.getByText('Reset')).toBeInTheDocument();
    expect(screen.getByText('Add a new person')).toBeInTheDocument();
  });
  it('render inputs', () => {
    render(<FormCard />);
    const btn = screen.getByText('Add a new person');
    fireEvent.click(btn);
    expect(screen.findByText('Name is require field!'));
    expect(screen.findByText('Email is require field!'));
    expect(screen.findByText('File is require field!'));
    expect(screen.findByText('Birthday is require field!'));
    expect(screen.findByText('Gender is require field!'));
  });
});
