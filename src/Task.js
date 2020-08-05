import React from 'react';

const Task = (props) => {
    return (
      <li>
          {/* <p>{props.id}</p> */}
          <p>{props.name}</p>
      </li>
    )
  };

  export default Task;