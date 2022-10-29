import { User } from "../types/user";

export const getUsers = (): Promise<User[]> =>
  fetch("https://jsonplaceholder.typicode.com/users").then((r) => r.json());

export const getUserById = (id: number): Promise<User> =>
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((r) =>
    r.json()
  );
export const getUserAlbums = (id: number): Promise<User> =>
  fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums`).then((r) =>
    r.json()
  );
