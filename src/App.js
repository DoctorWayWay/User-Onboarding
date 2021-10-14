// Importing Libraries
import React, { useState, useEffect } from "react";
import axios from "axios";
// Importing Components
import AddUserForm from "./components/AddUserForm";

// App Component
function App() {
  // State Management
  const [users, setUsers] = useState([]);

  // Axios Call to get users
  const getUsers = () => {
    axios
      .get("https://reqres.in/api/users")
      .then((response) => {
        console.log(response.data);
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
    </div>
  );
}

export default App;
