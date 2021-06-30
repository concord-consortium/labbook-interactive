import React from "react";
import { ThumbnailTitle } from "./thumbnail-title";
import { IThumbnailProps } from "./thumbnail";

import "./thumbnail-wrapper.scss";

export interface IThumbnailWrapperProps {
  id: string;
  selected: boolean;
  setSelectedContainerId: (id:string) => void;
  clearContainer: (id:string) => void;
  disabled: boolean;
  Thumbnail: React.FC<IThumbnailProps>
  saved: boolean;
  savedBgColor: string;
  selectedContainerBgColor: string;
}

export const ThumbnailWrapper: React.FC<IThumbnailWrapperProps> = (props) => {
  const { id, selected, setSelectedContainerId, disabled, saved, Thumbnail,
          savedBgColor, selectedContainerBgColor } = props;
  const className = `thumbnail-button${selected ? " selected" : ""}`;
  const style = {backgroundColor: selected ? selectedContainerBgColor : undefined};
  const handleSelect = (e: React.MouseEvent<HTMLElement>) => setSelectedContainerId(id);

  const fullTitle = "testing";
  return (
    <div className="thumbnail-wrapper" data-testid="thumbnail-wrapper">
      <button className={className}
        style={style}
        data-testid="thumbnail-button"
        onClick={handleSelect}
        disabled={disabled}>
          <ThumbnailTitle title={fullTitle}
            fullWidth={true}
            saved={saved}
            empty={!selected}
            savedBgColor={savedBgColor} />
      </button>
      <Thumbnail id={id} data={{a: 1}} saved={saved}/>
    </div>
  );
};
