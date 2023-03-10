import React from 'react';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Footer from '../Footer/Footer';

const Movies = () => {
  return (
    <section className="movies">
      <div className="movies__content">
        <FilterCheckbox  />
        <hr className="line" />
        <MoviesCardList />
      </div>
      <Footer />
    </section>
    
  )
}

export default Movies;