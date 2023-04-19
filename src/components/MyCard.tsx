import { ICard } from '../types/interfaces';

export const MyCard = function (props: ICard) {
  return (
    <li className="card" id={props.id}>
      <div className="card__image-container">
        <img className="image" src={props.file} alt={props.name} />
      </div>
      <h3 className="card-name">{props.name}</h3>
      <div className="card__info">
        <span>{props.gender.toUpperCase()[0]}</span>
      </div>
      <div className="birthday">{props.birthday}</div>
      <div className="sphere">Sphere: {props.sphere}</div>
      <div className="movie">Starred in a movie: {(props.movie && 'yes') || 'no'}</div>
      <span className="e-mail">{props.mail}</span>
    </li>
  );
};

export default MyCard;
