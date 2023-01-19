import React from 'react';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';

const Movies = ({}) => {
  
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