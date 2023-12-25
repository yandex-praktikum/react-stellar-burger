import React from "react";
import styles from "../ingredient-cards/card-list.module.css";
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { cardsPropType } from "../../../utils/prop-types";
import { useDispatch, useSelector } from "react-redux";
import { addCurrentBun, addCurrentIngredient } from "../../../services/actions/current-ingredients-actions";
import { useDrag } from "react-dnd";
import { Link, useLocation } from "react-router-dom";

function Card({ item, onClick }) {
    const location = useLocation();
    const dispatch = useDispatch();
    const ingredientsConstructor = useSelector(
        (store) => store.currentIngredients
    );

    const ingredientId = item['_id'];
    const background = location.state && location.state.background;


    const [isDragging, dragRef] = useDrag({
        type: "ingredients",
        item: () => item,
        collect: (monitor) => ({
            isDrag: monitor.isDragging(),
        }),
    });
    const checkCount = (item) => {
        let count = 0;
        if (item.type === "bun") {
            count = ingredientsConstructor.bun?._id === item._id ? 2 : 0;
        }
        else {
            count = ingredientsConstructor.other.filter(
                (ingredient) => ingredient._id === item._id
            ).length;
        }
        return count;
    };
    const handleClick = () => {
        if (isDragging) {
            return;
        }
        if (item.type === "bun" && ingredientsConstructor.bun?._id === item._id) {
            console.log("Компонент типа bun уже выбран");
            return;
        }
        if (item.type === "bun") {
            dispatch(addCurrentBun(item));
        } else {
            dispatch(addCurrentIngredient(item));
        }
    };

    // const handlePopupClick = () => {
    //     onClick();
    // };
    return (
        <Link
            key={ingredientId}
            to={`/ingredients/${ingredientId}`}
            state={{ background: location }}
            className={styles.link}>
            <div ref={dragRef}>
                <li className={`${styles.listElement}`} onClick={() => handleClick(item)}>
                    {checkCount(item) !== 0 && (
                        <Counter count={checkCount(item)} size="default" />
                    )}
                    <img
                        className={`${styles.cardPhoto}  pl-4 pb-4`}
                        src={item.image}
                        alt={item.name}
                    ></img>
                    <div className={`${styles.currencyContainer}`}>
                        <p
                            className={`${styles.cardsPrice} pt-2 pb-2 pr-4 text text_type_digits-default`}
                        >
                            {item.price}
                        </p>
                        <CurrencyIcon />
                    </div>
                    <p
                        className={`${styles.cardDescription} text text_type_main-default`}
                    >
                        {item.name}
                    </p>
                </li>
            </div>
        </Link>
    );
}

Card.propTypes = cardsPropType;

export default Card;            