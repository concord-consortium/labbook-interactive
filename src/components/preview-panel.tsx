import React from "react";
import styled from "styled-components";
import {IThumbnailProps } from "./thumbnail-chooser/thumbnail";
import { ThumbnailTitle } from "./thumbnail-chooser/thumbnail-title";

const Container = styled.div `
  padding: 0px;
  margin: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

const PreviewPanelDiv = styled.div `
  position: relative;
  width: 451px;
  height: 300px;
  padding: 0px;
  border-radius: 0px 8px 8px 0px;
  border: solid 1.5px var(--cc-charcoal);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eaeaea;
`;


const ToolBar = styled.div `
  width: 44px;
  height: 300px;
  margin: 0px;
  padding: 0px;
  border-radius: 8px 0px 0px 8px;
  border: solid 1.5px var(--cc-charcoal);
  border-right: none;
  background-color: var(--cc-teal-light-7);
`;

const ItemViewDiv = styled.div `
  font-size: 24pt;
`;

export interface IPreviewPanelProps {
  item?: IThumbnailProps;
}

export const PreviewPanel: React.FC<IPreviewPanelProps> = (props) => {
  const {item} = props;
  const empty = item ? item.empty : true;
  return(
    <Container>
      <ToolBar/>
      <PreviewPanelDiv>
        <ThumbnailTitle empty={empty} title={item?.id}/>
        <ItemViewDiv>
          {item?.content}
        </ItemViewDiv>
      </PreviewPanelDiv>
    </Container>

  );
};