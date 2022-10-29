import React, { Suspense } from "react";
import { Await, LoaderFunction, useLoaderData } from "react-router-dom";
import AlbumList from "../../components/albumlist/AlbumList";
import Breadcrumbs from "../../components/breadcumbs/Breadcrumbs";
import ListSkeleton from "../../components/skeletons/ListSkeleton";
const AlbumsPage = () => {
  const { albumsPromise } = useLoaderData() as ReturnType<typeof loader>;
  return (
    <>
      <Breadcrumbs />
      <Suspense fallback={<ListSkeleton withTitle />}>
        <Await
          resolve={albumsPromise}
          children={(albums) => <AlbumList albums={albums} />}
        />
      </Suspense>
    </>
  );
};

export default AlbumsPage;
export const loader: LoaderFunction = () => {
  const albumsPromise = fetch(
    "https://jsonplaceholder.typicode.com/albums"
  ).then((r) => r.json());
  return {
    albumsPromise,
  };
};
