import React, {useEffect} from 'react';
import {DragDropContext} from "react-beautiful-dnd";
import TasksList from "./TasksList";
import newInitialData from "../initial";

class Board extends React.Component {
    constructor(props) {
        super(props);
        // this.boards = newInitialData
        // localStorage.clear()
        let dataFromStorage = localStorage.getItem('boards');
        if (!dataFromStorage) {
            this.boards = newInitialData
            localStorage.setItem('boards', JSON.stringify(newInitialData));
        } else {
            this.boards = JSON.parse(dataFromStorage);
        }
    }

    onDragEnd = result => {
        console.log('this.boards:', this.boards)
        console.log('result:', result)
        const {destination, source, draggableId} = result
        const column = this.boards[destination.droppableId]
        const newTasks = Array.from(column.tasks)
        if (!destination) {
            return;
        }
        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }
        if (source.droppableId !== destination.droppableId) {
            this.boards[source.droppableId].tasks.splice(source.index, 1)
            newTasks.splice(destination.index, 0, draggableId)
            this.boards[destination.droppableId].tasks = newTasks
        } else {
            newTasks.splice(source.index, 1)
            newTasks.splice(destination.index, 0, draggableId)
            this.boards[source.droppableId].tasks = newTasks
        }

        this.saveBoardsOnStorage()
        console.log('column:', column)
    }
    saveBoardsOnStorage = () => {
        localStorage.setItem('boards', JSON.stringify(this.boards));
    }
    // componentDidMount(){
    //     let dataFromStorage = localStorage.getItem('boards');
    //     // this.boards = JSON.parse(dataFromStorage);
    // }
    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <div className="board">
                    {Object.keys(this.boards).map((column, index) => (
                        <TasksList
                            key={index}
                            column={this.boards[column]}
                            index={index}
                        />
                    ))}
                </div>
            </DragDropContext>
        );
    }
}

export default Board;