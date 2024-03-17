import axios from "axios";
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import AddUsers from "./AddUsers";
import UserCard from "./UserCard";

const UsersList = () => {
    const [users, setUsers] = useState([]);

    const { state } = useLocation();
    const { project } = state;

    useEffect(() => {
        fetchUsers();
    }, []);


    const addUser = (userId) => {
        axios.post("http://localhost:3000/api/project/addUser", {
            userId,
            projectId: project.id
        })
            .then(() => {
                window.location.reload()
            }
            )
            .catch(console.log)
    }

    const fetchUsers = async () => {
        try {
            const { data } = await axios(`http://localhost:3000/api/project/${project.id}/users`)
            setUsers(data)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <AddUsers addUser={addUser} />
            <div className="text-right px-5 ml-3 mr-5 rounded border py-2">
                <button className="btn btn-lg btn-success" data-bs-toggle="modal" data-bs-target="#usersModal">Add Users</button>
            </div>
            <div className="grid grid-cols-3 gap-2">
                {users.map((user, i) => (
                    <UserCard key={i} user={user} />
                )

                )}
            </div>
        </div>
    )
}

export default UsersList
