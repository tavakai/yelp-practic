import React from 'react';
import * as moviesApi from '../../../utils/MoviesApi';
import { useSelector } from "react-redux";

const MoviesCard = ({card, saveCard, removeCard}) => {
  const image = `${moviesApi.base_url}${card.image.url}`;
  const movieNameRU = card.nameRU;
  const movieLink = card.trailerLink;
  const mins = card.duration % 60;
  const hours = (card.duration - mins) / 60;
  const movieDuration = `${hours}ч  ${mins}м`;

  const cardMovie = useSelector(store => store.movies);
  
  return (
    <div className="card">
      <a href={movieLink} className="card__link-img">
        <img className="card__img" src={image} alt={movieNameRU} />
      </a>
      <a href={movieLink} className="card__link-title" target="_blank" rel="noreferrer">
        <h2 className="card__title">{movieNameRU}</h2>
      </a>
        <div className="card__likes">
          <button onClick={() => saveCard(card)} type="button" className={`card__like ${cardMovie.likedMovies.includes(card) ? 'card__like_active' : ''}`} />
        </div>
      <hr className="card__line" />
      <span className="card__duration">{movieDuration}</span>
      <div className={`${cardMovie.filter ? 'card__delete-wrapper_hide' : 'card__delete-wrapper'}`} onClick={() => removeCard(card)}>
        <button className="card__delete-icon" />
      </div>
    </div>
  );
}

export default MoviesCard;