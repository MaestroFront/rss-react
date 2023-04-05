import React from 'react';
import { render } from '@testing-library/react';
import CardsField from '../components/CardsField';
import { personsData } from '../data/data';

describe('CardsField', () => {
  it('render cards', () => {
    render(
      <CardsField
        state={{
          client: personsData,
        }}
      />
    );
  });
});
