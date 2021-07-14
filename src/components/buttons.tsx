import React from "react";
import styled from "styled-components";
import {IThumbnailProps } from "./thumbnail-chooser/thumbnail";


const ButtonText = styled.span `
  width: 100px;
  height: 19px;
  margin: 7px 0 8px 5px;
  font-family: Lato;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--cc-charcoal);
`;

const ButtonBack = styled.div `
  width: 152px;
  height: 34px;
  margin: 10px 20px 9px 0;
  padding: 0 10px 0 1px;
  border-radius: 4px;
  border: solid 1.5px var(--cc-charcoal-light-1);
  background-color: var(--cc-teal-light-5);
`;

export interface IUploadButtonProps {label:string}

export const UploadButton: React.FC<IUploadButtonProps> = (props) => {
  const {label} = props;
  return (
    <ButtonBack>
    <ButtonText> {label}
    </ButtonText>
    </ButtonBack>
  );
};
