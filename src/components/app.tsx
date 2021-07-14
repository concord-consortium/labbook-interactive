import React, {useState} from "react";
import { ThumbnailChooser, IThumbnailChooserProps } from "./thumbnail-chooser/thumbnail-chooser";
import { Thumbnail, IThumbnailProps } from "./thumbnail-chooser/thumbnail";
import { PreviewPanel } from "./preview-panel";
import { UploadButton } from "./buttons";
import { CommentField } from "./comment-field";
import SnapShotIcon from "../assets/snapshot-image-icon.svg";
import UploadIcon from "../assets/upload-image-icon.svg";
import styled from "styled-components";
import "./app.scss";

const BackgroundDiv = styled.div `
  width: 514px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  padding: 0px;
  border: solid 1px var(--cc-charcoal);
  background-color: var(--white);
`;

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

  const setSelectedItemID = (id: string) => {
    const found = items.find((i:IThumbnailProps) => i.id === id);
    if(found) {
      _setSelectedItemID(id);
    }
  };


  // const appendItem = (newItem:IItemSpec) => setItems(items.concat(newItem));
  const clearSelectedItemID = (id: string) => {
    const newItems = items.filter((i:IThumbnailProps) => i.id !== id)
                          .filter((i:IThumbnailProps) => i.empty === false);
    addBlankItems(newItems, 4);
    _setSelectedItemID("nothing");
    updateLabels(newItems);
    setItems(newItems);
  };

  const thumbnailChooserProps: IThumbnailChooserProps = {
    items,
    RenderingF: Thumbnail,
    selectedItemID,
    setSelectedItemID,
    clearSelectedItemID,
  };
  const selectedItem = items.find(i => i.id === selectedItemID);

  const Buttons = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const BottomContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    width: 100%;
  `;

  return (
    <div className="app">
      <BackgroundDiv>
        <ThumbnailChooser {...thumbnailChooserProps} />
        <PreviewPanel item={selectedItem} />
        <BottomContent>
          <Buttons>
            <UploadButton>
              <UploadIcon />
              Upload Image
            </UploadButton>

            <UploadButton>
              <SnapShotIcon />
              Take Snapshot
            </UploadButton>
          </Buttons>
          <CommentField item={selectedItem}/>
        </BottomContent>

      </BackgroundDiv>
    </div>
  );
};
