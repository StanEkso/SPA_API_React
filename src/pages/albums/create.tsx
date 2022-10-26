import React, { Suspense } from "react";
import { ActionFunction, Await, Form, useLoaderData } from "react-router-dom";
import Breadcrumbs from "../../components/breadcumbs/Breadcrumbs";
import { User } from "../../types/user";
import { loader as usersLoader } from "../users/";

const CreateAlbum = () => {
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

        <Suspense>
          <Await resolve={userPromise}>
            {(users) => (
              <select>
                {users.map((user: User) => (
                  <option value={user.id}>{user.name}</option>
                ))}
              </select>
            )}
          </Await>
        </Suspense>
        <label htmlFor="">Title</label>
        <input
          type="text"
          name="title"
          className="rounded-sm border-2 px-2 py-1 mb-2"
          placeholder="Beautiful name for album"
        />
        <button
          type="submit"
          className="rounded-sm border-2 px-2 py-1 block bg-slate-500 text-white"
        >
          Create
        </button>
      </Form>
    </>
  );
};

export default CreateAlbum;
export const action: ActionFunction = async ({ request, params }) => {
  const form = await request.formData();
  console.log(...form);
};
