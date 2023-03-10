const initialData = {
    tasks: {
        'task-1': {id: 'task-1', text: 'Task 1'},
        'task-2': {id: 'task-2', text: 'Task 2'},
        'task-3': {id: 'task-3', text: 'Task 3'},
        'task-4': {id: 'task-4', text: 'Task 4'},
        'task-5': {id: 'task-5', text: 'Task 5'},
        'task-6': {id: 'task-6', text: 'Task 6'},
        'task-7': {id: 'task-7', text: 'Task 7'},
        'task-8': {id: 'task-8', text: 'Task 8'},
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'To do',
            tasksIds: ['task-1', 'task-2', 'task-3', 'task-4'],
        },
        'column-2': {
            id: 'column-2',
            title: 'Not to do',
            tasksIds: ['task-5', 'task-6', 'task-7', 'task-8'],
        },
    },
    columnOrder: ['column-1', 'column-2'],
}

const newInitialData = {
    'column-1': {
        id: 'column-1',
        title: 'To do',
        tasks: ['task-1', 'task-2', 'task-3', 'task-4'],
    },
    'column-2': {
        id: 'column-2',
        title: 'Not to do',
        tasks: ['task-5', 'task-6', 'task-7', 'task-8'],
    },

}

export default newInitialData;

