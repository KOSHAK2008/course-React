import Clouthes from './Clouthes/Clouthes';
import React from "react";
import styles from '../../../App/App.modules.css';

class Wardrobe extends React.Component {
    render() {
        return (
            <>
                <h2 className={styles.classTwo}>Шкаф</h2>
                <Clouthes clouthes={['Одежда']} />
            </>
        )
    }
};

export default Wardrobe;
