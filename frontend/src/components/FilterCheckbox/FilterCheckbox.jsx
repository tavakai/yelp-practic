import React from "react";
import { useSelector } from "react-redux";

const FilterCheckbox = ({ }) => {
  // const filter = useSelector(store => store.movies.filter);
  return (
      <label className="FilterCheckbox__switch">
        <input type="checkbox" />
        <span className="FilterCheckbox__slider"></span>
        <span className="FilterCheckbox__text">Избранное</span>
      </label>
  );
};

export default FilterCheckbox;
