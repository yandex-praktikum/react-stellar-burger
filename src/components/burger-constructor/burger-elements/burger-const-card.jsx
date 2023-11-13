import React from "react";
import styles from "./burger-const-total.module.css";
import {
  CurrencyIcon,
  DeleteIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { removeCurrentIngredient } from "../../../services/actions/current-ingredients-actions";
import { useDrag, useDrop } from "react-dnd";
import { checkString, checklNumber, optionalObject } from "../../../utils/prop-types";
import PropTypes from "prop-types";


export function BurgerConstCard({ moveCard, index, id, item }) {
  const ingredientsConstructor = useSelector(
    (store) => store.currentIngredients
  );
  const burgerInfill = ingredientsConstructor.other;
  const dispatch = useDispatch();

  function deleteCard(item) {
    dispatch(removeCurrentIngredient(item));
  }

  const ref = React.useRef(null);
  const [{ handlerId }, drop] = useDrop({
    accept: "item",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveCard(dragIndex, hoverIndex, burgerInfill);
      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    type: "item",
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <div ref={ref} data-handler-id={handlerId} styles={{ ...styles, opacity }}>
      <li className={`${styles.totalContainer} mt-4 mb-4`}>
        <DragIcon />
        <div className={`${styles.elementTotal} pt-4 pr-6 pb-4 pl-6`}>
          <img src={item.image} alt="" className={`${styles.elementImage}`} />
          <span
            className={`${styles.elementTitle} text text_type_main-default mr-5`}
          >
            {item.name}
          </span>
          <div className={`${styles.containerPrice} mr-4`}>
            <span
              className={`${styles.elementPrice} text text_type_digits-default`}
            >
              {item.price}
            </span>
            <CurrencyIcon />
          </div>
          <DeleteIcon type="primary" onClick={() => deleteCard(item)} />
        </div>
      </li>
    </div>
  );
}

BurgerConstCard.propTypes = {
  moveCard: PropTypes.func.isRequired,
  index: checklNumber,
  id: checkString,
  item: optionalObject,
};