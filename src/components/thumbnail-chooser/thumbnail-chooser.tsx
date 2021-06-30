import React from "react";
import { ThumbnailWrapper } from "./thumbnail-wrapper";
import t from "../../utils/translation/translate";
import {IThumbnailProps, ThumbnailModelID} from "./thumbnail";
import "./thumbnail-chooser.scss";


export interface IThumbnailChooserProps {
  items: Array<IThumbnailProps>;
  RenderingF: React.FC<IThumbnailProps>;
  disableUnselectedThumbnails?: boolean;
  selectedItemID: ThumbnailModelID | null;
  setSelectedItemId: (itemId: ThumbnailModelID) => void;
  clearSelectedItemId: (itemId: ThumbnailModelID) => void;
}

export const ThumbnailChooser: React.FC<IThumbnailChooserProps> = (props) => {
  const {
    items, RenderingF, selectedItemID,
    setSelectedItemId, clearSelectedItemId,
  } = props;
  const minItems = 4;
  const numBlanks = Math.min(1, minItems - items.length);
  const blanks = new Array<IThumbnailProps>(numBlanks).map( i => {
    return {
      id: "_",
      saved: false,
      label: "",
      data: {}
    };
  });
  const itemList = items.concat(blanks);
  // Disable unselected thumbnails until user saves the current one.
  return (
    <div className="thumbnail-chooser" data-testid="thumbnail-chooser">
      <div className="thumbnail-chooser-title">
        {t("THUMBNAIL-CHOOSER.TITLE")}
      </div>
      <div className="thumbnail-chooser-list">
        {itemList.map(item => {
          const {id} = item;
          const selected = selectedItemID === selectedItemID;
          return (
            <ThumbnailWrapper id={id} Thumbnail={RenderingF} key={id}
              selected={selected} setSelectedContainerId={setSelectedItemId}
              clearContainer={clearSelectedItemId}
              empty={id === "_"}
              disabled={false} />
          );
        })}
        {}
      </div>
    </div>
  );
};
