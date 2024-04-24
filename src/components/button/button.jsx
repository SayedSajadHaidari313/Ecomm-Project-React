import React from 'react';
import PropTypes from 'prop-types';

function Button({title, onClick , size = "sm"}) {
    console.log({size});
  return (
    <button onClick={onClick}>{title}</button>
  )
}
Button.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    size: PropTypes.string,

} 
export default Button