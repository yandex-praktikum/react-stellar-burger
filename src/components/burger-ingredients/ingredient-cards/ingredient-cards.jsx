import React, { useState, useMemo } from "react";
import styles from "./ingredient-cards.module.css";
import IngredientsTabs from "../ingredient-card/ingredient-tabs";
import CardList from "./card-list";
import Modal from "../../modal/Modal";
import IngredientDetail from "../../ingredient-details/ingredient-detail";
import { ingredientPropType } from "../../../utils/prop-types";

const IngredientCards = ({ingredients}) => {
    const buns = useMemo(() => ingredients.filter((item) => item.type === "bun"), [ingredients]);
    const mains = useMemo(() => ingredients.filter((item) => item.type === "main"), [ingredients]);
    const sauces = useMemo(() => ingredients.filter((item) => item.type === "sauce"), [ingredients]);


    const [visible, setVisible] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    const handleOpenModal = (item) => {
        setSelectedCard(item);
        setVisible(true);
    }

    const handleCloseModal = () => {
        setVisible(false);
    }

    return (
        <>
            <IngredientsTabs />
            <div className={`${styles.ingredientsScroll} custom-scroll`}>
                <div id="buns" className={`${styles.cardContainer}`}>
                    <h2 className={`text text_type_main-medium pb-6`}>Булочки</h2>
                    <CardList data={buns}   handleOpenModal={handleOpenModal}/>
                </div>
                <div id="sauces" className={`${styles.cardContainer}`}>
                    <h2 className={`text text_type_main-medium pt-10 pb-6`}>Соусы</h2>
                    <CardList data={sauces}   handleOpenModal={handleOpenModal}/>
                </div>
                <div id="main" className={`${styles.cardContainer}`}>
                    <h2 className={`text text_type_main-medium pt-10 pb-6`}>Начинки</h2>
                    <CardList data={mains}   handleOpenModal={handleOpenModal}/>
                </div>
            </div>
            {visible &&
            <Modal title={"Детали ингредиентов"} closeModal={handleCloseModal} >

                <IngredientDetail data={selectedCard}></IngredientDetail>
            </Modal>}
        </>
    );
};

IngredientCards.propTypes = ingredientPropType


export default IngredientCards;
