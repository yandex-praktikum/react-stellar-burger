import React from "react";
import { CurrencyIcon, DeleteIcon, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-const-total.module.css";


function BurgerConstTotal({burgerInfill}) {
    

    return (
            <ul className={`${styles.burgerConstTotal} custom-scroll`}>
                {burgerInfill.map((item, i) => (
                    <li key={i} className={`${styles.totalContainer} mt-4 mb-4`}>
                        <DragIcon />
                        <div className={`${styles.elementTotal} pt-4 pr-6 pb-4 pl-6`}>
                            <img src={item.image} alt="" className={`${styles.elementImage}`} />
                            <span className={`${styles.elementTitle} text text_type_main-default mr-5`}>{item.name}</span>
                            <div className={`${styles.containerPrice} mr-4`}>
                                <span className={`${styles.elementPrice} text text_type_digits-default`}>{item.price}</span>
                                <CurrencyIcon />
                            </div>
                            <DeleteIcon type="primary" />
                        </div>
                    </li>
                ))}
            </ul>
    );
}



export default BurgerConstTotal
