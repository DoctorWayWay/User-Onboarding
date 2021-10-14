// Importing Libraries
import React from "react";

// AddUser Component
const AddUser = (userData) => {
  if (!userData) {
    return <h3>Working on getting user data...</h3>;
  }
  // Returning AddUser Component
  return (
    <div>
      <h3>{userData.username}</h3>
      <p>{userData.email}</p>
    </div>
  );
};
export default AddUser;
