import React, { Fragment, useState } from "react";

const EditTodo = ({ todo }) => {
  console.log(todo);
  const [description, setDescription] = useState(todo.description);

  // edit description func
  const updateDescription = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(
        `http://localhost:5000/todos/${todo.todo_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      console.log(response);

      // to refresh it everytime we edit
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      {/* <!-- Trigger the modal with a button --> */}
      <button
        type="button"
        className="btn btn-info btn-warning"
        data-toggle="modal"
        data-target={`#id${todo.todo_id}`}
      >
        Edit
      </button>

      {/* <!-- Modal --> */}
      {/* 
        id = id10
      */}
      <div
        class="modal fade"
        id={`id${todo.todo_id}`}
        onClick={() => setDescription(todo.description)} // to set the data to original when we decide not to edit
        role="dialog"
      >
        <div class="modal-dialog">
          {/* <!-- Modal content--> */}
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={() => setDescription(todo.description)}
              >
                &times;
              </button>
              <h4 class="modal-title">Edit Todo</h4>
            </div>
            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={(e) => updateDescription(e)}
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-default"
                data-dismiss="modal"
                onClick={() => setDescription(todo.description)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditTodo;
