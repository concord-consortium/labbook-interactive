import React from "react";
import styled from "styled-components";
import classNames from "classnames";

const TitleDiv = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
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
  &.empty {
    display: none;
  }
`;

interface IProps {
  title?: string;
  empty: boolean;
}

export const ThumbnailTitle: React.FC<IProps> = ({ title, empty }) => {
  const className = classNames("title", {empty});
  return (
    <TitleDiv className={className} data-testid="thumbnail-title">
        {title}
    </TitleDiv>
  );

};
