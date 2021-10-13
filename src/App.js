// Importing Libraries
import React, { useState } from "react";
import axios from "axios";
// Importing Components
import Form from "./components/Form";
// Initiating State Values
const initialFormData = {
  username: "",
  email: "",
  password: "",
  termsOfService: "",
};
// App Component
function App() {
  // State Management
  const [formData, setFormData] = useState(initialFormData);
  // Returning App Component
  return (
    <div className="App">
      <Form values={formData} />
    </div>
  );
}

export default App;
