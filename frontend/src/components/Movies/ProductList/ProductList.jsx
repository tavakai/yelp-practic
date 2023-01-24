import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../../Preloader/Preloader";
import { getCategoryListAction } from "../../../services/actions/actions";
import { useParams } from "react-router-dom";
import Navigation from "../../Navigation/Navigation";
import FilterCheckbox from "../../FilterCheckbox/FilterCheckbox";
import Categories from "../../Categories/Categories";

const ProductList = ({}) => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const { categoryList } = useSelector(state => state.cards);
  
  useEffect(() => {
    dispatch(getCategoryListAction(category));
  }, [category])
  
  return (
    <section className="MoviesCardList">
        <FilterCheckbox  />
        <hr className="line" />
        <div className="MoviesCardList__content">
          {
            categoryList.length ? (
              categoryList?.map((card) => {
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

export default ProductList;
