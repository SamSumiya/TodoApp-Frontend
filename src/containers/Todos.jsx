import React from 'react';
import useGetTodos from '../Hooks/useGetTodos';
import ControlsTodos from '../controls/ControlsTodos';
import usePostTodo from '../Hooks/usePostTodos';
import { postOneTodo } from '../service/todoAppFuncs';

const Todos = () => {
  const { todos, loading } = useGetTodos();
  const { title, handleTitleChange } = usePostTodo();

  const onFormSubmit = async (event) => {
    event.preventDefault();
    await postOneTodo(title);
  };

  if (loading)
    return (
      <img src="https://i.redd.it/o6m7b0l6h6pz.gif" alt="A loading spinner" />
    );

  return (
    <>
      <ControlsTodos
        todos={todos}
        title={title}
        onFormSubmit={onFormSubmit}
        handleTitleChange={handleTitleChange}
      />
    </>
  );
};

export default Todos;
