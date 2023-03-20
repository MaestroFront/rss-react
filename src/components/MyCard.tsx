import React from 'react';

export interface ICard {
  title: string;
  description: string;
  age: string;
  city: string;
  tel: string;
  mail: string;
  src: string;
  id: string;
}

const MyCard = function (props: ICard) {
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
        <button>Delete</button>
      </div>
      <span className="tel-number">{props.tel}</span>
      <span className="e-mail">{props.mail}</span>
    </div>
  );
};

export default MyCard;
