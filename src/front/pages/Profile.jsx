import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";

export const Profile = () => {
  const { store } = useGlobalReducer();

  // Not logged in
  if (!store.user) {
    return (
      <div className="container mt-5 text-center">
        <h2>You are not logged in</h2>
        <p>Please log in to see your profile</p>
        <Link to="/login" className="btn btn-primary">
          Go to Login
        </Link>
      </div>
    );
  }

  // Logged in
  return (
    <div className="container mt-5">
      <h2>My Profile</h2>
      <img
        src={store.user.avatar_url || "https://via.placeholder.com/150"}
        width="150"
        className="rounded-circle"
      />
      <p><strong>Name:</strong> {store.user.name}</p>
      <p><strong>Email:</strong> {store.user.email}</p>
      <p><strong>Bio:</strong> {store.user.bio}</p>
    </div>
  );
};
