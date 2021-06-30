import classNames from "classnames";
import React from "react";

import "./thumbnail-title.scss";

interface IProps {
  title: string;
  empty: boolean;
  saved: boolean;
}

export const ThumbnailTitle: React.FC<IProps> = ({ title, empty, saved }) => {
  const className = classNames("thumbnail-title", { empty, saved });
  return (
    <div className={className} data-testid="thumbnail-title">
      {title}
    </div>
  );
};
