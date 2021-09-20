const URL = 'https://jsonplaceholder.typicode.com/todos';

export const getTodosFunc = () => {    
  return fetch(URL)
    .then((response) => response.json())
    .then(todos => todos.map(todo => ({
          id: todo.id, 
          title: todo.title, 
          completed: todo.completed,
      })));
};

