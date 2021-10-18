// const URL = 'https://jsonplaceholder.typicode.com/posts?userId=1';
// const URL = 'http://localhost:7890/api/v1/todos';
// const URL = 'https://elastic-wozniak-f39042.netlify.app/'
// const URL = process.env.REACT_APP_HEROKU_URI;
const URL = 'https://full-stack-todos.herokuapp.com/api/v1/todos';

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

export const postOneTodo = (description) => {
  return fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ description }),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const updateOnePost = (id, description, isCompleted) => {
  return fetch(`${URL}/${id}`, {
    method: 'PUT', 
    headers: {
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify({ id, description, isCompleted })
  })
    .then(res => res.json())
    .catch(err => console.log(err))
};


export const deleteOnePost = (id) => {
  return fetch(`${URL}/${id}`, {
    method: 'DELETE',
  });
}