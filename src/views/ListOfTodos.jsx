import React from 'react';
import useCheckboxStatus from '../Hooks/useCheckboxStatus';
import usePutTodos from '../Hooks/usePutTodos';
import PropTypes from 'prop-types';
import { deleteOnePost, updateOnePost } from '../service/todoAppFuncs';

const ListOfTodos = ({
  todo, 
  id,
  title,
  completed,
}) => {
  const { currentStatus, setCurrentStatus } = useCheckboxStatus(completed);
  const { updatedTodo, handleUpdateTitleFunction } = usePutTodos();

  const onFormSubmit = async (event) => {
    event.preventDefault(); 
    await updateOnePost(id, updatedTodo, currentStatus); 
  };


  return (
    <div>
      <div>
        Task: {title}
        <form onSubmit={onFormSubmit}>
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
          <button>
            Edit
          </button>
        </form>
        <button onClick={async () => await deleteOnePost(id)}>Delete</button>
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
