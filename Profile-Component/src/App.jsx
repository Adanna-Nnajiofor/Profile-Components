import React, { useState, useEffect } from 'react'
import "./styles/style.css";
import Profile from './components/Profile';


function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const usersArray = [
    { Name: "David Martins", Bio: "A software developer from New York", DateOfBirth: "01-05-1990" },
    { Name: "Jane Smith", Bio: "A graphic designer from China", DateOfBirth: "15-05-1988" },
    { Name: "Mike Johnson", Bio: "A product manager from Japan", DateOfBirth: "20-12-1993" }
  ];


  useEffect(() => {
    setTimeout(() => {
      setUsers(usersArray);
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <Profile users={users} />
        </div>
      )}
    </div>
  );
}


export default App
