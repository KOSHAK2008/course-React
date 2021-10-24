import React from "react";
import './Monitor.scss';
import PropTypes from 'prop-types'

class Monitor extends React.Component {
    render() {
        function myMonic(one, two) {
            return `${one + two} мониторов`
        }
        return (
            <h3 className='classThree'>{myMonic(5, 6)}</h3>
        )
    }
};

Monitor.propTypes = {
    myMonic: PropTypes.func
}

export default Monitor;