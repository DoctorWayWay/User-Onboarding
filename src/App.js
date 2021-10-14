// Importing Libraries
import React, { useState, useEffect } from "react";
import axios from "axios";
// Importing Components
import AddUserForm from "./components/AddUserForm";
import AddUser from "./components/AddUser";
// App Component
function App() {
  // State Management
  const [users, setUsers] = useState([]);

  // Axios Call to get users
  const getUsers = () => {
    axios
      .get("https://reqres.in/api/users")
      .then((response) => {
        // console.log(response.data.data);
        setUsers(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(getUsers, []);

  // Returning App Component
  return (
    <div className="App">
      <AddUserForm />
      {users.map((user) => {
        return <AddUser key={user.id} userData={user} />;
      })}
    </div>
  );
}

export default App;
