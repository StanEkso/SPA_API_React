import React, { Suspense } from "react";
import { ActionFunction, Await, Form, useLoaderData } from "react-router-dom";
import Breadcrumbs from "../../components/breadcumbs/Breadcrumbs";
import { User } from "../../types/user";
import { loader as usersLoader } from "../users/";

const CreateAlbumPage = () => {
  const { userPromise } = useLoaderData() as ReturnType<typeof usersLoader>;
  return (
    <>
      <Breadcrumbs />
      <Form
        method="post"
        action="/albums/create"
        className="grid max-w-3xl mx-auto"
      >
        <label htmlFor="">Owner</label>
        <select className="rounded-sm border-2 px-2 py-1 mb-2">
          <Suspense>
            <Await resolve={userPromise}>
              {(users) => (
                <>
                  {users.map(({ id, name }: User) => (
                    <option value={id} key={id}>
                      {name}
                    </option>
                  ))}
                </>
              )}
            </Await>
          </Suspense>
        </select>
        <label htmlFor="">Title</label>
        <input
          type="text"
          name="title"
          className="rounded-sm border-2 px-2 py-1 mb-2"
          placeholder="Beautiful name for album"
        />
        <button
          type="submit"
          className="rounded-sm px-2 py-1 block bg-blue-500 text-white"
        >
          Create
        </button>
      </Form>
    </>
  );
};

export default CreateAlbumPage;
export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  console.log(...form);
};
