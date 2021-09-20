import { useState, useEffect } from 'react'; 
import { getTodosFunc } from '../service/todoAppFuncs.js';  

const useTodos = () => {

    const [todos, setTodos] = useState(null)
    const [loading, setLoading] = useState(true)
   
    useEffect(() => {
        getTodosFunc()
            .then(setTodos)
            .finally(() => setLoading(false));
    }, [])

    return (
        {todos, loading}
    )
}

export default useTodos
