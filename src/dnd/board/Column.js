import React, { useState } from "react";
import styled from "@xstyled/styled-components";
import { colors } from "@atlaskit/theme";
import { grid, borderRadius } from "../styles/constants";
import { Draggable } from "react-beautiful-dnd";
import QuoteList from "../styles/list";
import Title from "../styles/title";
import { authors } from "../mockData";

const Container = styled.div`
  margin: ${grid}px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: ${borderRadius}px;
  border-top-right-radius: ${borderRadius}px;
  background-color: ${({ isDragging }) =>
    isDragging ? colors.G50 : colors.N30};
  transition: background-color 0.2s ease;
  &:hover {
    background-color: ${colors.G50};
  }
`;

const Column = (props) => {
  const title = props.title;
  const quotes = props.quotes;
  const index = props.index;

  const [newTask, setNewTask] = useState("");
  const [selectedAuthor, setSelectedAuthor] = useState("");

  const handleTaskCreate = () => {
    if (newTask && selectedAuthor) {
      const newTaskObject = {
        content: newTask,
        author: {
          name: selectedAuthor.name,
          id: selectedAuthor.id,
          avatarUrl: selectedAuthor.avatarUrl,
          colors: {
            ...selectedAuthor.colors,
          },
        },
        id: selectedAuthor.id,
      };
      props.addEntryToColumn(title, newTaskObject);
      setSelectedAuthor("");
      setNewTask("");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "25%",
        backgroundColor: "lightblue",
        margin: "0 10px",
        minHeight: "10vh",
      }}
    >
      <Draggable draggableId={title} index={index}>
        {(provided, snapshot) => (
          <>
            <Container ref={provided.innerRef} {...provided.draggableProps}>
              <Header isDragging={snapshot.isDragging}>
                <Title
                  isDragging={snapshot.isDragging}
                  {...provided.dragHandleProps}
                  aria-label={`${title} quote list`}
                >
                  {title}
                </Title>
              </Header>
              <QuoteList
                listId={title}
                listType="QUOTE"
                style={{
                  backgroundColor: snapshot.isDragging ? colors.G50 : null,
                }}
                quotes={quotes}
                internalScroll={props.isScrollable}
                isCombineEnabled={Boolean(props.isCombineEnabled)}
                useClone={Boolean(props.useClone)}
              />
            </Container>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                style={{ width: "80%" }}
                placeholder="Enter new task"
              />
              <select
                value={selectedAuthor ? selectedAuthor.id : ""}
                onChange={(e) => {
                  const selectedId = e.target.value;
                  const selectedAuthorObject = authors.find(
                    (author) => author.id === selectedId
                  );
                  setSelectedAuthor(selectedAuthorObject);
                }}
                style={{ width: "80%" }}
              >
                <option value="">Select User</option>
                {authors.map((author) => (
                  <option key={`column_${author.id}`} value={author.id}>
                    {author.name}
                  </option>
                ))}
              </select>
              <button
                onClick={handleTaskCreate}
                style={{
                  width: "80%",
                  cursor:
                    !selectedAuthor || !newTask ? "not-allowed" : "pointer",
                  backgroundColor: colors.B100
                }}
              >
                Add task
              </button>
            </div>
          </>
        )}
      </Draggable>
    </div>
  );
};

export default Column;
