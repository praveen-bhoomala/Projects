import React from 'react';

const TodoList = ({ listtodo,deleteHandler}) => {
  return (
    <div>
      {listtodo.map((item, index) => (
        <div key={index}>
          <h5>{item} &nbsp; <button onClick={() => deleteHandler(index)}>Delete</button></h5>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
