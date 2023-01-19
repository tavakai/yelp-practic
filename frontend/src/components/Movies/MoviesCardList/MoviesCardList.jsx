import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../../Preloader/Preloader";
import MoreButton from "../MoreButton/MoreButton";
import NotResults from "../NotResults/NotResults";

const MoviesCardList = ({}) => {
  // const [moreButton, setMoreButton] = useState(false);
  // const data = useSelector((state) => state);

  // useEffect(() => {
  //   if (!data.movies.filter && data.movies.showMovies < data.movies.movies.length) {
  //     setMoreButton(true);
  //   } else if(data.movies.filter && data.movies.showMovies < data.movies.likedMovies.length) {
  //     setMoreButton(false);
  //   } else {
  //     setMoreButton(false);
  //   }
  // }, [data.movies.filter, data.movies.likedMovies.length, data.movies.movies.length, data.movies.showMovies, showItem]);

  return (
    <section className="MoviesCardList">
      {/* {!data.movies.movies.length ? (
        <Preloader />
      ) : (
        <div className="MoviesCardList__content">
          {cards?.slice(0, data.movies.showMovies).map((card) => {
            return (
              <MoviesCard />
            );
          })}
        </div>
      )}
      {!data.movies.likedMovies.length && data.movies.filter ? <NotResults /> : null}

      {moreButton ? (
        <MoreButton handleShowMoreItems={handleShowMoreItems} />
      ) : null} */}
    </section>
  );
};

export default MoviesCardList;
