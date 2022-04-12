import Card from "../ui/Card";
import classes from "./UsersList.module.css";

const UsersList = ({ users }) => {
  return (
    <Card className={classes.users}>
      <ul>
        {users &&
          users.map((user, index) => (
            <li key={user.id}>
              {index + 1}: {user.username} ({user.age}) years old.
            </li>
          ))}
      </ul>
    </Card>
  );
};

export default UsersList;
