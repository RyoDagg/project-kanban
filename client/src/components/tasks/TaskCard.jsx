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
            className="bg-[#fff] hover:bg-[#f7f7f7] divide-y-2 duration-100 cursor-pointer shadow rounded-md border-2 pt-3 pb-1 px-2 m-3 text-[16px] text-[#202020]">

            <div>
                <div className="font-[500] pb-2">
                    {task.name}
                </div>
                <div className="py-2">
                    <p>{task.description}</p>
                </div>
            </div>
            <div className="py-1 text-right">
                <button className="btn btn-sm opacity-80 shadow btn-outline-danger" onClick={() => { deleteTask(task.id) }} >❌</button>
            </div>
        </div>
    )
}

export default TaskCard
