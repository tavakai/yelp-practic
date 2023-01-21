import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../../Preloader/Preloader";
import MoreButton from "../MoreButton/MoreButton";
import NotResults from "../NotResults/NotResults";
import { getMoivesAction } from "../../../services/actions/actions";

const MoviesCardList = ({}) => {
  const dispatch = useDispatch();
  const { movies } = useSelector(state => state.movies);
  useEffect(() => {
    dispatch(getMoivesAction());
  }, [])
  return (
    <section className="MoviesCardList">
        <div className="MoviesCardList__content">
          {movies?.map((card) => {
            return (
              <MoviesCard key={card.id} card={card} />
            );
          })}
        </div>
      {!movies.length ? <NotResults /> : null}
    </section>
  );
};

export default MoviesCardList;
