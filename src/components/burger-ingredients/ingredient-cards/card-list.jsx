import React from "react";
import styles from "./card-list.module.css";
import Card from "../ingredient-card/Card";
import PropTypes from "prop-types";
import { checkString } from "../../../utils/prop-types";

const CardList = React.forwardRef(
    ({ data, id, handleOpenModal }, ref) => {
        return (
            <div className={styles.typePart}>
                <p ref={ref} id={id} className="text text_type_main-medium"></p>
                <ul className={`${styles.cardList}`}>
                    {data.map((item) => (
                        <Card
                            item={item}
                            key={item._id}
                            onClick={() => handleOpenModal(item)}
                        />
                    ))}
                </ul>
            </div>
        );
    }
);

CardList.propTypes = {
    data: PropTypes.array.isRequired,
    handleOpenModal: PropTypes.func.isRequired,
    id: checkString,
};

export default CardList;