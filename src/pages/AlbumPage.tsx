import React, { Suspense } from "react";
import {
  Await,
  Link,
  LoaderFunctionArgs,
  useLoaderData,
} from "react-router-dom";
import Breadcumbs from "../components/breadcumbs/Breadcumbs";
import Loader from "../components/loader/Loader";
import PhotoList from "../components/photo/PhotoList";
import { Album } from "../types/album";
import { User } from "../types/user";
import NotFound from "./NotFound";

const AlbumPage = () => {
  const { album, photosPromise, userPromise } = useLoaderData() as Awaited<
    ReturnType<typeof loader>
  >;
  return (
    <div>
      <Breadcumbs />
      <Suspense fallback={<Loader />}>
        <div className="mb-4">
          <h3 className="font-bold mb-2 text-2xl">{album.title}</h3>
          <Await
            resolve={userPromise}
            children={(user) => (
              <p>
                Created by{" "}
                <Link
                  to={"/users/" + user.id}
                  className="hover:underline hover:text-blue-600"
                >
                  {user.name}
                </Link>{" "}
              </p>
            )}
          />
        </div>
        <Await
          resolve={photosPromise}
          errorElement={<NotFound />}
          children={(photos) => <PhotoList photos={photos} />}
        />
      </Suspense>
    </div>
  );
};

export default AlbumPage;

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const albumRes = await fetch(
    "https://jsonplaceholder.typicode.com/albums/" + params.id
  );
  if (albumRes.status !== 200) {
    throw new Response("Not Found", { status: 404 });
  }
  const album: Album = await albumRes.json();

  const userPromise: Promise<User> = fetch(
    `https://jsonplaceholder.typicode.com/users/${album.userId}`
  ).then((r) => r.json());
  const photosPromise = fetch(
    "https://jsonplaceholder.typicode.com/albums/" + params.id + "/photos"
  ).then((r) => r.json());
  return {
    album,
    photosPromise,
    userPromise,
  };
};
