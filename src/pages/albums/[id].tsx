import React, { FC, Suspense } from "react";
import {
  Await,
  Link,
  LoaderFunctionArgs,
  useLoaderData,
} from "react-router-dom";
import Breadcrumbs from "../../components/breadcumbs/Breadcrumbs";
import Loader from "../../components/loader/Loader";
import PhotoList from "../../components/photo/PhotoList";
import CreatedBySkeleton from "../../components/skeletons/CreatedBySkeleton";
import ListSkeleton from "../../components/skeletons/ListSkeleton";
import PhotoCardSkeleton from "../../components/skeletons/PhotoCardSkeleton";
import { Album } from "../../types/album";
import { User } from "../../types/user";

const AlbumPage: FC = () => {
  const { albumRes } = useLoaderData() as Awaited<ReturnType<typeof loader>>;
  return (
    <div>
      <Breadcrumbs />
      <Suspense fallback={<Loader />}>
        <Await
          resolve={albumRes}
          children={(album) => (
            <>
              <div className="mb-4">
                <h3 className="font-bold mb-2 text-2xl">{album.title}</h3>
                <Suspense fallback={<CreatedBySkeleton />}>
                  <Await
                    resolve={fetch(
                      `https://jsonplaceholder.typicode.com/users/${album.userId}`
                    ).then((r) => r.json())}
                    children={({ name, id }: User) => (
                      <p>
                        Created by{" "}
                        <Link
                          to={"/users/" + id}
                          className="hover:underline hover:text-blue-600"
                        >
                          {name}
                        </Link>
                      </p>
                    )}
                  />
                </Suspense>
                <Suspense
                  fallback={<ListSkeleton element={PhotoCardSkeleton} grid />}
                >
                  <Await
                    resolve={fetch(
                      `https://jsonplaceholder.typicode.com/albums/${album.id}/photos`
                    ).then((r) => r.json())}
                    children={(photos) => <PhotoList photos={photos} />}
                  />
                </Suspense>
              </div>
            </>
          )}
        />
      </Suspense>
    </div>
  );
};

export default AlbumPage;

export const loader = ({ params }: LoaderFunctionArgs) => {
  const albumRes: Promise<Album> = fetch(
    "https://jsonplaceholder.typicode.com/albums/" + params.id
  ).then((r) => r.json());
  return {
    albumRes,
  };
};
