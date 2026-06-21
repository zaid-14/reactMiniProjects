import React from "react";
import { useState } from "react";

const FriendList = () => {
  const [friends, setFriends] = useState([
    { id: 1, name: "Yahya", age: 10 },
    { id: 2, name: "Aman", age: 25 },
    { id: 3, name: "Raju", age: 24 },
  ]);
  const [newFriend, setNewFriend] = useState("");

  function handleChange(event) {
    setNewFriend(event.target.value);
  }

  function handleAddFriend() {
    const newFriendObject = { id: Date.now(), name: newFriend, age: 20 };
    setFriends([...friends, newFriendObject]);
    setNewFriend("");
  }

  function handleRemove(idToRemove) {
    setFriends(friends.filter((friend) => friend.id != idToRemove));
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
            <li key={friend.id}>
              <p>
                Name: {friend.name}, Age: {friend.age} ---
              
              <button type="button" onClick={() => handleRemove(friend.id)}>
                REMOVE
              </button></p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FriendList;
