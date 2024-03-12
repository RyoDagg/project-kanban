import { useState } from 'react'
import tasksData from '../../data/tasks.json'
import TaskCard from './TaskCard'

const Kanban = () => {
    +
    const [todo, setTodo] = useState(tasksData.filter(task => task.state === 'Todo'))
    const [doing, setDoing] = useState(tasksData.filter(task => task.state === 'Doing'))
    const [done, setDone] = useState(tasksData.filter(task => task.state === 'Done'))

    const handleDrop = (event, state) => {
        event.preventDefault()
        const id = event.dataTransfer.getData('id')
    }

    return (
        <div className='flex divide-x'>
            <div
                onDrop={event => handleDrop(event, 'Todo')}
                onDragOver={event => event.preventDefault()}
            >
                <h1 className='text-[30px] font-bold'>Todo</h1>
                {todo.map((task, i) => <TaskCard key={i} task={task} />)}
            </div>

            <div
                onDrop={event => handleDrop(event, 'Doing')}
                onDragOver={event => event.preventDefault()}
            >
                <h1 className='text-[30px] font-bold'>Doing</h1>
                {doing.map((task, i) => <TaskCard key={i} task={task} />)}
            </div>

            <div
                onDrop={event => handleDrop(event, 'Done')}
                onDragOver={event => event.preventDefault()}
            >
                <h1 className='text-[30px] font-bold'>Done</h1>
                {done.map((task, i) => <TaskCard key={i} task={task} />)}
            </div>

        </div>
    )
}

export default Kanban
