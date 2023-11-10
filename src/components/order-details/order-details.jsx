import React,{ useEffect } from "react";
import styles from "./order-details.module.css";
import done from "../../images/done.svg"
import { SelectedComponentContext } from "../../services/burger-consctructor-context";

const OrderDetails = () => {
    const [order, setOrder] = React.useState(null);
    const [error, setError] = React.useState(null);
    const { ingredientsConstructor }= React.useContext(SelectedComponentContext);
    function getListIdIngredients() {
        const idBun = [ingredientsConstructor.bun._id];
        const idOther = ingredientsConstructor.other.map((item) => item._id);
        const ingrIDs = idBun.concat(idOther, idBun)
        return ingrIDs
    }


    useEffect(() => {
        const componentsID = getListIdIngredients()
        const postData = async () => {
          try {
            const response = await fetch(
              "https://norma.nomoreparties.space/api/orders",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  ingredients: componentsID,
                }),
              }
            );
    
            if (!response.ok) {
              throw new Error("Произошла ошибка при отправке заказа");
            }
    
            const data = await response.json();
            setOrder(data.order.number);
          } catch (error) {
            setError(error.message);
          }
        };

        postData();
    }, []);

    if (error) {
        return (
          <p className={`${styles.error} text text_type_main-default`}>
            {error}
          </p>
        );
    }

    return (
    <section className={`${styles.orderDetails}`}>
      {order ? (
        <>
          <h2 className={`${styles.orderTitle} text text_type_digits-large pt-10`}>
            {order}
          </h2>
          <p className={`${styles.orderNumber} text text_type_main-medium pt-8 pb-15`}>
            идентификатор заказа
          </p>
          <img className={`${styles.image}`} src={done} alt="WELL DONE!!!" />
          <p className={`${styles.orderStart} text text_type_main-default pt-15 pb-2`}>
            Ваш заказ начали готовить
          </p>
          <p className={`${styles.orderWait} text text_type_main-default pb-30`}>
            Дождитесь готовности на орбитальной станции
          </p>
        </>
      ) : (
        <p className={`text text_type_main-default`}>Отправка заказа...</p>
      )}
    </section>
  );
};

export default OrderDetails