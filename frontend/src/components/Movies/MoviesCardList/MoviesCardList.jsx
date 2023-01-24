import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../../Preloader/Preloader";
import MoreButton from "../MoreButton/MoreButton";
import NotResults from "../NotResults/NotResults";
import { getMoivesAction } from "../../../services/actions/actions";

const MoviesCardList = ({}) => {
  const dispatch = useDispatch();
  const { cards } = useSelector(state => state.cards);
  // useEffect(() => {
  //   dispatch(getMoivesAction());
  // }, [])
  
  return (
    <section className="MoviesCardList">
        <div className="MoviesCardList__content">
          {
            cards ? (
              cards?.map((card) => {
                return (
                  <MoviesCard key={card.id} card={card} />
                );
              })
            ) : (
              <Preloader />
            )
          }
        </div>
      {/* {!movies ? <NotResults /> : null} */}
    </section>
  );
};

export default MoviesCardList;
