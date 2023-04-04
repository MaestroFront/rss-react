import React from 'react';
import MyCard from './MyCard';
import { ICard } from '../types/interfaces';
import { updateCards } from '../helpers/helpers';

function CardsField(props: { state: { client: ICard[] } }) {
  updateCards(props);
  return (
    <div className="cards-field">
      {props.state.client.map((item: ICard, index: number) => {
        const { name, gender, birthday, sphere, mail, movie, file, src, id } = item || {};

        return (
          <React.Fragment key={index}>
            <MyCard
              name={name}
              gender={gender}
              birthday={birthday}
              sphere={sphere}
              mail={mail}
              movie={movie}
              file={file}
              src={src}
              id={id}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default CardsField;
