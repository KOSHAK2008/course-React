import React from "react";
import PropTypes from 'prop-types'

function Scarf() {
    return <><h2>scarf is red</h2></>
}

Scarf.propTypes = {
    scarf: PropTypes.oneOf(['blue', 'red'])
}

export default Scarf;