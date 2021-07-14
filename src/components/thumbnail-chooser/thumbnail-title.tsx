import React from "react";
import styled from "styled-components";


const LabelChit = styled.div`
  position: absolute;
  top: 1px;
  left: 1px;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 26px;
  height: 26px;
  z-index: 10;
  // padding: 2px 8px 5px 7px;
  border-radius: 8px 0px;
  border: solid 1px var(--cc-charcoal);
  border-top: none;
  border-left: none;
  background-color: var(--white);

  font-family: Lato;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: var(--cc-charcoal);
`;

interface IProps {
  title?: string;
  empty: boolean;
}

export const ThumbnailTitle: React.FC<IProps> = ({ title, empty }) => {
  return (
    <LabelChit data-testid="thumbnail-title">
      {title}
    </LabelChit>
  );
};
