import React from 'react';
import useCheckboxStatus from '../Hooks/useCheckboxStatus';
import usePutTodos from '../Hooks/usePutTodos';
import PropTypes from 'prop-types';
import { deleteOnePost, updateOnePost } from '../service/todoAppFuncs';
import { getOneTodo } from '../service/todoAppFuncs';
// import useDeleteTodos from '../Hooks/useDeleteTodos';

const ListOfTodos = ({
  todo, 
  id,
  title,
  completed,
  // updatedTodo,
  // handleUpdateTitleFunction,
}) => {
  const { currentStatus, setCurrentStatus, handleCurrentStatus } =
    useCheckboxStatus(completed);
  const { updatedTodo, handleUpdateTitleFunction } = usePutTodos();

  const onFormSubmit = async (event) => {
    event.preventDefault(); 
    // handleUpdateTitleFunction(updatedTodo)
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
            value={updatedTodo} // id: 1 => first todo
            onChange={(event) => handleUpdateTitleFunction(event.target.value)}
          />
          <button
            onClick={ () => 
              // handleUpdateTitleFunction(updatedTodo), 
                console.log(todo)
            }
          >
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
