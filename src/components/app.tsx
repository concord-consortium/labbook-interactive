import React, {useState} from "react";
import { ThumbnailChooser, IThumbnailChooserProps } from "./thumbnail-chooser/thumbnail-chooser";
import { Thumbnail } from "./thumbnail-chooser/thumbnail";
import "./app.scss";

interface IItemSpec {
  id: string;
  saved: boolean;
  label: string;
  data: any;
}

const initialItems = [
  {
    id: "a",
    saved: true,
    label: "apple",
    data: {}
  },
  {
    id: "b",
    saved: true,
    label: "apple",
    data: {}
  },
  {
    id: "c",
    saved: true,
    label: "apple",
    data: {}
  }
];

export const App = () => {
  const[items, setItems] = useState(initialItems);
  const[selectedItemID, _setSelectedItemID] = useState("nothingxxx");

  const setSelectedItemId = (id: string) => {
    const found = items.find((i:IItemSpec) => i.id === id);
    console.log(`selecting ${id}`);
    if(found) {
      _setSelectedItemID(id);
    }
  };

  // const appendItem = (newItem:IItemSpec) => setItems(items.concat(newItem));
  const clearSelectedItemId = (id: string) => {
    console.log(`Clear: ${id}`);
    const filtered = items.filter((i:IItemSpec) => i.id !== id);
    setItems(filtered);
  };

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
