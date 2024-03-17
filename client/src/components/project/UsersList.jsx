import axios from "axios";
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import AddUsers from "./AddUsers";

const UsersList = () => {
    const [users, setUsers] = useState([]);

    const { state } = useLocation();
    const { project } = state;

    useEffect(() => {
        fetchUsers();
    }, []);

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
            <AddUsers />
            <div className="text-right px-5 ml-3 mr-5 rounded border py-2">
                <button className="btn btn-lg btn-success" data-bs-toggle="modal" data-bs-target="#usersModal">Add Users</button>
            </div>
            <div className="grid grid-cols-3 gap-2">
                {users.map((user, i) => (
                    <div key={i}
                        className="max-w-[350px] min-w-[250px] m-[10px] rounded shadow-sm border-2 divide-y-2 cursor-pointer duration-200"
                    >
                        <div
                            className="p-4 hover:bg-slate-200"
                        >
                            <div
                                className="flex pb-3"
                            >
                                <div className="w-[70px] h-[70px] mx-2 p-0 rounded-[100%] border-[#CCCC19] border-2 overflow-hidden">
                                    <img className="w-[70px] h-[70px]" src="https://images-platform.99static.com//mh-2eBkhpKIAbon0e9-u0BixeSI=/0x0:1580x1580/fit-in/500x500/99designs-contests-attachments/64/64128/attachment_64128700" alt="" />
                                </div>
                                <div
                                    className="text-[#303030] mx-2 p-2 text-[500] text-[22px]">{user.fullName}</div>
                            </div>
                            <div
                                className="pl-4 pr-2 text-[16px]"
                            >
                                {user.email}
                            </div>
                        </div>

                        <div className="p-2 text-right">

                            <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#DELETE"
                                onClick={() => {
                                    // setProject(project)
                                }}
                            >🍄
                            </button>

                        </div>
                    </div >
                )

                )}
            </div>
        </div>
    )
}

export default UsersList
