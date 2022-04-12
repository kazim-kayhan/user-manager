import { useState } from "react";
import AddUser from "./components/user/AddUser";
import UsersList from "./components/user/UsersList";
const App = () => {
  const [users, setUsers] = useState([]);
  return (
    <div>
      <AddUser users={users} setUsers={setUsers} />
      <UsersList users={users} />
    </div>
  );
};
export default App;
