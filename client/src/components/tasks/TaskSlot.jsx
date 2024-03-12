import TaskCard from "./TaskCard"

const TaskSlot = ({ data, title, handleDrop, role }) => {
    return (
        <div className="mx-2"
            onDrop={(event) => handleDrop(event, role)}
            onDragOver={(event) => event.preventDefault()}
        >
            <h1 className="text-[25px] bg-[#E9E949] py-3 shadow rounded px-6 text-[#1F0E71] font-bold">
                {title}
            </h1>

            <div
                className="bg-[#efefef] overflow-y-scroll pb-3 rounded min-h-[250px] max-h-[500px]"
            >
                {data.map((task, i) => (
                    <TaskCard key={i} task={task} />
                ))}
            </div>
        </div>
    )
}

export default TaskSlot
