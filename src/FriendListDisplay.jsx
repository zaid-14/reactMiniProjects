import React from "react";

const FriendListDisplay = ({ friends, onRemoveFriend }) => {
  return (
    <div>
      {friends.length === 0 ? (
        <p>List is currently empty. Add friends to see list</p>
      ) : (
        <ul>
          {friends.map((friend) => (
            <li key={friend.id}>
              <p>
                Name: {friend.name}, Age: {friend.age} ---
                <button type="button" onClick={() => onRemoveFriend(friend.id)}>
                  REMOVE
                </button>
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FriendListDisplay;
