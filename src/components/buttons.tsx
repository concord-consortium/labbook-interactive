import React from "react";
import styled from "styled-components";

const ButtonBack = styled.div `
  width: 152px;
  height: 34px;
  margin: 5px 10px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  border: solid 1.5px var(--cc-charcoal-light-1);
  background-color: var(--cc-teal-light-5);
  font-family: Lato;
  color: var(--cc-charcoal);
  &:hover {
    background-color: var(--cc-teal-light-4);
  }
  &:active {
    background-color: var(--cc-teal-light-3);
  }
  svg {
    margin-right: 5px;
  }
`;

export interface IUploadButtonProps {label?:string}

export const UploadButton: React.FC<IUploadButtonProps> = (props) => {
  const {children} = props;
  return (
    <ButtonBack>
      {children}
    </ButtonBack>
  );
};
