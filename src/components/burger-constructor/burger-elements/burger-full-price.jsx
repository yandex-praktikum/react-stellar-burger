import React, { useState, useMemo } from "react";
import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-full-price.module.css";
import Modal from "../../modal/modal";
import OrderDetails from "../../order-details/order-details";
import { useSelector, useDispatch } from "react-redux";
import { clearCurrentIngredients } from "../../../services/actions/current-ingredients-actions";
import { resetOrder } from "../../../services/actions/order-action";
import { useNavigate } from "react-router-dom";
import { User } from "../../../services/selectors/user-selector";


function BurgerFullPrice() {
    const ingredientsConstructor = useSelector(
        (store) => store.currentIngredients
    );
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(User)
    const burgerInfill = ingredientsConstructor.other;
    const burgerBun = ingredientsConstructor.bun;
    const [fullPriceModal, setFullPriceModal] = useState(false);

    const handleOpenModal = () => {
        setFullPriceModal(true);
    };

    const handleCloseModal = () => {
        setFullPriceModal(false);
        dispatch(clearCurrentIngredients());
        dispatch(resetOrder());
    };

    const priceOfBurger = useMemo(() => {
        const priceOfBun = burgerBun?.price || 0;
        const priceOfFilling = burgerInfill.reduce(
            (acc, item) => acc + item.price,
            0
        );

        return priceOfBun * 2 + priceOfFilling;
    }, [burgerInfill, burgerBun]);

    const isButtonDisabled = useMemo(() => {
        return burgerInfill.length === 0 && !burgerBun;
    }, [burgerInfill, burgerBun]);

    return (
        <div>
            <div className={`${styles.fullPriceContainer} mt-10`}>
                <div className={`${styles.fullPrice}`}>
                    <span className={"text text_type_digits-medium"}>
                        {priceOfBurger}
                    </span>
                    <CurrencyIcon />
                </div>
                <Button
                    htmlType="button"
                    type="primary"
                    size="large"
                    onClick={() => {
                        if (!user) {
                          navigate("/login");
                        } else {
                          handleOpenModal();
                        }
                      }}
                    disabled={isButtonDisabled}
                >
                    Оформить заказ
                </Button>
            </div>
            {fullPriceModal && (
                <Modal closeModal={handleCloseModal} title={""}>
                    <OrderDetails></OrderDetails>
                </Modal>
            )}
        </div>
    );
}

export default BurgerFullPrice;