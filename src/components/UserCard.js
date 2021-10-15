// Importing Libraries
import React from "react";

// AddUser Component
const UserCard = (props) => {
  const { userData } = props;
  if (!userData) {
    return <h3>Working on getting user data...</h3>;
  }
  // Returning AddUser Component
  return (
    <div>
      <h3>{userData.first_name || userData.firstName}</h3>
      <p>{userData.email}</p>
    </div>
  );
};
export default UserCard;
