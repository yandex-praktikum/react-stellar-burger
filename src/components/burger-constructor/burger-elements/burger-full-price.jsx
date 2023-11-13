import React, { useState, useMemo } from "react";
import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-full-price.module.css";
import Modal from "../../modal/modal";
import OrderDetails from "../../order-details/order-details";
import { SelectedComponentContext } from "../../../services/burger-consctructor-context";


function BurgerFullPrice() {
    const {ingredientsConstructor} = React.useContext(SelectedComponentContext);
    const burgerInfill = ingredientsConstructor.other;
    const burgerBun = ingredientsConstructor.bun;
    const [fullPriceModal, setFullPriceModal] = useState(false);


    const handleOpenModal = () => {
        setFullPriceModal(true);
    }

    const handleCloseModal = () => {
        setFullPriceModal(false);
    }
    
    const priceOfBurger = useMemo(() => {
        const priceOfBun = burgerBun?.price || 0;
        const priceOfFilling = burgerInfill.reduce((acc, item) => acc + item.price, 0);
    
        return priceOfBun * 2 + priceOfFilling;
      }, [burgerInfill, burgerBun]);


    return (
        <div>
            <div className={`${styles.fullPriceContainer} mt-10`}>
                <div className={`${styles.fullPrice}`}>
                    <span className={"text text_type_digits-medium"}>{priceOfBurger}</span>
                    <CurrencyIcon type="primary"/>
                </div>
                <Button htmlType="button" type="primary" size="large" onClick={handleOpenModal}>
                    Оформить заказ
                </Button>
            </div>
            {fullPriceModal &&
                <Modal closeModal={handleCloseModal} title={""}>
                    <OrderDetails></OrderDetails>
                </Modal>}
        </div>
    );
}

export default BurgerFullPrice;
