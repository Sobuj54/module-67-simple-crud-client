import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUser = useLoaderData();

  const [users, setUsers] = useState(loadedUser);

  const handleDelete = (_id) => {
    console.log("delete", _id);

    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("successfully deleted from database.");
          const remainingUser = users.filter((user) => user._id !== _id);
          setUsers(remainingUser);
        }
      });
  };

  return (
    <div>
      <h1>{users.length}</h1>
      <div>
        {users.map((user) => (
          <p key={user._id}>
            {user.name} : {user.email} : {user._id}
            <Link to={`/update/${user._id}`}>
              <button>Update</button>
            </Link>
            <button onClick={() => handleDelete(user._id)}>X</button>
          </p>
        ))}
      </div>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default Users;
