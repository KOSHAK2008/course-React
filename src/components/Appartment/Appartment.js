import Room from './Room/Room';
import React from "react";
import PropTypes from 'prop-types'

class Appartment extends React.Component {
  render() {
    return (
      <Room />
    )
  }
};

Appartment.propTypes = {
  Appartment: PropTypes.elementType
}

export default Appartment;