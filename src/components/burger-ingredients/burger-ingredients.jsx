import React from "react";
import IngredientCards from "./ingredient-cards/ingredient-cards";


function BurgerIngredients() {
    return (
      <section>
        <IngredientCards />
      </section>
    );
}

export default React.memo(BurgerIngredients)