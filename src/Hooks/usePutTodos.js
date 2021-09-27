import { useState } from 'react'

const usePutTodos = () => {
  const [updatedTodo, setUpdateTodo] = useState('')
 
  const handleUpdateTitleFunction = (userInput) => {
    setUpdateTodo(userInput);
  };
  
  return { updatedTodo, handleUpdateTitleFunction };
}

export default usePutTodos

