import React, { useState } from 'react';
import styles from './burger-constructor.module.css';
import PropTypes from 'prop-types';
import BurgerElements from './burger-elements/burger-elements';
import { ConstructorElement, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import ingredientPropType from '../../utils/prop-types';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';

function BurgerConstructor({ burgerArr }) {

  const [modalOpen, setModalOpen] = useState(false);

  const { Bun, ElmArr, totalPrice } = burgerArr.reduce(
    (acc, { type, ...props }) => {
      if (type === 'bun') {
        acc.Bun = props;
        acc.totalPrice += props.price * 2;
      } else {
        acc.ElmArr.push(props);
        acc.totalPrice += props.price;
      }

      return acc;
    },
    { Bun: null, ElmArr: [], totalPrice: 0 }
  );

  const handleModalOpen = () => {
    setModalOpen(true);
  }

  return (
    <section className={`${styles.section} mt-25`}>
     
        <div className={`${styles['burger-bun']} pl-8`}>
          {Bun && Bun.name && (
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${Bun.name} (верх)`}
              price={Bun.price}
              thumbnail={Bun.image}
            />
          )}
        </div>
        <div className={`${styles.list} custom-scroll pt-4 pl-4`}>
          <BurgerElements ingredients = {ElmArr} />
      </div>
        <div className={`${styles['burger-bun']} pl-6 pr-3 pt-4`}>
          {Bun && Bun.name && (
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${Bun.name} (низ)`}
              price={Bun.price}
              thumbnail={Bun.image}
            />
          )}
        </div>
      <div className={`${styles.order} mr-4 mt-10`}>
        <div className={styles.total}>
          <span className="text text_type_digits-medium">{totalPrice}</span>
          <CurrencyIcon type="primary" />
        </div>
        {modalOpen && (
          <Modal onClose={() => setModalOpen(false)}>
            <OrderDetails />
          </Modal>
        )}
        <Button htmlType="button" type="primary" size="large" onClick={handleModalOpen}>
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}

BurgerConstructor.propTypes = {
  burgerArr: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired,
};

export default BurgerConstructor;