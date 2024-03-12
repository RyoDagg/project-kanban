const TaskCard = ({ task }) => {
    return (
        <div
            onDragStart={event => event.dataTransfer.setData("id", task.id)}
            draggable
            className="bg-white shadow rounded-md border-2 p-3 m-3">
            <h1
                className="text-[17px] font-[500]"
            >
                {task.name}
            </h1>
            <p>{task.description}</p>
        </div>
    )
}

export default TaskCard
