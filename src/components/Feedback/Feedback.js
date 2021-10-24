import React, { useContext } from "react";
import styles from "./Feedback.module.scss";
import PropTypes from 'prop-types';
import { ThemeContext } from '../utils/ThemeContext'

export function Feedback({ name, feedback }) {
    const theme = useContext(ThemeContext)

    return (
        <div className={styles.boxFeedback}>
            {name} :: {feedback} :{theme}
        </div>
    )
}

Feedback.propTypes = {
    name: PropTypes.string.isRequired,
    feedback: PropTypes.string.isRequired,
}

export default Feedback;