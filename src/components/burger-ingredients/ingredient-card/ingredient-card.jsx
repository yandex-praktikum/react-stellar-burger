import React, { useState } from "react";
import PropTypes from "prop-types";
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ingredient-card.module.css";
import ingredientPropType from "../../../utils/prop-types";

function IngredientCard({ el, onClick }) {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => {
      return (prev += 1);
    });
  };

  return (
    <>
      <div className={styles.card} onClick={handleClick}>
        {count > 0 && <Counter count={count} size="default" />}
        <img className={styles.image} src={el.image} alt={el.name} onClick={onClick.bind(this, el)} />
        <div className={styles.price}>
          <span className="text text_type_digits-default pb-1">{el.price}</span>
          <CurrencyIcon type="primary" />
        </div>
        <div className={`${styles["name-card"]} text text_type_main-default`}>{el.name}</div>
      </div>
    </>
  );
}

IngredientCard.propTypes = {
  el: ingredientPropType,
};
export default IngredientCard;
