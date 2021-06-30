import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { IThumbnailWrapperProps, ThumbnailWrapper } from "./thumbnail-wrapper";

describe("ThumbnailWrapper component", () => {
  it("renders wrapper with saved title icon", () => {

    const Thumbnail = () => <div data-testid="thumbnail">Thumbnail</div>;

    const thumbnailWrapperProps: IThumbnailWrapperProps = {
      id: "id",
      Thumbnail,
      empty: false,
      selected: true,
      setSelectedContainerId: (id: string) => undefined,
      clearContainer: (id: string) => undefined,
      disabled: false
    };

    render(<ThumbnailWrapper {...thumbnailWrapperProps} />);
    expect(screen.getAllByTestId("thumbnail-wrapper")).toHaveLength(1);
    expect(screen.getAllByTestId("thumbnail-button")).toHaveLength(1);
    expect(screen.getAllByTestId("thumbnail-title")).toHaveLength(1);
    expect(screen.getByTestId("thumbnail-title")).toHaveClass("saved");
    expect(screen.getAllByTestId("thumbnail")).toHaveLength(1);
  });

  it("renders wrapper without saved title icon", () => {
    const Thumbnail = () => <div data-testid="thumbnail">Thumbnail</div>;

    const thumbnailWrapperProps: IThumbnailWrapperProps= {
      id: "A",
      Thumbnail,
      selected: true,
      empty: false,
      setSelectedContainerId: (containerId: string) => undefined,
      clearContainer: (containerId: string) => undefined,
      disabled: false
    };

    render(<ThumbnailWrapper { ...thumbnailWrapperProps } />);
    expect(screen.getAllByTestId("thumbnail-wrapper")).toHaveLength(1);
    expect(screen.getAllByTestId("thumbnail-button")).toHaveLength(1);
    expect(screen.getAllByTestId("thumbnail-title")).toHaveLength(1);
    expect(screen.getAllByTestId("thumbnail")).toHaveLength(1);
  });
});
