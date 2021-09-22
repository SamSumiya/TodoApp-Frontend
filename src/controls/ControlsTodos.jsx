import React from 'react';
import PropTypes from 'prop-types';
import ListOfTodos from '../views/ListOfTodos';
import usePostTodo from '../Hooks/usePostTodo';

const ControlsTodos = ({ todos }) => {

  // const { newTodo, handleDescriptionChange, handleIsCompletedChange } = usePostTodo() 

  return (
    <>
      <h2>My Todo List</h2>
      <form action="">
        <label htmlFor="user-input">Task: </label>
        <input
          type="text"
          name="user-input"
          placeholder="Enter a task"
          id='user-input'
          
        />
        <button> Add </button>
      </form>
      <ol aria-label="list-of-todos">
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <ListOfTodos title={todo.title} completed={todo.completed} />
            </li>
          );
        })}
      </ol>
    </>
  );
};

ControlsTodos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ),
};

export default ControlsTodos;
