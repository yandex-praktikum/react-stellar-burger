import React from "react";
import IngredientCard from "../ingredient-card/ingredient-card";
import styles from "./ingredient-cards.module.css";
import ingredientPropType from "../../../utils/prop-types";
import PropTypes from "prop-types";
function IngredientCards({ title, cardsArr, onClick }) {
  return (
    <div className={styles.card}>
      <h2 className={`text text_type_main-large pb-6`}>{title}</h2>
      <div className={`${styles.container} pb-10`}>
        {cardsArr.map((el) => (
          <IngredientCard name={el.name} image={el.image} price={el.price} el={el} key={el._id} onClick={onClick} />
        ))}
      </div>
    </div>
  );
}

IngredientCards.propTypes = {
  title: PropTypes.string.isRequired,
  cardsArr: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired,
};

export default IngredientCards;
