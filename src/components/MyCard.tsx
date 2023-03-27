import React from 'react';

export interface ICard {
  name: string;
  surname: string;
  gender: string;
  age: string;
  country: string;
  birthday: string;
  sphere: string;
  tel: string;
  mail: string;
  src: string;
  id: string;
  movie: string;
}

const MyCard = function (props: ICard) {
  const deletePerson = (id: string) => {
    const cards = document.querySelectorAll('.card') as NodeListOf<HTMLDivElement>;
    const persons = JSON.parse(localStorage.getItem('client') as string) as ICard[];
    const indexDelete = persons.findIndex((el) => el.id === id);
    persons.splice(indexDelete, 1);
    localStorage.setItem('client', JSON.stringify(persons));
    cards.forEach((el) => {
      if (el.id === id) el.remove();
    });
    localStorage.removeItem(`${props.name}`);
  };

  const showImage = (props: ICard) => {
    if (localStorage.getItem(props.name) as string) {
      return localStorage.getItem(props.name) as string;
    } else {
      return props.src;
    }
  };

  let movie = '';

  props.movie === 'true' ? (movie = 'yes') : (movie = 'no');

  return (
    <div className="card" id={props.surname}>
      <div className="card__image-container">
        <img className="image" src={showImage(props)} alt={props.name} />
      </div>
      <h3 className="card-name">{props.name}</h3>
      <h4 className="card-surname">{props.surname}</h4>
      <div className="card__info">
        <span>{props.gender}</span>
        <span>{props.age} y.o.</span>
        <span>{props.country}</span>
      </div>
      <div className="birthday">{props.birthday}</div>
      <div className="sphere">Sphere: {props.sphere}</div>
      <div className="movie">Starred in a movie: {movie}</div>
      <div className="card__btns">
        <button>Info</button>
        <button
          onClick={(e) => {
            // eslint-disable-next-line prettier/prettier
            const element = e.target as HTMLButtonElement;
            const id = element.parentElement?.parentElement?.id as string;
            deletePerson(id);
          }}
        >
          Delete
        </button>
      </div>
      <span className="tel-number">{props.tel}</span>
      <span className="e-mail">{props.mail}</span>
    </div>
  );
};

export default MyCard;
