import React, { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import AlbumList from "../components/albumlist/AlbumList";
import Breadcumbs from "../components/breadcumbs/Breadcumbs";
import Loader from "../components/loader/Loader";
const Albums = () => {
  const { albumsPromise } = useLoaderData() as ReturnType<typeof loader>;
  return (
    <>
      <Breadcumbs />
      <Suspense fallback={<Loader />}>
        <Await
          resolve={albumsPromise}
          children={(albums) => <AlbumList albums={albums} />}
        />
      </Suspense>
    </>
  );
};

export default Albums;
export const loader = () => {
  const albumsPromise = fetch(
    "https://jsonplaceholder.typicode.com/albums"
  ).then((r) => r.json());
  return {
    albumsPromise,
  };
};
