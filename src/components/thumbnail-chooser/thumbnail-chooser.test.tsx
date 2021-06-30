import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { IThumbnailChooserProps, ThumbnailChooser } from "./thumbnail-chooser";

describe("ThumbnailChooser component", () => {
  it("renders", () => {

    const Thumbnail = () => <div data-testid="thumbnail">Thumbnail</div>;

    const thumbnailChooserProps: IThumbnailChooserProps = {
      items: [{
        id: "a",
        saved: true,
        data: {}
      }],
      Thumbnail,
      selectedItemID: null,
      setSelectedItemId: (id: string) => null,
      clearSelectedItemId: (id: string) => null,
      savedBgColor: "#000000",
      selectedContainerBgColor: "#eeeeee"
    };

    render(<ThumbnailChooser {...thumbnailChooserProps} />);
    expect(screen.getAllByTestId("thumbnail-chooser")).toHaveLength(1);
    expect(screen.getAllByTestId("thumbnail")).toHaveLength(1);
  });
});
