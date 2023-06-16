// import React from "react";

import { useLoaderData } from "react-router-dom";

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
    </div>
  );
};

export default Users;
