import React from "react";

function DeleteButton({ id, onDelete }) {
  return (
    <div>
      <button
        className="contact-item_delete"
        onClick={() => onDelete(id)}
      >X</button>
    </div>
  );
}

export default DeleteButton;