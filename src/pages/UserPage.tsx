import React, { Suspense } from "react";
import { Await, LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import AlbumList from "../components/albumlist/AlbumList";
import Loader from "../components/loader/Loader";
import UserCard from "../components/usercard/UserCard";
import { Album } from "../types/album";
import { User } from "../types/user";

const UserPage = () => {
  const { userPromise, albumsPromise } = useLoaderData() as ReturnType<
    typeof loader
  >;
  return (
    <div className="grid lg:grid-cols-[1fr_2fr] gap-8">
      <Suspense fallback={<Loader />}>
        <Await
          resolve={userPromise}
          children={(user) => <UserCard {...user} />}
        />
        <Await
          resolve={albumsPromise}
          children={(albums) => <AlbumList albums={albums} />}
        />
      </Suspense>
    </div>
  );
};

export default UserPage;
export const loader = ({ params }: LoaderFunctionArgs) => {
  const { id } = params;
  const userPromise: Promise<User> = new Promise((resolve) => {
    setTimeout(() => {
      const user = fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      ).then((r) => r.json());
      resolve(user);
    }, 500);
  });
  const albumsPromise: Promise<Album[]> = fetch(
    `https://jsonplaceholder.typicode.com/users/${id}/albums`
  ).then((r) => r.json());
  return { userPromise, albumsPromise };
};
