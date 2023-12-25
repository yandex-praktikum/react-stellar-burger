import styles from "../components/app/app.module.css";
import BurgerIngredients from "../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../components/burger-constructor/burger-constructor";
import { useDispatch, useSelector } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { addCurrentBun, addCurrentIngredient } from "../services/actions/current-ingredients-actions";

export function Home() {
    const dispatch = useDispatch();

      const handleDrop = (item) => {  
        if (item.type === "bun") {
          dispatch(addCurrentBun(item));
        } else {
          dispatch(addCurrentIngredient(item));
        }
      };

      const { isLoading, hasError } = useSelector(
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
    <main className={styles.main}>
          <DndProvider backend={HTML5Backend}>
              <BurgerIngredients />
              <BurgerConstructor onDropHandler={handleDrop} />
          </DndProvider>
        </main>
)
}