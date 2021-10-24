import React from "react";
import '../Monitor/Monitor.scss';
import PropTypes from 'prop-types';
function Pen({ myPencil, mySum, children }) {
    return (
        <>
            {myPencil}
            {mySum}
            <div>
                {children}
            </div>
        </>
    )
}

Pen.propTypes = {
    mySum: PropTypes.number
}

export default Pen;