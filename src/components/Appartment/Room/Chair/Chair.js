import React from "react";
import styles from '../../../App/App.modules.css';
import Scarf from './Scarf'
import PropTypes from 'prop-types'

class Chair extends React.Component {
    render() {
        return (<>
            <h2 className={styles.classTwo}>Стул</h2>
            <Scarf scarf={'red'} />
        </>
        )
    }
};
Chair.propTypes = {
    Chair: PropTypes.node
}

export default Chair;