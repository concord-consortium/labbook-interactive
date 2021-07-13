import React, {useState} from "react";
import { ThumbnailChooser, IThumbnailChooserProps } from "./thumbnail-chooser/thumbnail-chooser";
import { Thumbnail, IThumbnailProps } from "./thumbnail-chooser/thumbnail";
import "./app.scss";


const initialItems:Array<IThumbnailProps> = [
  {
    id: "A",
    empty: false,
    label: "apple",
    content: "apple",
    data: {}
  },
  {
    id: "B",
    empty: false,
    label: "banana",
    content: "Banana",
    data: {}
  },
  {
    id: "C",
    empty: false,
    label: "cherry",
    content: "Cherry",
    data: {}
  },
  {
    id: "D",
    empty: false,
    label: "dog",
    content: "Dog",
    data: {}
  },
  {
    id: "E",
    empty: false,
    label: "egg",
    content: "Egg",
    data: {}
  }
];

const displayItems = 4;
const emptyItem = {
  id: "",
  empty: true,
  label: "",
  data: {}
};

const numberToAlpha = (value:number) => (value + 10).toString(36).toUpperCase();
const maxItems = 12;

// Add 'empty' items:
const addBlankItems = (items:Array<IThumbnailProps>, minCount:number) => {
    const numBlanks = Math.max(1, minCount - items.length);
    if(items.length < maxItems) {
      for (let c = 0; c < numBlanks; c++) {
        items.push({... emptyItem});
      }
    }
};

const updateLabels = (items:Array<IThumbnailProps>) => {
  items.forEach( (i,idx) => i.id=numberToAlpha(idx));
};

addBlankItems(initialItems, displayItems);
updateLabels(initialItems);

export const App = () => {
  const[items, setItems] = useState(initialItems);
  const[selectedItemID, _setSelectedItemID] = useState("nothing");

  const setSelectedItemId = (id: string) => {
    const found = items.find((i:IThumbnailProps) => i.id === id);
    if(found) {
      _setSelectedItemID(id);
    }
  };


  // const appendItem = (newItem:IItemSpec) => setItems(items.concat(newItem));
  const clearSelectedItemId = (id: string) => {
    const newItems = items.filter((i:IThumbnailProps) => i.id !== id)
                          .filter((i:IThumbnailProps) => i.empty === false);
    addBlankItems(newItems, 4);
    updateLabels(newItems);
    setItems(newItems);
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
