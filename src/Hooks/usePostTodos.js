import { useState } from 'react';

const usePostTodo = () => {
  const [title, setTitle] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  return { title, handleTitleChange };
};

export default usePostTodo;
