import React, {useState} from "react";
import { ThumbnailWrapper } from "./thumbnail-wrapper";
import {IThumbnailProps, ThumbnailModelID} from "./thumbnail";
import NextButtonIcon from "../../assets/arrow-next-icon.svg";
import PrevButtonIcon from "../../assets/arrow-previous-icon.svg";
import styled from "styled-components";
import "./thumbnail-chooser.scss";
interface basicButtonProps {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  enabled: boolean;
}

const ButtonBack = styled.button`
  width: 44px;
  height: 44px;
  margin: 10px;
  border-radius: 4px;
  background-color: var(--white);
  border: none;
  opacity: ${props => props.disabled ? 0.35 : 1.0};
  &:hover{
    background-color: ${ props => props.disabled
      ? "var(--white)"
      : "var(--cc-teal-light-5)"
    };
  }
  &:active {
    background-color: ${ props => props.disabled
      ? "var(--white)"
      : "var(--cc-teal-light-3)"
    };
  }
`;

const ButtonIconContainer = styled.div`
  width: 24px;
  height: 24px;
  margin: 10px 10px 14px;
  object-fit: contain;
`;

const PrevButton:React.FC<basicButtonProps> = (props: basicButtonProps) => {
  const {onClick, enabled} = props;
  return(
    <ButtonBack onClick={onClick} disabled={!enabled}>
      <ButtonIconContainer>
        <PrevButtonIcon/>
      </ButtonIconContainer>
    </ButtonBack>
  );
};

const NextButton:React.FC<basicButtonProps> = (props: basicButtonProps) => {
  const {onClick, enabled} = props;
  return(
    <ButtonBack onClick={onClick} disabled={!enabled}>
      <ButtonIconContainer>
        <NextButtonIcon/>
      </ButtonIconContainer>
    </ButtonBack>
  );
};

export interface IThumbnailChooserProps {
  items: Array<IThumbnailProps>;
  RenderingF: React.FC<IThumbnailProps>;
  selectedItemID: ThumbnailModelID | null;
  setSelectedItemId: (itemId: ThumbnailModelID) => void;
  clearSelectedItemId: (itemId: ThumbnailModelID) => void;
  disableUnselectedThumbnails?: boolean;
}

export const ThumbnailChooser: React.FC<IThumbnailChooserProps> = (props) => {
  const [offset, setOffset] = useState(0);
  const maxDisplayItems = 4;
  const maxItems = 12;

  const {
    items, RenderingF, selectedItemID,
    setSelectedItemId, clearSelectedItemId,
  } = props;


  return (
    <div className="thumbnail-chooser" data-testid="thumbnail-chooser">
      <PrevButton enabled={offset > 0} onClick={() => setOffset(offset -1)} />
      <div className="thumbnail-chooser-list">
        {items.map( (item, index) => {
          // Only display a subset of items
          if(index < offset) { return null; }
          if(index - offset >= maxDisplayItems) { return null; }
          const {id, empty} = item;
          console.log(id);
          const selected = id === selectedItemID;
          return (
            <ThumbnailWrapper
              id={id} Thumbnail={() => RenderingF(item)} key={id}
              selected={selected}
              setSelectedContainerId={setSelectedItemId}
              clearContainer={clearSelectedItemId}
              empty={empty}
              disabled={false} />
          );
        })}
      </div>

      <NextButton
        enabled={items.length - offset > maxDisplayItems}
        onClick={() => setOffset(offset +1)}/>
    </div>
  );
};
