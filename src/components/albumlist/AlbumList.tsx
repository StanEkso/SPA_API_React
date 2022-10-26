import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Album } from "../../types/album";

interface Props {
  albums: Album[];
}

const AlbumList: FC<Props> = ({ albums }) => {
  return (
    <div>
      <h3>Albums</h3>
      <div className="">
        {albums.map((album) => (
          <div
            key={album.id}
            className="flex space-x-4 items-center hover:text-blue-600 hover:underline"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/1160/1160358.png"
              className="w-6 h-6"
              alt=""
            />
            <Link to={"/albums/" + album.id}>{album.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumList;
