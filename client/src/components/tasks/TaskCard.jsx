import axios from "axios"
const TaskCard = ({ task, fetchTasks }) => {

    const deleteTask = async (id) => {
        try {
            await axios.delete("http://127.0.0.1:3000/api/task/" + id)
            fetchTasks()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div
            onDragStart={
                event => {
                    event.dataTransfer.setData("id", task.id)
                    event.target.style.opacity = 0.7
                }
            }
            onDragEnd={
                event => {
                    event.target.style.opacity = 1
                }

            }
            draggable
            className="bg-[#fff] hover:bg-[#f7f7f7] duration-100 cursor-pointer shadow rounded-md border-2 p-3 m-3 text-[16px] text-[#202020]">
            <h1 className="font-[500]">
                {task.name}
            </h1>
            <p>{task.description}</p>
            <button type="button" className="btn btn-outline-danger" onClick={() => { deleteTask(task.id) }} >❌</button>
        </div>
    )
}

export default TaskCard
