import React from "react";

const TodoList = ({ dataenter, deletes }) => {
  return (
    <div>
      {dataenter.map((todo, index) => (
        <div key={index}>
          <h5>
            {todo} &nbsp; <button onClick={() => deletes(index)}>DELETE</button>
          </h5>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
