import React from "react";
import { User } from "../types/user";

type Props = {};

const UserPage = (props: Props) => {
  return <div>UserPage</div>;
};

export default UserPage;
export const loader = (...params: any[]) => {
  console.log(params);
  const userPromise: Promise<User> = new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = fetch("https://jsonplaceholder.typicode.com/users").then(
        (r) => r.json()
      );
      resolve(user);
    }, 500);
  });
  return { userPromise };
};
