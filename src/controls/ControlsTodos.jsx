import React from 'react';
import PropTypes from 'prop-types';
import listOfTodos from '../views/listOfTodos';

const ControlsTodos = ({ todos }) => {
//   console.log(todos);
  return (
    <>
      <ul aria-label="list-of-todos">
        {todos.map((todo) => {
          return <li key={todo.id}>
            <listOfTodos
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
            />
          </li>;
        })}
      </ul>
    </>
  );
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
