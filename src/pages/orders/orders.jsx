import React, { useEffect } from "react";
import styles from "./orders.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import { connect, disconnect } from "../../services/actions/profile-feed-action";
import Order from "../../components/order/order";

export function Orders() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { isLoading, Error, orders } = useSelector(
    (store) => store.profileFeed
  );

  const token = localStorage.getItem("accessToken");
  const tokenSplit = token.split("Bearer ")[1];
  const PROFILEFEED_ORDERS_URL = `wss://norma.nomoreparties.space/orders?token=${tokenSplit}`;

  useEffect(() => {
    dispatch(connect(`${PROFILEFEED_ORDERS_URL}`));
    return () => {
      dispatch(disconnect(PROFILEFEED_ORDERS_URL));
    };
  }, [dispatch, PROFILEFEED_ORDERS_URL]);

  return (
    <div className={`${styles.PFContainer} custom-scroll`}>
      {isLoading && "Загрузка..."}
      {Error && "Произошла ошибка"}
      {!isLoading &&
        !Error &&
        orders !== null &&
        [...orders].reverse().map((order) => (
          <Link
            className={`${styles.PFLink}`}
            key={order.number}
            to={`/profile/orders/${order.number}`}
            state={{ background: location }}
          >
            <Order key={order._id} order={order} />
          </Link>
        ))}
    </div>
  );
}

export default Orders;