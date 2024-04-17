import React from "react";
import styled from "styled-components";
import Card from "./Card";

import { Droppable } from "react-beautiful-dnd";

const Container = styled.div`
    background-color: #FBFBFB;
    border-radius: 10px;
    width: 400px;
    height: 430px;
    margin-top:10px;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    border: 0px solid gray;
    padding:5px;
    justify-content: space-between;
`;

const TaskList = styled.div`
    padding: 3px;
    transistion: background-color 0.2s ease;
    background-color: #f4f5f7;
    flex-grow: 1;
    min-height: 100px;
`;

export default function Column({ tasks, id }) {
    return (
        <Container className="column">
            
            <Droppable droppableId={id}>
                {(provided, snapshot) => (
                    <TaskList
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        isdraggingOver={snapshot.isdraggingOver}
                    >
                        {tasks.map((task, index) => (
                            <Card key={index} index={index} task={task} />
                        ))}
                        {provided.placeholder}
                    </TaskList>
                )}
            </Droppable>
        </Container>
    );
}