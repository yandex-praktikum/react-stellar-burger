import React, { useState } from "react";
import style from "./main.module.css";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import Modal from "../modal/Modal.jsx";
import OrderDetails from "../order-details/OrderDetails.jsx";
import IngredientDetails from "../ingredient-details/IngredientDetails.jsx";
import { useDispatch, useSelector } from "react-redux";
import { hideModal } from "../../services/modalSlice";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function Main() {
  const modalState = useSelector((store) => store.modal);

  const dispatch = useDispatch();

  return (
    <main className={style.main}>
      <section className={style.container}>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients />
          <BurgerConstructor />
        </DndProvider>
        {modalState.name === "order" && (
          <Modal title="" onClick={() => dispatch(hideModal())}>
            <OrderDetails />
          </Modal>
        )}
        {modalState.name === "details" && (
          <Modal
            title="Детали ингредиента"
            onClick={() => dispatch(hideModal())}
          >
            <IngredientDetails />
          </Modal>
        )}
      </section>
    </main>
  );
}

export default Main;
