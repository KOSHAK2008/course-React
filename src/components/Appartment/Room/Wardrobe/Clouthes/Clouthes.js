import React from "react";
import '../../../../App/App.css';
import PropTypes from 'prop-types';

function Clouthes() {
    let clouthes = ['Одежда', 'Трусы', 'Носки']
    return <div>
        {clouthes}
    </div>

};

Clouthes.propTypes = {
    clouthes: PropTypes.array,
}

export default Clouthes;