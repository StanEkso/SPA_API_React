import { Album } from "../types/album";

export const getAlbums = (): Promise<Album[]> =>
  fetch("https://jsonplaceholder.typicode.com/albums").then((r) => r.json());

export const getAlbumById = (id: number): Promise<Album> =>
  fetch(`https://jsonplaceholder.typicode.com/albums/${id}`).then((r) =>
    r.json()
  );
export const getAlbumPhotos = (id: number): Promise<Album> =>
  fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`).then((r) =>
    r.json()
  );
