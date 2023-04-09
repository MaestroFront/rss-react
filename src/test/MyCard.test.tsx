import { screen, render } from '@testing-library/react';
import MyCard from '../components/MyCard';

describe('CardsField', () => {
  it('create a card', () => {
    render(
      <MyCard
        name={'Alex'}
        gender={'M'}
        birthday={'29.01.1994'}
        sphere={'IT'}
        mail={'alex@mail.ru'}
        movie={false}
        file={''}
        id={''}
      />
    );
    expect(screen.getByText('Alex')).toBeInTheDocument();
    expect(screen.getByText('M')).toBeInTheDocument();
    expect(screen.getByText('Sphere: IT')).toBeInTheDocument();
    expect(screen.getByText('Starred in a movie: no')).toBeInTheDocument();
    expect(screen.getByText('alex@mail.ru')).toBeInTheDocument();
    expect(screen.getByText('29.01.1994')).toBeInTheDocument();
    expect(screen.getByText('Info')).toBeInTheDocument();
    expect(screen.getByText('Delete')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
