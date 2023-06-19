import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const user = useLoaderData();

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
        }
      });
  };

  return (
    <div>
      <h1>{user.length}</h1>
      <div>
        {user.map((u) => (
          <p key={u._id}>
            {u.name} : {u.email} : {u._id}
            <button onClick={() => handleDelete(u._id)}>X</button>
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
