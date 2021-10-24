import React from "react";
import styles from '../../../App/App.modules.css';
import PropTypes from 'prop-types';

function Couch() {
    if ({ bool: 'true' }) {
        return <h2 className={styles.classTwo}>Диван</h2>
    } else { <h2>'не верно'</h2> }
};

Couch.propTypes = {
    Couch: PropTypes.bool

}

export default Couch;
