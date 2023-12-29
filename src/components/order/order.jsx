import React from "react";
import styles from "../order/order.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { allIngredientsArray } from "../../services/selectors/ingredients-selectors";
import { useSelector } from "react-redux";
import { useMatch } from "react-router-dom";
import PropTypes from "prop-types";

function Order({ order }) {
  const ingredients = useSelector(allIngredientsArray);
  const isProfileOrder = useMatch("/profile/orders");
  const orderIngredients = React.useMemo(() => {
    if (order?.ingredients && Array.isArray(ingredients)) {
      return order.ingredients.map((ingredientId) => {
        return ingredients.find(
          (ingredient) => ingredientId === ingredient._id
        );
      });
    }
    return [];
  }, [order?.ingredients, ingredients]);

  if (orderIngredients.includes(undefined)) {
    return null;
  }

  const OrderSlice = orderIngredients?.slice(6).length;

  const OrderPrice = () => {
    return orderIngredients?.reduce((acc, i) => acc + i.price, 0);
  };

  return (
    <>
      <div className={`${styles.orderCard}`}>
        <div className={`${styles.orderHeader}`}>
          <p className="text text_type_digits-default">{`#${order.number}`}</p>
          <p className="text text_type_main-default text_color_inactive">
            <FormattedDate date={new Date(order.createdAt)} />
          </p>
        </div>

        <div>
          <p className="text text_type_main-medium">{order.name}</p>
          {isProfileOrder && order.status === "done" ? (
            <p className={`${styles.statusDone} text text_type_main-default`}>
              {order.status === "done"
                ? "Выполнен"
                : order.status === "pending"
                ? "Готовится"
                : order.status === "created"
                ? "Создан"
                : null}
            </p>
          ) : (
            <p className="text text_type_main-default">
              {order.status === "done"
                ? "Выполнен"
                : order.status === "pending"
                ? "Готовится"
                : order.status === "created"
                ? "Создан"
                : null}
            </p>
          )}
        </div>

        <div className={`${styles.orderIngredients}`}>
          <div className={`${styles.orderPictures}`}>
            {orderIngredients.map((ingredient, index) => {
              if (index < 6) {
                return (
                  <div className={`${styles.orderImageBox}`} key={index}>
                    <img
                      alt={ingredient.name}
                      src={ingredient.image}
                      className={`${styles.orderPic}`}
                    />
                    {index === 5 && OrderSlice !== 0 && (
                      <div className={`${styles.counter}`}>
                        <p className="text text_type_digits-default">{`+${OrderSlice}`}</p>
                      </div>
                    )}
                  </div>
                );
              }
              return null;
            })}
          </div>
          <div className={`${styles.orderPrice} pb-1 pt-1`}>
            <p className="text text_type_digits-default pr-2 ">
              {OrderPrice()}
            </p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
    </>
  );
}

Order.propTypes = PropTypes.object.isRequired


export default Order;