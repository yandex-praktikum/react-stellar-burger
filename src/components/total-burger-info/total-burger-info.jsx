import React from "react";
import styles from "../total-burger-info/total-burger-info.module.css";
import { useSelector } from "react-redux";

function TotalBurgerInfo() {
    const { orders, total, totalToday } = useSelector((store) => store.feed);
    const CompletedOrders = orders.filter((i) => i.status === "done");
    const ProcessingOrders = orders.filter((i) => i.status !== "done");
    console.log(CompletedOrders);
    console.log(ProcessingOrders);

    return (
        <>
            <div className={`${styles.Status}`}>
                <section>
                    <p className="text text_type_main-medium pb-6">Приготовлены:</p>
                    <ul className={`${styles.ListColor}`}>
                        {CompletedOrders.map((order, index) => {
                            if (index < 50) {
                                return (
                                    <li className={`${styles.Digits}`} key={order._id}>
                                        <p
                                            key={order._id}
                                            className="text text_type_digits-default"
                                        >
                                            {order.number}
                                        </p>
                                    </li>
                                );
                            }
                        })}
                    </ul>
                </section>

                <section>
                    <p className="text text_type_main-medium pb-6">В работе:</p>
                    <ul className={`${styles.List}`}>
                        {ProcessingOrders.map((order, index) => {
                            if (index < 30) {
                                return (
                                    <li className={`${styles.Digits}`} key={order._id}>
                                        <p
                                            key={order._id}
                                            className="text text_type_digits-default"
                                        >
                                            {order.number}
                                        </p>
                                    </li>
                                );
                            }
                        })}
                    </ul>
                </section>
            </div>
            <p className="text text_type_main-medium">Выполнено за все время:</p>
            <p className="text text_type_digits-large pb-15">{total}</p>
            <p className="text text_type_main-medium">Выполнено за сегодня:</p>
            <p className="text text_type_digits-large pb-15">{totalToday}</p>
        </>
    );
}

export default TotalBurgerInfo;