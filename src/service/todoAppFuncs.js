// const URL = 'https://jsonplaceholder.typicode.com/posts?userId=1';
const URL = 'http://localhost:7890/api/v1/todos';

export const getTodosFunc = () => {
  return fetch(URL)
    .then((response) => response.json())
    .then((todos) =>
      todos.map((todo) => ({
        id: todo.id,
        title: todo.description,
        completed: todo.isCompleted,
      }))
    );
};

export const postOneTodo = (description, isCompeleted) => {
  return fetch(URL, {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json', 
    }, 
    body: JSON.stringify({description, isCompeleted})
  }) 
    .then(res => res.json()) 
    .catch(err => console.log(err))
}
