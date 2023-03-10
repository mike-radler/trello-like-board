import React from 'react';
import styled from "styled-components";
import {Draggable} from "react-beautiful-dnd";

const Task = ({...props}) => {
    const Container = styled.div`
    background-color: ${args => (args.isDragging?'chartreuse':'lightblue')}
    `

    return (
        <Draggable key={props.task} draggableId={props.task} index={props.index}>
            {(provided, snapshot) => (
                <Container className="element"
                     ref={provided.innerRef}
                     {...provided.draggableProps}
                     {...provided.dragHandleProps}
                     isDragging={snapshot.isDragging}
                >
                    {props.task}
                </Container>
            )}
        </Draggable>
    );
};

export default Task;