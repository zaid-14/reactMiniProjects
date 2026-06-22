import React from "react";

const AddFriendForm = ({ newFriend, onInputChange, onAddFriend }) => {
  return (
    <div>
      <input type="text" value={newFriend} onChange={onInputChange} />
      <button type="button" onClick={onAddFriend}>
        ADD FRIEND
      </button>
    </div>
  );
};

export default AddFriendForm;
