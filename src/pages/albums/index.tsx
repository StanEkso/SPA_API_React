import React, { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import AlbumList from "../../components/albumlist/AlbumList";
import Breadcrumbs from "../../components/breadcumbs/Breadcrumbs";
import Loader from "../../components/loader/Loader";
const AlbumsPage = () => {
  const { albumsPromise } = useLoaderData() as ReturnType<typeof loader>;
  return (
    <>
      <Breadcrumbs />
      <Suspense fallback={<Loader />}>
        <Await
          resolve={albumsPromise}
          children={(albums) => <AlbumList albums={albums} />}
        />
      </Suspense>
    </>
  );
};

export default AlbumsPage;
export const loader = () => {
  const albumsPromise = fetch(
    "https://jsonplaceholder.typicode.com/albums"
  ).then((r) => r.json());
  return {
    albumsPromise,
  };
};