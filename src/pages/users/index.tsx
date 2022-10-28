import React, { FC, Suspense } from "react";
import { useLoaderData, Await, LoaderFunction } from "react-router-dom";
import Breadcrumbs from "../../components/breadcumbs/Breadcrumbs";
import Loader from "../../components/loader/Loader";
import UserList from "../../components/userlist/UserList";
import { User } from "../../types/user";
const UsersPage: FC = () => {
  const { userPromise }: ReturnType<typeof loader> = useLoaderData();
  return (
    <>
      <Breadcrumbs />
      <Suspense fallback={<Loader />}>
        <Await
          resolve={userPromise}
          children={(users) => <UserList users={users} />}
        />
      </Suspense>
    </>
  );
};

export default UsersPage;

export const loader: LoaderFunction = () => {
  const userPromise: Promise<User[]> = new Promise((resolve) => {
    setTimeout(() => {
      const users = fetch("https://jsonplaceholder.typicode.com/users").then(
        (r) => r.json()
      );
      resolve(users);
    }, 500);
  });
  return { userPromise };
};
