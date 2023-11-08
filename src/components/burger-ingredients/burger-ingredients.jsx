import React, { useState } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredients.module.css";
import IngredientCards from "./ingredient-cards/ingredient-cards";
import { useModal } from "../../hooks/use-modal";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";

function BurgerIngredients({ ingredients }) {
  const [active, setActive] = useState("bun");
  const [currentElement, setCurrentElement] = useState(null);
  const [isModalOpen, openModal, closeModal] = useModal();

  const onIngredientClick = (el) => {
    setCurrentElement(el);
    openModal();
  };

  const filter = (type) => ingredients.filter((el) => el.type === type);
  const onTabClick = (tab) => {
    setActive(tab);
    const ref = document.getElementById(tab);
    if (ref) {
      ref.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className={styles.section}>
        <h1 className="text text_type_main-large pt-10 pb-5">Соберите бургер</h1>
        <div className={`${styles["burger-menu"]} pb-10`}>
          <Tab active={active === "bun"} value="bun" onClick={onTabClick}>
            Булки
          </Tab>
          <Tab active={active === "sauce"} value="sauce" onClick={onTabClick}>
            Соусы
          </Tab>
          <Tab active={active === "main"} value="main" onClick={onTabClick}>
            Начинки
          </Tab>
        </div>
        <div className={`${styles["burger-card"]} custom-scroll`}>
          {["bun", "sauce", "main"].map((tab) => (
            <div key={tab} id={tab}>
              <ul className={`${styles["card-list"]} pl-4 pr-4`}>
                <IngredientCards
                  title={tab === "bun" ? "Булки" : tab === "sauce" ? "Соусы" : "Начинка"}
                  key={tab}
                  cardsArr={filter(tab)}
                  onClick={onIngredientClick}
                />
              </ul>
            </div>
          ))}
        </div>
      </section>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <IngredientDetails el={currentElement} />
        </Modal>
      )}
    </>
  );
}

export default BurgerIngredients;
