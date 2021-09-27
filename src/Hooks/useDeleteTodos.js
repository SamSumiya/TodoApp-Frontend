import React, { useEffect } from 'react'
import { deleteOnePost } from '../service/todoAppFuncs'

const useDeleteTodos = () => {

  useEffect(() => {
    deleteOnePost()
      .then(() => { Message: 'Todo item was deleted' })
  }, [])

  return (
    <div>
      
    </div>
  )
}

export default useDeleteTodos
