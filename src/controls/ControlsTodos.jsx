import React from 'react';
import PropTypes from 'prop-types';

const ControlsTodos = ({ todos }) => {
  return <div></div>;
};

ControlsTodos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ),
};

export default ControlsTodos;
