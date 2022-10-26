import React from "react";
import { ActionFunction, Form } from "react-router-dom";
import Breadcumbs from "../components/breadcumbs/Breadcrumbs";

const CreateUser = () => {
  return (
    <>
      <Breadcumbs />
      <Form
        method="post"
        action="/users/create"
        className="grid max-w-3xl mx-auto"
      >
        <label htmlFor="">Name</label>
        <input
          type="text"
          name="name"
          className="rounded-sm border-2 px-2 py-1 mb-2"
          placeholder="Bob"
        />
        <label htmlFor="">Username</label>
        <input
          type="text"
          name="username"
          className="rounded-sm border-2 px-2 py-1 mb-2"
          placeholder="bobus2"
        />
        <label htmlFor="">Email</label>
        <input
          type="email"
          name="email"
          className="rounded-sm border-2 px-2 py-1  mb-2"
          placeholder="email@example.com"
        />
        <label htmlFor="">Phone</label>
        <input
          type="text"
          name="phone"
          className="rounded-sm border-2 px-2 py-1  mb-2"
          placeholder="493-170-9623 x156"
        />
        <label htmlFor="">Address</label>

        <div className="grid grid-cols-2 gap-4 mb-2">
          <input
            type="text"
            name="city"
            className="rounded-sm border-2 px-2 py-1"
            placeholder="City"
          />
          <input
            type="text"
            name="street"
            className="rounded-sm border-2 px-2 py-1"
            placeholder="Street"
          />
        </div>
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

export default CreateUser;
export const action: ActionFunction = async ({ request, params }) => {
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
