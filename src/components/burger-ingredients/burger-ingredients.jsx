import React, { useState } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';
import IngredientCards from './ingredient-cards/ingredient-cards';
import ingredientPropType from '../../utils/prop-types';
import PropTypes from 'prop-types';

function BurgerIngredients({ ingredients }) {

    const [active, setActive] = useState("bun");

    const filter = (type) => ingredients.filter((el) => el.type === type);
  const onTabClick = (tab) => {
    setActive(tab);
    const ref = document.getElementById(tab);
    if (ref) {
      ref.scrollIntoView({ behavior: "smooth" });
    }
  };

    return (
        <section className={styles.section}>
            <h1 className='text text_type_main-large pt-10 pb-5'>Соберите бургер</h1>
            <div className={`${styles['burger-menu']} pb-10`}>
                <Tab value="bun" active={active === 'bun'} onClick={onTabClick}>
                    Булки
                </Tab>
                <Tab value="sauce" active={active === 'sauce'} onClick={onTabClick}>
                    Соусы
                </Tab>
                <Tab value="main" active={active === 'main'} onClick={onTabClick}>
                    Начинки
                </Tab>
            </div>
            <div className={`${styles["burger-card"]} custom-scroll`}>
                {["bun", "sauce", "main"].map((tab) => (
                <div key={tab} id={tab}>
                <ul className={`${styles["card-list"]} pl-4 pr-4`}>
                <IngredientCards
                    title={tab === "bun" ? "Булки" : tab === "sauce" ? "Соусы" : "Начинка"}
                    key={tab}
                    cardsArr={filter(tab)}
                />
                </ul>
          </div>
        ))}
      </div>
        </section>
    );
};


export default BurgerIngredients;