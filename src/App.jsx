import React from "react";
import { useState } from "react";
import AddFriendForm from "./AddFriendForm";
import FriendListDisplay from "./FriendListDisplay";

const App = () => {
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
      <AddFriendForm
        newFriend={newFriend}
        onInputChange={handleChange}
        onAddFriend={handleAddFriend}
      />
      <FriendListDisplay friends={friends} onRemoveFriend={handleRemove} />
    </div>
  );
};

export default App;
