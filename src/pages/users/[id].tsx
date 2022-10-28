import React, { Suspense } from "react";
import { Await, LoaderFunction, useLoaderData } from "react-router-dom";
import AlbumList from "../../components/albumlist/AlbumList";
import Breadcrumbs from "../../components/breadcumbs/Breadcrumbs";
import Loader from "../../components/loader/Loader";
import UserCard from "../../components/usercard/UserCard";
import { Album } from "../../types/album";
import { User } from "../../types/user";
import NotFoundPage from "../404";

const UserPage = () => {
  const { userPromise, albumsPromise } = useLoaderData() as Awaited<
    ReturnType<typeof loader>
  >;
  return (
    <>
      <Breadcrumbs />
      <div className="grid md:grid-cols-[1fr_2fr] gap-8 lg:gap-10 xl:gap-12">
        <Suspense fallback={<Loader />}>
          <Await
            resolve={userPromise}
            errorElement={<NotFoundPage />}
            children={(user) => <UserCard {...user} />}
          />
          <Await
            resolve={albumsPromise}
            errorElement={<NotFoundPage />}
            children={(albums) => <AlbumList albums={albums} />}
          />
        </Suspense>
      </div>
    </>
  );
};

export default UserPage;
export const loader: LoaderFunction = async ({ params }) => {
  const { id } = params;
  const userPromise = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  if (userPromise.status !== 200) {
    throw new Response("Not found", { status: 404 });
  }
  const albumsPromise: Promise<Album[]> = fetch(
    `https://jsonplaceholder.typicode.com/users/${id}/albums`
  ).then((r) => r.json());
  return { userPromise: userPromise.json() as Promise<User>, albumsPromise };
};
