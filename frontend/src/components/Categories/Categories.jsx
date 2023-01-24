import { NavLink } from "react-router-dom";

const Categories = () => {
  return (
    <ul className="category__wrapper">
        <li>
          <NavLink to="/list/jewelery" className="category__item">
          Jewelery
          </NavLink>
        </li>
        <li>
          <NavLink to="/list/electronics" className="category__item">
          Electronics
          </NavLink>
        </li>
        <li>
          <NavLink to="/list/men's clothing" className="category__item">
          Men's clothing
          </NavLink>
        </li>
        <li>
          <NavLink to="/list/women's clothing" className="category__item">
          Women's clothing
          </NavLink>
        </li>
      </ul>
  );
};

export default Categories;
