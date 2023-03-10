import React, {useEffect} from 'react';
import {Droppable} from "react-beautiful-dnd";
import Task from "./Task";
import styled from "styled-components";
import {MySwal} from "../plugins/sweetAlert";

const TasksList = ({...args}) => {
    const TaskList = styled.div`
    background-color:${props => (props.isDraggingOver ? 'indigo' : 'blueviolet')}
    `
    const click = (column) => {
        MySwal.fire({
            title: 'Submit new task',
            input: 'text',
            inputPlaceholder: 'Task name',
            showCancelButton: true,
            reverseButtons: true,
            confirmButtonText: 'Add task',
            cancelButtonText: 'Cancel',
            icon: 'info',
            inputValidator: value => {
                if (!value) {
                    return 'You must give a name to the task';
                }
            },
            // preConfirm: (inputValue) => {
            //     let dataFromStorage = JSON.parse(localStorage.getItem('boards'))
            //     dataFromStorage[column].tasks.push(inputValue)
            //     localStorage.setItem('boards', JSON.stringify(dataFromStorage));
            //     console.log(dataFromStorage)
            // }
        }).then((result) => {

        })
    }

    return (
        <Droppable droppableId={args.column.id}>
            {(provided, snapshot) => (
                <TaskList className="list"
                          ref={provided.innerRef}
                          {...provided.droppableProps}
                          isDraggingOver={snapshot.isDraggingOver}
                          handle
                >
                    <div className="list-header">
                        <div className="list-header-title">
                            {args.column.title}
                        </div>
                        <button onClick={() => click(args.column.id)} className="list-header-button">+</button>
                    </div>
                    {
                        args.column.tasks.map((task, index) => (
                            <Task key={index} task={task} index={index}/>
                        ))
                    }
                    {provided.placeholder}
                </TaskList>
            )}
        </Droppable>
    );
};

export default TasksList;