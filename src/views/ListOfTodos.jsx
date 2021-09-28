import React from 'react';
import useCheckboxStatus from '../Hooks/useCheckboxStatus';
import usePutTodos from '../Hooks/usePutTodos';
import PropTypes from 'prop-types';
import { deleteOnePost, updateOnePost } from '../service/todoAppFuncs';
// import useDeleteTodos from '../Hooks/useDeleteTodos';

const ListOfTodos = ({
  id,
  title,
  completed,
  updatedTodo,
  handleUpdateTitleFunction,
}) => {
  const { currentStatus, setCurrentStatus, handleCurrentStatus } =
    useCheckboxStatus(completed);

  const onFormSubmit = (event) => {
    event.preventDefault();
    // await handleUpdateTitleFunction(updatedTodo)}
    // await updateOnePost(id, updatedTodo, completed)
    // handleUpdateTitleFunction(updatedTodo)}
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
            onChange={() => setCurrentStatus(!currentStatus)}
          />
          <div></div>
          <label htmlFor="">Update</label>
          <input
            aria-label="user-update-input-field"
            type="text"
            name="edit"
            value={updatedTodo}
            onChange={(event) => handleUpdateTitleFunction(event.target.value)}
          />
        </form>
        <button
          onClick={async () => {
            // await handleUpdateTitleFunction(updatedTodo),
            
              await updateOnePost(id, updatedTodo, currentStatus);
          }}>
          Edit
        </button>

        <button
          onClick={async () => await deleteOnePost(id)}>
          Delete
        </button>
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
