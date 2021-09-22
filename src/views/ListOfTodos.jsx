import React from 'react';
import useCheckboxStatus from '../Hooks/useCheckboxStatus';
import usePostTodo from '../Hooks/usePostTodos';
import PropTypes from 'prop-types';

const ListOfTodos = ({ title, completed }) => {
  const { currentStatus, handleCurrentStatus } = useCheckboxStatus(completed);


  return (
    <div>
      <div>
        Task: {title}
        <input
          aria-label="user-input-field"
          type="checkbox"
          name="todo"
          checked={currentStatus}
          value={currentStatus}
          onChange={handleCurrentStatus}
        />
      </div>
    </div>
  );
};

export default ListOfTodos;

ListOfTodos.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};
