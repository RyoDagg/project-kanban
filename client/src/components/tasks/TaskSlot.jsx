import TaskCard from "./TaskCard"

const TaskSlot = ({ data, title, handleDrop, role }) => {
    return (
        <div
            className="bg-[#efefef] mx-2 rounded min-h-[400px]"
            onDrop={(event) => handleDrop(event, role)}
            onDragOver={(event) => event.preventDefault()}
        >
            <h1 className="text-[30px] bg-[#E9E949] text-center text-[#1F0E71] font-bold">{title}</h1>
            {data.map((task, i) => (
                <TaskCard key={i} task={task} />
            ))}
        </div>
    )
}

export default TaskSlot
