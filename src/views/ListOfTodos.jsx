import React from 'react';
import useCheckboxStatus from '../Hooks/useCheckboxStatus';
import usePutTodos from '../Hooks/usePutTodos';
import PropTypes from 'prop-types';
import { updateOnePost } from '../service/todoAppFuncs';

const ListOfTodos = ({
  id,
  title,
  completed,
  updatedTodo,
  handleUpdateTitleFunction,
}) => {
  const { currentStatus, setCurrentStatus, handleCurrentStatus } =
    useCheckboxStatus(completed);

  const onFormSubmit = async(event) => {
    event.preventDefault();
    await updateOnePost(id, updatedTodo, !completed)
  };

  return (
    <div>
      <div>
        Task: {title}
        <form action="" onSubmit={onFormSubmit}>
          <input
            aria-label="user-input-field"
            type="checkbox"
            name="todo"
            checked={currentStatus}
            value={currentStatus}
            onChange={(event) => setCurrentStatus(event.target.value)}
          />
          <div></div>
          <label htmlFor="">Update</label>
          <input
            aria-label="user-update-input-field"
            type="text"
            name="edit"
            onChange={(event) =>
              handleUpdateTitleFunction( event.target.value,)
            }
          />
          <button onClick={handleUpdateTitleFunction(updatedTodo)}>
            Edit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ListOfTodos;

ListOfTodos.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};
