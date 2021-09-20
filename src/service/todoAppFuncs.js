// const URL = 'https://jsonplaceholder.typicode.com/posts?userId=1';
const URL = 'http://localhost:7890/api/v1/todos';

export const getTodosFunc = () => {    
  return fetch(URL)
    .then((response) => response.json())
    .then(
      (todos) => todos.map(
              (todo) => ({
          id: todo.id,
          title: todo.description,
          completed: todo.isCompleted,
        }))
    );
};

