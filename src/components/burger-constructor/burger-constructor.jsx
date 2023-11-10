import React from "react";
import styles from './burger-constructor.module.css';
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerConstTotal from "./burger-elements/burger-const-total";
import BurgerFullPrice from "./burger-elements/burger-full-price";
import { ingredientPropType } from "../../utils/prop-types";
import { SelectedComponentContext } from "../../services/burger-consctructor-context";


const BurgerConstructor = () => {

    const {ingredientsConstructor} = React.useContext(SelectedComponentContext);
    const burgerInfill = ingredientsConstructor.other;
    const burgerBun = ingredientsConstructor.bun;
    console.log(burgerBun);
    const nameBun = burgerBun.name;
    const imageBun = burgerBun.image;
    const priceBun = burgerBun.price;


    return (
         <section className={`${styles.mainContainer} custom-scroll`}>
            <div className={styles.constContainer}>
               {(Object.keys(burgerBun).length !== 0) && <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={`${nameBun} (верх)`}
                    price={priceBun}
                    thumbnail={imageBun}
                    
                />}
            </div>
                 {(burgerInfill.length > 0) && <BurgerConstTotal burgerInfill={burgerInfill} />}
             <div className={styles.constContainer}>
             {(Object.keys(burgerBun).length !== 0) && <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={`${nameBun} (низ)`}
                    price={priceBun}
                    thumbnail={imageBun}
                    
                />}
                 <BurgerFullPrice />
             </div>
        </section>

    )
}

BurgerConstructor.propTypes = ingredientPropType
  
BurgerConstructor.defaultProps = {
    ingredients: [],
  };

export default BurgerConstructor