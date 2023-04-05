import { showImage } from '../helpers/helpers';
import { ICard } from '../types/interfaces';

export const MyCard = function (props: ICard) {
  let movie = '';

  props.movie === true ? (movie = 'yes') : (movie = 'no');

  return (
    <div className="card" id={props.id}>
      <div className="card__image-container">
        <img className="image" src={showImage(props)} alt={props.name} />
      </div>
      <h3 className="card-name">{props.name}</h3>
      <div className="card__info">
        <span>{props.gender.toUpperCase()[0]}</span>
      </div>
      <div className="birthday">{props.birthday}</div>
      <div className="sphere">Sphere: {props.sphere}</div>
      <div className="movie">Starred in a movie: {movie}</div>
      <span className="e-mail">{props.mail}</span>
    </div>
  );
};

export default MyCard;
