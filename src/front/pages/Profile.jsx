import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Profile = () => {
  const { store } = useGlobalReducer();
  const user = store.user;

  if (!user) {
    return <h2>No user logged in</h2>;
  }

  return (
    <div className="container mt-5">
      <h2>My Profile</h2>

      <img
        src={user.avatar_url}
        alt="avatar"
        style={{ width: "150px", borderRadius: "50%" }}
      />

      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Bio:</strong> {user.bio}</p>
    </div>
  );
};
