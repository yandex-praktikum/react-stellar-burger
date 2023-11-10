import styles from "./app.module.css";
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import React, { useState, useCallback } from "react";
import LoadIngredient from "./components/load-ingredient";
import { SelectedComponentContext } from "../../services/burger-consctructor-context";
import { ShowModalContext } from "../../services/modal-context";
import { v4 as uuidv4 } from 'uuid';

function App() {

    const initialState = { bun: {}, other: [] };
    
    const showModalIniState = {
        visible: false,
        type: "",
        ingredient: {},
        orderNumber: "",
    };

    function reducerSelectedComponents(state, action) {
        switch (action.type) {
            case "defBun":
                return {
                    ...state,
                    bun: action.payload,
                };
                case "addOther":
                  const newIngredient = {
                    ...action.payload,
                    key: uuidv4()
                  };
                  return {
                    ...state,
                    other: [...state.other, newIngredient]
                  };
            case "resetOnlyOther":
                return {
                    ...state,
                    other: [],
                };
            default:
                throw new Error(`Wrong type of action: ${action.type}`);
        }
    }

    const [ingredients, setIngredients] = useState([]);

    // Напишем функцию reducer

    function reducerShowModal(state, action) {
        switch (action.type) {
            case "close":
                return {
                    visible: false,
                    type: "",
                    ingredient: {},
                    orderNumber: "",
                };
            case "open":
                return {
                    visible: true,
                    type: action.payload.type,
                    ingredient: action.payload.ingredient,
                    orderNumber: (action.payload.orderNumber ??= ""),
                };
            default:
                throw new Error(`Wrong type of action: ${action.type}`);
        }
    }

    // Заменяем useState на useReducer
    const [ingredientsConstructor, ingredientsConstructorDispatcher] = React.useReducer(reducerSelectedComponents, initialState, undefined);
    const [showModal, showModalDispatcher] = React.useReducer(reducerShowModal, showModalIniState, undefined);
    const [error, setError] = useState(null);

    const handleDataLoad = useCallback((data) => {
        setIngredients(data);
    }, []);

    const handleError = useCallback((errorMessage) => {
        setError(errorMessage);
    }, []);

    return (
        <div className={styles.app}>
            <AppHeader />
            <SelectedComponentContext.Provider value={{ ingredientsConstructor, ingredientsConstructorDispatcher }}>
                <ShowModalContext.Provider value={{ showModal, showModalDispatcher }}>
                    <div className={styles.main}>
                        <LoadIngredient onDataLoaded={handleDataLoad} onError={handleError} />
                        <div>
                            {error && <p>{error}</p>}
                            {!error && ingredients.length === 0 && <p>Ингредиенты не доступны</p>}
                            {ingredients.length > 0 && <BurgerIngredients ingredients={ingredients} />}
                        </div>
                        <div>
                            <BurgerConstructor ingredients={ingredients} />
                        </div>
                    </div>
                </ShowModalContext.Provider>
            </SelectedComponentContext.Provider>
        </div>
    );
}

export default App;
