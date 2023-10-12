import React from 'react'
import { ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-element.module.css';


export default function BurgerElements({ingredients}) {
    return ingredients.map(({ _id, name, price, image }) => (
        <div key={_id} className={styles.elements}>
            <DragIcon type="primary" />
            <ConstructorElement text={name} price={price} thumbnail={image} />
        </div>
    ));
}

