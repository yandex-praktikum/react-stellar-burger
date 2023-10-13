import React, { useState } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';
import IngredientCards from './ingredient-cards/ingredient-cards';
import ingredientPropType from '../../utils/prop-types';
import PropTypes from 'prop-types';

function BurgerIngredients({ ingredients }) {

    const [current, setCurrent] = useState('bun');

    const filter = (type) => ingredients.filter((el) => el.type === type);

    return (
        <section className={styles.section}>
            <h1 className='text text_type_main-large pt-10 pb-5'>Соберите бургер</h1>
            <div className={`${styles['burger-menu']} pb-10`}>
                <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="main" active={current === 'main'} onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>

            <div className={`${styles['burger-card']} custom-scroll`}>
                <IngredientCards title="Булки" cardsArr={filter('bun')} />
                <IngredientCards title="Соусы" cardsArr={filter('sauce')} />
                <IngredientCards title="Начинки" cardsArr={filter('main')} />
            </div>
        </section>
    );
};

BurgerIngredients.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired,
};
export default BurgerIngredients;