import styles from "./app.module.css";
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBurgerIngredients } from "../../services/actions/ingredient-actions";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend';
import { addCurrentBun, addCurrentIngredient } from '../../services/actions/current-ingredients-actions'

function App() {

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getBurgerIngredients());
    }, [dispatch]);

    const handleDrop = (item) => {
        if (item.type === "bun") {
            dispatch(addCurrentBun(item))
        } else {
            dispatch(addCurrentIngredient(item))
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
        return (
            <div className={styles.app}>
                <AppHeader />
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
            </div>
        );
    }
}

export default App;