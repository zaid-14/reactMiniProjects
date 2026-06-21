import React from "react";
import { useState } from "react";

const FriendList = () => {
  const [friends, setFriends] = useState(["Yahya", "Aman", "Abhi"]);
  const [newFriend, setNewFriend] = useState("");

  function handleChange(event) {
    setNewFriend(event.target.value);
  }

  function handleAddFriend() {
    setFriends([...friends, newFriend]);
    setNewFriend("");
  }

  function handleRemove(nameToRemove) {
    setFriends(friends.filter((friend) => friend != nameToRemove));
  }

  return (
    <div>
      <h1>My Friendlist</h1>
      <input type="text" value={newFriend} onChange={handleChange} />
      <button type="button" onClick={handleAddFriend}>
        ADD FRIEND
      </button>
      {friends.length === 0 ? (
        <p>List is currently empty. Add friends to see list</p>
      ) : (
        <ul>
          {friends.map((friend) => (
            <li key={friend}>
              {friend}{" "}
              <button type="button" onClick={() => handleRemove(friend)}>
                REMOVE
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FriendList;
