import React from 'react'

const listOfTodos = ({ id, title, completed }) => {
    console.log(id, title, completed);
    return (
        <div>
            <div>Title: {title}
                <input type="checkbox" checked={completed}/>
            </div>
        </div>
    )
}

export default listOfTodos
