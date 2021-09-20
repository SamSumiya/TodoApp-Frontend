import React from 'react'
import useCheckboxStatus from '../Hooks/useCheckboxStatus';

const listOfTodos = ({ title, completed }) => {

    const { currentStatus, handleCurrentStatus } = useCheckboxStatus(completed);

    return (
      <div>
        <div>
          Title: {title}
          <input
            type="checkbox"
            name="todo"
            checked={currentStatus}
            onChange={handleCurrentStatus}
          />
        </div>
      </div>
    );
}

export default listOfTodos
