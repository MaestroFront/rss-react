import React from 'react';

export interface ICard {
  title: string;
  description: string;
  age: string;
  city: string;
  tel: string;
  mail: string;
  src: string;
  date: string;
  id: string;
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
  };

  return (
    <div className="card" id={props.id}>
      <div className="card__image-container">
        <img className="image" src={props.src} alt={props.title} />
      </div>
      <h3 className="card-title">{props.title}</h3>
      <h4 className="card-description">{props.description}</h4>
      <div className="card__info">
        <span>{props.age}</span>
        <span>{props.city}</span>
      </div>
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
