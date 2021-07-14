import React from "react";
import styled from "styled-components";
import { ThumbnailTitle } from "./thumbnail-chooser/thumbnail-title";
import { IThumbnailProps } from "./thumbnail-chooser/thumbnail";

const Wrapper = styled.div `
  display: flex;
  flex: 1;
  margin: 10px;
  margin-left: 5px;
  position: relative;
  border-radius: 8px;
  border: solid 1.5px var(--cc-charcoal-light-2);
  &:focus, &:focus-visible {
    border: solid 1.5px var(--cc-charcoal-light-3);
  }

`;

export const StyledTextArea =  styled.textarea`
  border-radius: 8px;
  border: none;
  padding-left: 32px;
  font-family: Lato;
  flex: 1;
`;

export interface ICommentFieldProps {
  item?: IThumbnailProps;
}

export const CommentField: React.FC<ICommentFieldProps> = (props) => {
  const {item} = props;
  const disabled = !item;
  const placeholder = disabled
    ? ""
    : "Add comment … "; // TODO: I18n

  return (
      <Wrapper>
        <ThumbnailTitle title={item?.id} empty={false}/>
        <StyledTextArea disabled={disabled} placeholder={placeholder}>
        </StyledTextArea>
      </Wrapper>
  );
};


