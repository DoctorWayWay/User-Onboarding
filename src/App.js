// Importing Libraries
import React, { useState, useEffect } from "react";
import axios from "axios";
// Importing Components
import AddUserForm from "./components/AddUserForm";
import UserCard from "./components/UserCard";
// App Component
function App() {
  // State Management
  const [users, setUsers] = useState([]);

  // Axios Call to get users
  const getUsers = () => {
    axios
      .get("https://reqres.in/api/users")
      .then((response) => {
        setUsers(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(getUsers, []);
  useEffect(() => {
    console.log(users);
  }, [users]);

  // Returning App Component
  return (
    <div className="App">
      <AddUserForm setUsers={setUsers} users={users} />
      {users.map((user) => {
        return <UserCard key={user.id} userData={user} />;
      })}
    </div>
  );
}

export default App;
