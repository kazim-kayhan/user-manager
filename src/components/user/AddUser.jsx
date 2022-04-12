import { useState } from "react";
import Button from "../ui/Button";
import Card from "../ui/Card";
import classes from "./AddUser.module.css";

const AddUser = () => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const addUserHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 && age.trim().length === 0) {
      alert("Please enter both username and age");
    } else if (username.trim().length === 0) {
      alert("Please enter username");
    } else if (age.trim().length === 0) {
      alert("Please enter age");
    } else if (isNaN(age) || age < 1) {
      alert("Please enter valid age");
      setAge("");
    } else {
      alert(`${username} is added with age ${age}`);
      setUsername("");
      setAge("");
    }
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          id="username"
          type="text"
          placeholder="Add username"
        />
        <label htmlFor="age">Age(year)</label>
        <input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          id="age"
          type="number"
          placeholder="Add age"
        />
        <Button type="submit">Add user</Button>
      </form>
    </Card>
  );
};

export default AddUser;
