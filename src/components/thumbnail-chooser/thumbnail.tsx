import React from "react";
import "./thumbnail.scss";

export type ThumbnailModelID = string;

export interface IThumbnailProps {
  id: ThumbnailModelID;
  empty: boolean;
  label?: string;
  content?: React.FC|string;
  data: any;  // TODO: This is fine for now, type it later.
}

export const Thumbnail: React.FC<IThumbnailProps> = (props:IThumbnailProps) => {
  return (
    <div className="thumbnail" data-testid="thumbnail">
      {props.content}
    </div>
  );
};
