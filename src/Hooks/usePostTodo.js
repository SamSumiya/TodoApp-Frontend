import { useState, useEffect } from 'react';
import { postOneTodo } from '../service/todoAppFuncs';

const usePostTodo = (initialTitle = '', initialIsCompleted = false) => {
  const [newTodo, setNewTodo] = useState({});
  const [title, setDescription] = useState(initialTitle);
  const [isCompleted, setIsCompleted] = useState(initialIsCompleted);

  useEffect(() => {
    postOneTodo().then((title, isCompleted) => setNewTodo(title, isCompleted));
  }, []);

  const handleDescriptionChange = () => {
    setDescription(title);
  };

  const handleIsCompletedChange = () => {
    setIsCompleted(!isCompleted);
  };

  

  return { newTodo, handleDescriptionChange, handleIsCompletedChange };
};

export default usePostTodo;
