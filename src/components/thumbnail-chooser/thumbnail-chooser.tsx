import React from "react";
import { ThumbnailWrapper } from "./thumbnail-wrapper";
import t from "../../utils/translation/translate";
import {IThumbnailProps, ThumbnailModelID} from "./thumbnail";
import "./thumbnail-chooser.scss";


export interface IThumbnailChooserProps {
  items: Array<IThumbnailProps>;
  Thumbnail: React.FC<IThumbnailProps>;
  disableUnselectedThumbnails?: boolean;
  selectedItemID: ThumbnailModelID | null;
  setSelectedItemId: (itemId: ThumbnailModelID) => void;
  clearSelectedItemId: (itemId: ThumbnailModelID) => void;
  savedBgColor: string;
  selectedContainerBgColor: string;
}

export const ThumbnailChooser: React.FC<IThumbnailChooserProps> = (props) => {
  const { items, Thumbnail, selectedItemID, setSelectedItemId, clearSelectedItemId,
          savedBgColor, selectedContainerBgColor } = props;
  // Disable unselected thumbnails until user saves the current one.
  return (
    <div className="thumbnail-chooser" data-testid="thumbnail-chooser">
      <div className="thumbnail-chooser-title">
        {t("THUMBNAIL-CHOOSER.TITLE")}
      </div>
      <div className="thumbnail-chooser-list">
        {items.map(item => {
          const {id, saved} = item;
          const selected = selectedItemID === selectedItemID;
          return (
            <ThumbnailWrapper id={id} Thumbnail={Thumbnail} key={id}
              selected={selected} setSelectedContainerId={setSelectedItemId}
              saved={saved} clearContainer={clearSelectedItemId}
              disabled={false} savedBgColor={savedBgColor}
              selectedContainerBgColor={selectedContainerBgColor} />
          );
        })}
      </div>
    </div>
  );
};
