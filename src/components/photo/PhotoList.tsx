import React, { FC } from "react";
import { Photo } from "../../types/photo";
import PhotoCard from "./PhotoCard";

interface Props {
  photos: Photo[];
}

const PhotoList: FC<Props> = ({ photos }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </div>
  );
};

export default PhotoList;
