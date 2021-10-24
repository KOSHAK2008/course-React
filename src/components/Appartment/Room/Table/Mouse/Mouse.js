import React from "react";
import styles from '../Table.module.scss';
import PropTypes from 'prop-types'

function Mouse(props) {
    let mouse = 'Мышка';
    return (
        <>
            <h3 className={styles.classFour}>{mouse}</h3>
            {props.myProps}
        </>
    )
};

Mouse.propTypes = {
    myProps: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string,
        PropTypes.number,
    ])
}

export default Mouse;