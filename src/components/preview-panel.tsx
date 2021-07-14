import React from "react";
import styled from "styled-components";
import {IThumbnailProps } from "./thumbnail-chooser/thumbnail";


const Container = styled.div `
  width: 455px;
  height: 300px;
  padding: 0px;
  margin: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

const PreviewPanelDiv = styled.div `
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
  return(
    <Container>
      <ToolBar/>
      <PreviewPanelDiv>
        <ItemViewDiv>
          {item?.content}
        </ItemViewDiv>
      </PreviewPanelDiv>
    </Container>

  );
};