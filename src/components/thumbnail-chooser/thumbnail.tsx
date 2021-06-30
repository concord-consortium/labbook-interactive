import React from "react";
import "./thumbnail.scss";

export type ThumbnailModelID = string;

export interface IThumbnailProps {
  id: ThumbnailModelID;
  saved: boolean;
  label?: string;
  data: any;  // TODO: This is fine for now, type it later.
}

export const Thumbnail: React.FC<IThumbnailProps> = (props:IThumbnailProps) => {
  return (
    <div className="thumbnail" data-testid="thumbnail">
      This is some text.
    </div>
  );
};
