import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import TaskSlot from "./TaskSlot";
import SideBar from "../SideBar.jsx";

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

    const kanbanSlots = [
        { id: 1, title: '🎯 Todo', role: 'Todo', data: todo },
        { id: 2, title: '📝 Doing', role: 'Doing', data: doing },
        { id: 3, title: '✅ Done', role: 'Done', data: done },
    ];

    const fetchTasks = async () => {
        const { data } = await axios(
            `http://localhost:3000/api/project/${project.id}/tasks`
        );
        setTasks(data);
    };

    const handleDrop = async (event, state) => {
        event.preventDefault();
        const id = event.dataTransfer.getData("id");
        await axios.put("http://127.0.0.1:3000/api/task/" + id, { state });
        fetchTasks();
    };

    return (
        <div className="flex">
            <SideBar />
            <div className="mx-5 my-5 border-4 p-5">
                <div className="grid grid-cols-3">
                    {kanbanSlots.map((slot) => <TaskSlot key={slot.id} handleDrop={handleDrop} {...slot} />)}
                </div>
            </div>
        </div>
    );
};

export default Kanban;
