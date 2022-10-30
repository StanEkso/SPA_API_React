import { Album } from "../types/album";

export const getAlbums = (): Promise<Album[]> =>
  fetch("https://jsonplaceholder.typicode.com/albums").then((r) => {
    if (r.ok) return r.json();
    throw new Error("Something went wrong");
  });

export const getAlbumById = (id: number): Promise<Album> =>
  fetch(`https://jsonplaceholder.typicode.com/albums/${id}`).then((r) => {
    if (r.ok) return r.json();
    throw new Error("Something went wrong");
  });
export const getAlbumPhotos = (id: number): Promise<Album> =>
  fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`).then(
    (r) => {
      if (r.ok) return r.json();
      throw new Error("Something went wrong");
    }
  );
