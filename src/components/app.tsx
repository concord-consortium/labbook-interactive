import React from "react";
import { ThumbnailChooser, IThumbnailChooserProps } from "./thumbnail-chooser/thumbnail-chooser";
import { Thumbnail } from "./thumbnail-chooser/thumbnail";
import "./app.scss";

const items = [
  {
    id: "a",
    saved: true,
    label: "apple",
    data: {}
  }
];

let selectedItemID: string|null = null;
const setSelectedItemId = (id: string) => {
  const found = items.find(i => i.id === id);
  console.log(`selecting ${id}`);
  if(found) {
    selectedItemID = id;
  }
};
const clearSelectedItemId = (id: string) => {
  console.log(`Clear: ${id}`);
};
export const App = () => {
  const thumbnailChooserProps: IThumbnailChooserProps = {
    items,
    RenderingF: Thumbnail,
    selectedItemID,
    setSelectedItemId,
    clearSelectedItemId,
  };
  return (
    <div className="app">
      <ThumbnailChooser {...thumbnailChooserProps} />
    </div>
  );
};
