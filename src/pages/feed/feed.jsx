import React from "react";
import styles from "../feed/feed.module.css";
import TotalBurgerInfo from "../../components/total-burger-info/total-burger-info";
import { Connect, Disconnect } from "../../services/actions/feed-actions";
import Order from "../../components/order/order";
import { useLocation, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function Feed() {
  const dispatch = useDispatch();
  const location = useLocation();
  const ALL_ORDERS_URL = "wss://norma.nomoreparties.space/orders/all";

  useEffect(() => {
    dispatch(Connect(ALL_ORDERS_URL));
    return () => {
      dispatch(Disconnect(ALL_ORDERS_URL));
    };
  }, [dispatch]);

  const { isLoading, Error, orders } = useSelector((store) => store.feed);

  return (
    <div className={`${styles.feedContainer}`}>
      <h1 className={`${styles.feedHeader} text text_type_main-large pb-5`}>
        Лента заказов
      </h1>
      <main className={`${styles.feedMain} `}>
        <section className={`${styles.feedOrder} pb-10 custom-scroll`}>
          {isLoading && "Загрузка..."}
          {Error && "Произошла ошибка"}
          {!isLoading &&
            !Error &&
            orders !== null &&
            orders.map((order) => (
              <Link
                className={styles.feedLink}
                key={order.number}
                to={`/feed/${order.number}`}
                state={{ background: location }}
              >
                <Order key={order._id} order={order} />
              </Link>
            ))}
        </section>

        <section className={`${styles.feedTotal} pb-10`}>
          {isLoading && "Загрузка..."}
          {Error && "Произошла ошибка"}
          {!isLoading && !Error && orders !== null && <TotalBurgerInfo />}
        </section>
      </main>
    </div>
  );
}

export default Feed;