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
    <div className="rounded-md p-4 border-2 flex flex-col gap-1">
      <h3 className="font-bold">{name}</h3>
      <p>Username: {username}</p>

      <p className="flex gap-2 items-center">
        <img
          src=" https://cdn-icons-png.flaticon.com/512/561/561127.png"
          alt="Geoposition"
          className="h-4"
        />
        {email}
      </p>
      <p className="flex gap-2 items-center">
        <img
          src="https://www.iconpacks.net/icons/1/free-phone-icon-1-thumb.png"
          alt="Geoposition"
          className="h-4"
        />
        <a href={"tel:+" + phone}>{phone}</a>
      </p>
      <p>
        <a href={website}>{website}</a>
      </p>
      <p className="flex gap-2 items-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2527/2527411.png"
          alt="Geoposition"
          className="h-4"
        />
        {address?.city}, {address?.street}
      </p>
    </div>
  );
};

export default UserCard;
