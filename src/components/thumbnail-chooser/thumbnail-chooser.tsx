import React from "react";
import { ThumbnailWrapper } from "./thumbnail-wrapper";
import {IThumbnailProps, ThumbnailModelID} from "./thumbnail";
import "./thumbnail-chooser.scss";
import NextButtonIcon from "../../assets/arrow-next-icon.svg";
import PrevButtonIcon from "../../assets/arrow-previous-icon.svg";
import styled from "styled-components";

interface basicButtonProps {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  enabled: boolean;
}

const dummyClickHandler = (target="element") => {
  return (e: React.MouseEvent<HTMLElement>) => console.log(`clicked ${target}`);
};

const ButtonBack = styled.div`
  width: 44px;
  height: 44px;
  margin: 10px;
  border-radius: 4px;
  background-color: var(--white);
  &:hover{
    background-color: var(--cc-teal-light-5);
  }
  &:active {
    background-color: var(--cc-teal-light-3);
  }
`;

const ButtonIconContainer = styled.div`
  width: 24px;
  height: 24px;
  margin: 10px 10px 14px;
  object-fit: contain;
`;

const PrevButton:React.FC<basicButtonProps> = (props: basicButtonProps) => {
  return(
    <ButtonBack onClick={props.onClick}>
      <ButtonIconContainer>
        <PrevButtonIcon/>
      </ButtonIconContainer>
    </ButtonBack>
  );
};

const NextButton:React.FC<basicButtonProps> = (props: basicButtonProps) => {
  return(
    <ButtonBack onClick={props.onClick}>
      <ButtonIconContainer>
        <NextButtonIcon/>
      </ButtonIconContainer>
    </ButtonBack>
  );
};

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
  console.log(selectedItemID);
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
      <PrevButton enabled={true} onClick={() => dummyClickHandler()} />
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
      </div>
      <NextButton enabled={true} />
    </div>
  );
};
