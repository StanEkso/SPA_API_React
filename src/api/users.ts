import { User } from "../types/user";

export const getUsers = (): Promise<User[]> =>
  fetch("https://jsonplaceholder.typicode.com/users").then((r) => {
    if (r.ok) return r.json();
    throw new Error("Something went wrong");
  });

export const getUserById = (id: number): Promise<User> =>
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((r) => {
    if (r.ok) return r.json();
    throw new Error("Something went wrong");
  });
export const getUserAlbums = (id: number): Promise<User> =>
  fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums`).then((r) => {
    if (r.ok) return r.json();
    throw new Error("Something went wrong");
  });
