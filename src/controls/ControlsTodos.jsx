import React from 'react';
import PropTypes from 'prop-types';
import ListOfTodos from '../views/ListOfTodos';

const ControlsTodos = ({
  todos,
  title,
  onFormSubmit,
  handleTitleChange,
}) => {
  return (
    <>
      <h2>My Todo List</h2>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="user-input">Task: </label>
        <input
          type="text"
          name="user-input"
          placeholder="Enter a task"
          id="user-input"
          value={title}
          onChange={(event) => handleTitleChange(event)}
        />
        <button type="submit"> Add </button>
      </form>
      <ol aria-label="list-of-todos">
        {todos?.sort((a, b) => a.id - b.id).map((todo) => {
          return (
            <li key={todo.id}>
              <ListOfTodos
                todo={todo}
                id={todo.id}
                title={todo.title}
                completed={todo.completed}
              />
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
      onFormSubmit: PropTypes.func, 
      completed: PropTypes.bool.isRequired,
    })
  ),
};

export default ControlsTodos;
