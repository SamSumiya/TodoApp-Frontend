import { useState, useEffect } from 'react';
import { postOneTodo } from '../service/todoAppFuncs';

const usePostTodo = (initialDescription = '', initialIsCompleted = false) => {
  const [newTodo, setNewTodo] = useState({});
  const [description, setDescription] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);

  const handleDescriptionChange = () => {
    setDescription(description);
  };

  const handleIsCompletedChange = () => {
    setIsCompleted(!isCompleted);
  };

  useEffect(() => {
    postOneTodo().then((initialDescription, isCompleted) =>
      setNewTodo(initialDescription, isCompleted)
    );
  }, []);

  return { newTodo, handleDescriptionChange, handleIsCompletedChange };
};

export default usePostTodo;
