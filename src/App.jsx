import React, { useState, useEffect } from "react";
import Axios from "axios";
import List from "./list";
import "./App.css";
function App() {
  const [users, setUser] = useState(null);
  const url = "https://randomuser.me/api/?results=5";
  useEffect(() => {
    const loaddata = async () => {
      fetch(url)
        .then((res) => res.json())
        .then(
          (res) => {
            setUser(res.results);
            console.log(users);
          },
          (err) => {
            console.error(err);
          }
        );
    };
    loaddata();
  }, []);
  const clear = () => {
    setUser(null);
  };
  return (
    <div className="App">
      <div className="section">
        <h1>Happy Birthday</h1>
        {users && users.map((user) => <List user={user}></List>)}
        <button className="btn" onClick={clear}>
          Clear All
        </button>
      </div>
    </div>
  );
}

export default App;
