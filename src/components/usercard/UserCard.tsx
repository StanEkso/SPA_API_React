import React, { FC } from "react";
import { User } from "../../types/user";

type Props = User;

const UserCard: FC<Props> = ({
  name,
  username,
  email,
  phone,
  website,
  address,
}) => {
  return (
    <div className="rounded-md p-4 border-2">
      <h3 className="font-bold">{name}</h3>
      <p>Username: {username}</p>
      <p>
        Email: <a href={`mailto:${email}`}>{email}</a>
      </p>
      <p>
        Phone: <a href={"tel:+" + phone}>{phone}</a>
      </p>
      <p>
        Site: <a href={website}>{website}</a>
      </p>
      <p>{address.street}</p>
    </div>
  );
};

export default UserCard;
