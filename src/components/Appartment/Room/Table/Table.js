import Pen from './Pen/Pen';
import Monitor from './Monitor/Monitor';
import Mouse from './Mouse/Mouse';
import React from "react";
import styles from '../../../App/App.modules.css';
import PropTypes from 'prop-types'

class Table extends React.Component {
    render() {
        let myMouse = 'Моя Мышка';
        const sumPencil = () => {
            const myPencil = 3;
            const myWifePencil = 5;
            const myChildrenPencil = 7;
            let summ = myPencil + myWifePencil + myChildrenPencil;

            return (
                summ
            );
        }
        return (
            <>
                <h2 className={styles.classTwo}>Стол</h2>
                <Pen myPencil={`This is my Pencil`} mySum={sumPencil()}>
                    <h4>Work Children</h4>
                </Pen>
                <Monitor myMonic={() => { }} />
                <Mouse myProps={<h4>{myMouse}</h4>} />
            </>
        )
    }
};

Table.propTypes = {
    style: PropTypes.shape({
        color: PropTypes.string,
        fontSize: PropTypes.number
    })
}

export default Table;
