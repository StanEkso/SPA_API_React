import React, { FC } from "react";
import { Link } from "react-router-dom";
import { User } from "../../types/user";

interface Props {
  users: User[];
}

const UserList: FC<Props> = ({ users }) => {
  return (
    <div>
      <h3 className="font-bold mb-2 text-2xl">Users</h3>
      {users.map((user) => (
        <div key={user.id}>
          <Link
            to={`/users/${user.id}`}
            className="hover:underline hover:text-blue-600"
          >
            {user.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default UserList;
