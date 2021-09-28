import { useState, useEffect } from 'react';
import { getTodosFunc } from '../service/todoAppFuncs.js';

const useGetTodos = () => {
  const [todos, setTodos] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTodosFunc()
      .then(setTodos)
      .finally(() => setLoading(false));
  }, [todos]);

  return { todos, loading, setTodos };
};

export default useGetTodos;
