import React, { FC, Suspense } from "react";
import { ActionFunction, Await, Form, useLoaderData } from "react-router-dom";
import Breadcrumbs from "../../components/breadcumbs/Breadcrumbs";
import Select from "../../components/select/Select";
import { User } from "../../types/user";
import { loader as usersLoader } from "../users/";

const CreateAlbumPage: FC = () => {
  const { userPromise }: ReturnType<typeof usersLoader> = useLoaderData();
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
              <Select
                options={users.map((user: User) => ({
                  key: user.id,
                  value: user.name,
                }))}
              />
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
  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: JSON.stringify(Object.fromEntries([...form])),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};
