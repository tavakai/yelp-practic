import React from 'react';
import * as moviesApi from '../../../utils/MoviesApi';
import { useDispatch, useSelector } from "react-redux";
import { isLikeAction } from '../../../services/actions/actions';

const MoviesCard = ({card, saveCard, removeCard}) => {
  const dispatch = useDispatch();
  const { title, price, description, image } = card;
  
  const setLike = (id) => {
    const like = !card.isLike
    dispatch(isLikeAction({id, isLike: like}))
  }
  const shortDescription = (text) => {
    if (text.length > 50) return `${text.substr(1, 100)}...`;
    return text;
  }
  return (
    <div className="card">
      <a href="#" className="card__link-img">
        <img className="card__img" src={image} alt={title} />
      </a>
      <a href="#" className="card__link-title" target="_blank" rel="noreferrer">
        <h2 className="card__title">{title}</h2>
      </a>
      <p className="card__description">{shortDescription(description)}</p>

        <div className="card__likes">
          <button onClick={() => setLike(card.id)} type="button" className={`card__like ${card.isLike ? 'card__like_active' : ''}`} />
        </div>

      <hr className="card__line" />
      <span className="card__duration">{price}</span>

      {/* <div className={`${cardMovie.filter ? 'card__delete-wrapper_hide' : 'card__delete-wrapper'}`} onClick={() => removeCard(card)}>
        <button className="card__delete-icon" />
      </div> */}

    </div>
  );
}

export default MoviesCard;