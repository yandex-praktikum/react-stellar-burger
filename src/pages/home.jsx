import React from "react";
import styles from "../components/app/app.module.css";
import BurgerIngredients from "../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../components/burger-constructor/burger-constructor";
import { useDispatch, useSelector } from "react-redux";
import { getBurgerIngredients } from "../services/actions/ingredient-actions";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { addCurrentBun, addCurrentIngredient } from "../services/actions/current-ingredients-actions";
import { checkUserAuth } from "../services/actions/user-actions";

export function Home() {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getBurgerIngredients());
        dispatch(checkUserAuth())
      }, [dispatch]);

      const handleDrop = (item) => {
        if (item.type === "bun") {
          dispatch(addCurrentBun(item));
        } else {
          dispatch(addCurrentIngredient(item));
        }
      };

      const { isLoading, ingredients, hasError } = useSelector(
        (store) => store.allIngredients
      );

      if (isLoading) {
        return <div className={`text text_type_main-default`}>Загрузка...</div>;
      } else {
        if (hasError) {
          return (
            <div className={`text text_type_main-default`}>Произошла ошибка</div>
          );
        }
}
return (
    <div className={styles.main}>
          <DndProvider backend={HTML5Backend}>
            <div>
              <BurgerIngredients ingredients={ingredients} />
            </div>
            <div>
              <BurgerConstructor onDropHandler={handleDrop} />
            </div>
          </DndProvider>
        </div>
)
}