import React from 'react';
import styles from './burger-constructor.module.css';
import PropTypes from 'prop-types';
import BurgerElements from './burger-elements/burger-elements';
import { ConstructorElement, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import ingredientPropType from '../../utils/prop-types';
import { useModal } from '../../hooks/use-modal';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';

function BurgerConstructor({ burgerArr }) {
  const [isModalOpen, openModal, closeModal] = useModal();
  const { bun, elmArr, totalPrice } = burgerArr.reduce(
    (acc, { type, ...props }) => {
      if (type === 'bun') {
        acc.bun = props;
        acc.totalPrice += props.price * 2;
      } else {
        acc.elmArr.push(props);
        acc.totalPrice += props.price;
      }

      return acc;
    },
    { bun: null, elmArr: [], totalPrice: 0 }
  );

  return (
    <>
      <section className={`${styles.section} mt-25`}>
        <div className={`${styles['burger-bun']} pl-8`}>
          {bun && bun.name && (
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${bun.name} (верх)`}
              price={bun.price}
              thumbnail={bun.image}
            />
          )}
        </div>
        <div className={`${styles.list} custom-scroll pt-4 pl-4`}>
          <BurgerElements ingredients={elmArr} />
        </div>
        <div className={`${styles['burger-bun']} pl-6 pr-3 pt-4`}>
          {bun && bun.name && (
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${bun.name} (низ)`}
              price={bun.price}
              thumbnail={bun.image}
            />
          )}
        </div>
        <div className={`${styles.order} mr-4 mt-10`}>
          <div className={styles.total}>
            <span className="text text_type_digits-medium">{totalPrice}</span>
            <CurrencyIcon type="primary" />
          </div>
          <Button htmlType="button" type="primary" size="large" onClick={openModal}>
            Оформить заказ
          </Button>
        </div>
      </section>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <OrderDetails />
        </Modal>
      )}
    </>
  );
}

BurgerConstructor.propTypes = {
  burgerArr: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired,
};

export default BurgerConstructor;
