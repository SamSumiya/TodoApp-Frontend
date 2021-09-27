import React from 'react';
import useGetTodos from '../Hooks/useGetTodos';
import ControlsTodos from '../controls/ControlsTodos';
import usePostTodo from '../Hooks/usePostTodos';
import { postOneTodo } from '../service/todoAppFuncs';
import { getTodosFunc } from '../service/todoAppFuncs';
import usePutTodos from '../Hooks/usePutTodos';

const Todos = () => {
  const { todos, loading, setTodos } = useGetTodos();
  const { title, handleTitleChange } = usePostTodo();
  const { updatedTodo, handleUpdateTitleFunction } = usePutTodos();

  const onFormSubmit = async (event) => {
    event.preventDefault();
    await postOneTodo(title);
    // setTodos(updatedTodoList);
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
        updatedTodo={updatedTodo}
        onFormSubmit={onFormSubmit}
        handleTitleChange={handleTitleChange}
        handleUpdateTitleFunction={handleUpdateTitleFunction}
      />
    </>
  );
};

export default Todos;
