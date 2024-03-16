import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import TaskSlot from "./TaskSlot";

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

    const addTask = async (title, description, state) => {
        try {
            console.log(title, description, state, project.id)
            const result = await axios.post("http://127.0.0.1:3000/api/task", {
                name: title,
                description,
                state,
                projectId: project.id,
                userId: 1
            })
            console.log(result)
            fetchTasks()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="grid grid-cols-3">
            {kanbanSlots.map((slot) => <TaskSlot key={slot.id} addTask={addTask} fetchTasks={fetchTasks} handleDrop={handleDrop} {...slot} />)}
        </div>
    );
};

export default Kanban;
