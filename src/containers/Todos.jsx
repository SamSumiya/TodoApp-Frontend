import React from 'react';
import useTodos from '../Hooks/useTodos';
import ControlsTodos from '../controls/ControlsTodos';

const Todos = () => {
  const { todos, loading } = useTodos();

  if (loading)
    return (
      <img src="https://i.redd.it/o6m7b0l6h6pz.gif" alt="A loading spinner" />
    );

  return (
    <>
      <ControlsTodos todos={todos} />
    </>
  );
};

export default Todos;
