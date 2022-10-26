import React, { Suspense } from "react";
import { useLoaderData, Await } from "react-router-dom";
import Breadcrumbs from "../../components/breadcumbs/Breadcrumbs";
import Loader from "../../components/loader/Loader";
import UserList from "../../components/userlist/UserList";
import { User } from "../../types/user";
const UsersPage = () => {
  const { userPromise } = useLoaderData() as ReturnType<typeof loader>;
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

export const loader = () => {
  const userPromise: Promise<User[]> = new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = fetch("https://jsonplaceholder.typicode.com/users").then(
        (r) => r.json()
      );
      resolve(user);
    }, 500);
  });
  return { userPromise };
};
