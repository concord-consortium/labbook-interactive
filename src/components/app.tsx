import React from "react";
import { Text } from "./text";
import { useSampleText } from "../hooks/use-sample-text";
import Icon from "../assets/concord.png";
import { ThumbnailChooser, IThumbnailChooserProps } from "./thumbnail-chooser/thumbnail-chooser";
import { Thumbnail } from "./thumbnail-chooser/thumbnail";
import "./app.scss";

export const App = () => {
  const sampleText = useSampleText();
  const thumbnailChooserProps: IThumbnailChooserProps = {
    items: [
      {
        id: "a",
        saved: true,
        label: "apple",
        data: {}
      },
      {
        id: "b",
        saved: true,
        label: "bannana",
        data: {}
      },
      {
        id: "c",
        saved: true,
        label: "cherry",
        data: {}
      }
    ],
    Thumbnail,
    selectedItemID: null,
    setSelectedItemId: (id: string) => null,
    clearSelectedItemId: (id: string) => null,
    savedBgColor: "#000000",
    selectedContainerBgColor: "#eeeeee"
  };
  return (
    <div className="app">
      <img src={Icon}/>
      <Text text={sampleText} />
      <ThumbnailChooser {...thumbnailChooserProps} />
    </div>
  );
};
