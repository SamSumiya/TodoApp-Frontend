import { useState, useEffect } from 'react';
import { postOneTodo } from '../service/todoAppFuncs';

const usePostTodo = () => {
  // const [newTodo, setNewTodo] = useState({});
  const [title, setTitle] = useState('');

  // useEffect(() => {
  //   postOneTodo()
  //     .then((title, isCompleted) => setNewTodo(title, isCompleted))
  //     .catch(err => console.error(err.message))
  // }, []);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  
  return { title, handleTitleChange };
};

export default usePostTodo;
