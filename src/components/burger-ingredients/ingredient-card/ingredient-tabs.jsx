import React from "react";
import styles from "./ingredient-tabs.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

const IngredientTabs = () => {
    const [current, setCurrent] = React.useState("buns");

    const setTab = (tab) => {
        setCurrent(tab);
        const element = document.getElementById(tab);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className={`${styles.ingredientsContainer} mb-10`}>
            <h2 className={`text text_type_main-large pt-10 pb-5`}>Соберите бургер</h2>
            <div className={`${styles.tabsContainer}`}>
                <Tab value="buns" active={current === "buns"} onClick={setTab}>
                    Булочки
                </Tab>
                <Tab value="sauces" active={current === "sauces"} onClick={setTab}>
                    Соусы
                </Tab>
                <Tab value="main" active={current === "main"} onClick={setTab}>
                    Начинки
                </Tab>
            </div>
        </div>
    );
};

export default IngredientTabs;
