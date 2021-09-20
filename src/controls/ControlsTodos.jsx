import React from 'react';
import PropTypes from 'prop-types';
import ListOfTodos from '../views/ListOfTodos';

const ControlsTodos = ({ todos }) => {
//   console.log(todos);
  return (
    <>
      <ol aria-label="list-of-todos">
        {todos.map((todo) => {
          return <li key={todo.id}>
            <ListOfTodos
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
            />
          </li>;
        })}
      </ol>
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
