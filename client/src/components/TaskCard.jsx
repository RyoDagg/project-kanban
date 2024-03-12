const TaskCard = ({ task }) => {
    return (
        <div
            onDragStart={event => event.dataTransfer.setData("id", task.id)}
            draggable
            className="bg-yellow-100 rounded-md p-2 m-5">
            <h1 className="text-[25px]">{task.name}</h1>
            <p>{task.description}</p>
        </div>
    )
}

export default TaskCard
