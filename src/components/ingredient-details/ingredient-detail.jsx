import React from "react";
import styles from "./ingredient-detail.module.css";
import { useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import { allIngredientsArray } from "../../services/selectors/ingredients-selectors";

function IngredientDetail() {

    const { ingredientId } = useParams()
    const location = useLocation()
    const background = location.state && location.state.background;
    console.log("location", location)

    console.log("ingredientId", ingredientId)

    const Array1 = useSelector(allIngredientsArray)
    console.log(Array1)

    const Element1 = Array1.find(ingredient => ingredient._id === ingredientId)
    console.log(Element1)

    const testContainer = background ? "" : "container"

    const data = Element1

    if (!data) return null
    return (
        <section className={`${styles.detailContainer} ${testContainer}`}>
            {!background && <p className={`text text_type_main-large ${styles.title}`}>Детали ингредиента</p>}
            <img className={`${styles.detailImage}`} src={data.image} alt={data.name} />
            <p className={`${styles.detailDescription} text text_type_main-medium pt-4 pb-8`}>{data.name}</p>
            <div className={`${styles.values} pb-15`}>
                <p className={`${styles.text} text text_type_main-default`}>Калории, ккал</p>
                <span className={`${styles.calories} text text_type_digits-default`}>{data.calories}</span>
                <p className={`${styles.text} text text_type_main-default`}>Белки, г</p>
                <span className={`${styles.proteins} text text_type_digits-default`}>{data.proteins}</span>
                <p className={`${styles.text} text text_type_main-default`}>Жиры, г</p>
                <span className={`${styles.fat} text text_type_digits-default`}>{data.fat}</span>
                <p className={`${styles.text} text text_type_main-default`}>Углеводы, г</p>
                <span className={`${styles.carbohydrates} text text_type_digits-default`}>{data.carbohydrates}</span>
            </div>
        </section>
    )
}

export default IngredientDetail