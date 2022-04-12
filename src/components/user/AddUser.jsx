import { useState } from "react";
import Button from "../ui/Button";
import Card from "../ui/Card";
import ErrorModal from "../ui/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = ({ users, setUsers }) => {
  const [error, setError] = useState(null);
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const addUserHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 && age.trim().length === 0) {
      setError({
        title: "No inputs!",
        message: "Please enter both the username and age!",
      });
    } else if (username.trim().length === 0) {
      setError({
        title: "No username!",
        message: "Please enter the username!",
      });
    } else if (age.trim().length === 0) {
      setError({
        title: "No age!",
        message: "Please enter the age!",
      });
    } else if (isNaN(age) || age < 1) {
      setError({
        title: "Invalid age!",
        message: "Please enter a valid age!",
      });
    } else {
      setUsers([...users, { username, age, id: Math.random().toString() }]);
      setUsername("");
      setAge("");
    }
  };

  const handleClose = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          handleClose={handleClose}
        />
      )}
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
    </div>
  );
};

export default AddUser;
