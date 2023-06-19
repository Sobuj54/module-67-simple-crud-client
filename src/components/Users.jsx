import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const user = useLoaderData();

  return (
    <div>
      <h1>{user.length}</h1>
      <div>
        {user.map((u) => (
          <p key={u._id}>
            {u.name} : {u.email}
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
