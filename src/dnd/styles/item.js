import React from "react";
import styled from "@xstyled/styled-components";
import { borderRadius, grid } from "./constants";

const getBackgroundColor = (isDragging, isGroupedOver, authorColors) => {
  if (isDragging) {
    return authorColors.soft;
  }

  if (isGroupedOver) {
    return "#EBECF0";
  }

  return "#FFFFFF";
};

const getBorderColor = (isDragging, authorColors) =>
  isDragging ? authorColors.hard : "transparent";

const imageSize = 40;

// const CloneBadge = styled.div`
//   background: #79f2c0;
//   bottom: ${grid / 2}px;
//   border: 2px solid #57d9a3;
//   border-radius: 50%;
//   box-sizing: border-box;
//   font-size: 10px;
//   position: absolute;
//   right: -${imageSize / 3}px;
//   top: -${imageSize / 3}px;
//   transform: rotate(40deg);
//   height: ${imageSize}px;
//   width: ${imageSize}px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

const Container = styled.a`
  border-radius: ${borderRadius}px;
  border: 2px solid transparent;
  border-color: ${(props) => getBorderColor(props.isDragging, props.colors)};
  background-color: ${(props) =>
    getBackgroundColor(props.isDragging, props.isGroupedOver, props.colors)};
  box-shadow: ${({ isDragging }) =>
    isDragging ? `2px 2px 1px #A5ADBA` : "none"};
  box-sizing: border-box;
  padding: ${grid}px;
  min-height: ${imageSize}px;
  margin-bottom: ${grid}px;
  user-select: none;

  /* anchor overrides */
  color: #091e42;

  &:hover,
  &:active {
    color: #091e42;
    text-decoration: none;
  }

  &:focus {
    outline: none;
    border-color: ${(props) => props.colors.hard};
    box-shadow: none;
  }

  /* flexbox */
  display: flex;
`;

const BlockQuote = styled.div`
  &::before {
    content: open-quote;
  }
  &::after {
    content: close-quote;
  }
`;

function getStyle(provided, style) {
  if (!style) {
    return provided.draggableProps.style;
  }

  return {
    ...provided.draggableProps.style,
    ...style,
  };
}

const Content = styled.div`
  /* flex child */
  flex-grow: 1;
  /*
    Needed to wrap text in ie11
    https://stackoverflow.com/questions/35111090/why-ie11-doesnt-wrap-the-text-in-flexbox
  */
  flex-basis: 100%;
  /* flex parent */
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Align content to the top left */
`;

const Footer = styled.div`
  display: flex;
  margin-top: ${grid}px;
  justify-content: right;
  align-items: center; /* Align items to the bottom */
`;

const Avatar = styled.img`
  width: ${imageSize}px;
  height: ${imageSize}px;
  border-radius: 50%;
  margin-left: ${grid}px; /* Move the image to the left */
  flex-shrink: 0;
  flex-grow: 0;
`;

function QuoteItem(props) {
  const { quote, isDragging, isGroupedOver, provided, style, isClone, index } =
    props;

  return (
    <Container
      href={quote.author?.avatarUrl}
      isDragging={isDragging}
      isGroupedOver={isGroupedOver}
      isClone={isClone}
      colors={quote.author.colors}
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      style={getStyle(provided, style)}
      data-is-dragging={isDragging}
      data-testid={quote.id}
      data-index={index}
      aria-label={`${quote.author.name} quote ${quote.content}`}
    >
      <Content>
        <BlockQuote>{quote.content}</BlockQuote>
        <Footer>
          {/* <p>{quote.author.name}</p> */}
          <Avatar src={quote.author?.avatarUrl} alt={quote.author.name} />
        </Footer>
      </Content>
    </Container>
  );
}

export default React.memo(QuoteItem);
