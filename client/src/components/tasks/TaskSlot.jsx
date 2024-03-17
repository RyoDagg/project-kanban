import { useState } from "react";
import TaskCard from "./TaskCard"
import { InputModal } from "./InputModal.jsx";


const TaskSlot = ({ data, title, handleDrop, role, addTask,fetchTasks,  }) => {
    const [dragOver, setDragOver] = useState(false);

    return (
        <div className="mx-2"
            onDrop={(event) => {
                setDragOver(false)
                handleDrop(event, role)
            }}
            onDragOver={(event) => {
                setDragOver(true)
                event.preventDefault()
            }}
            onDragLeave={(event) => {
                setDragOver(false)
                event.preventDefault()
            }}
        >
            <h1 className="text-[28px] tracking-[7px] bg-[#E9E949] py-3 shadow rounded px-6 text-[#1F0E71] font-[700]">
                {title}
            </h1>

            <div
                className={`${dragOver ? "bg-[#e0e0e0]" : "bg-[#efefef]"} duration-100 overflow-y-scroll pb-3 rounded min-h-[250px] max-h-[500px]`}
            >
                {data.map((task, i) => (
                    <TaskCard key={i} task={task} fetchTasks={fetchTasks} />
                ))}

            </div>
            <InputModal addTask={addTask} role={role} />
            <button
                data-bs-toggle="modal"
                data-bs-target={'#' + role + "Modal"}
                className="btn btn-success"
            // onClick={() => { addTask }}
            >Add Task</button>
        </div>
    )
}

export default TaskSlot
