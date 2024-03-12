import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import TaskCard from "./TaskCard";

const Kanban = () => {
    const [tasks, setTasks] = useState([]);
    const [todo, setTodo] = useState([]);
    const [doing, setDoing] = useState([]);
    const [done, setDone] = useState([]);
    const { state } = useLocation();
    const { project } = state;
    useEffect(() => {
        fetchTasks();
    }, []);

    useEffect(() => {
        setTodo(tasks.filter((task) => task.state === "Todo"));
        setDoing(tasks.filter((task) => task.state === "Doing"));
        setDone(tasks.filter((task) => task.state === "Done"));
    }, [tasks]);

    const fetchTasks = async () => {
        const { data } = await axios(
            `http://localhost:3000/api/project/${project.id}/tasks`
        );
        setTasks(data);
    };

    const handleDrop = async (event, state) => {
        event.preventDefault();
        const id = event.dataTransfer.getData("id");
        console.log(id, state);
        await axios.put("http://127.0.0.1:3000/api/task/" + id, { state });
        fetchTasks();
    };

    return (
        <div className="grid grid-cols-3 divide-x">
            <div
                className="bg-[#E3E3E3] mx-2 rounded min-h-[400px]"
                onDrop={(event) => handleDrop(event, "Todo")}
                onDragOver={(event) => event.preventDefault()}
            >
                <h1 className="text-[30px] text-center text-[#1F0E71] font-bold">🎯 Todo</h1>
                {todo.map((task, i) => (
                    <TaskCard key={i} task={task} />
                ))}
            </div>

            <div
                className="bg-[#E3E3E3] mx-2 rounded min-h-[400px]"
                onDrop={(event) => handleDrop(event, "Doing")}
                onDragOver={(event) => event.preventDefault()}
            >
                <h1 className="text-[30px] text-center text-[#120844] font-bold">📝 Doing</h1>
                {doing.map((task, i) => (
                    <TaskCard key={i} task={task} />
                ))}
            </div>

            <div
                className="bg-[#E3E3E3] mx-2 rounded min-h-[400px]"
                onDrop={(event) => handleDrop(event, "Done")}
                onDragOver={(event) => event.preventDefault()}
            >
                <h1 className="text-[30px] text-center text-[#120844] font-bold">✅ Done</h1>
                {done.map((task, i) => (
                    <TaskCard key={i} task={task} />
                ))}
            </div>
        </div>
    );
};

export default Kanban;
