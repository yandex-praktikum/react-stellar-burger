import React from "react";
import styles from "./ingredient-detail.module.css";
import { useSelector } from "react-redux";

function IngredientDetail() {

    const details = useSelector((store) => store.currentIngredient)
    const data = details.details

    if (!data) return null
    return (
        <section className={`${styles.detailContainer}`}>
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