import axios from "axios"
import { useState } from "react"

const AddUsers = ({ addUser }) => {

    const [query, setQuery] = useState('')
    const [users, setUsers] = useState([])

    const search = (query) => {

        axios.post("http://localhost:3000/api/user/search",
            {
                query
            },
            {
                headers: {
                    'x-token': localStorage.getItem('x-token')
                }
            }
        ).then(({ data }) => {
            setUsers(data)
        })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className="modal fade" id="usersModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog ">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">New Project</h1>
                        <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label htmlFor="recipient-name" className="col-form-label">Name or Email</label>
                            <div className="flex">
                                <input className="form-control" placeholder="Search..." type="text" onChange={(event) => { setQuery(event.target.value) }} />
                                <button className="btn btn-primary" onClick={() => { search(query) }}>Search</button>
                            </div>
                            <div className="border-2 rounded my-2 p-3">
                                {users.map(user =>
                                    <div className="border flex justify-between shadow-sm rounded-sm my-2 px-5 py-1" key={user.id}>
                                        <div className="text[#f0f0f0] text-[22px]">
                                            {user.fullName}
                                        </div>
                                        <button className="btn shadow-sm btn-outline-success" onClick={() => addUser(user.id)}>Add +</button>
                                    </div>)
                                }
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-info"
                            data-bs-dismiss="modal"
                        // onClick={() => { create(name, des) }}
                        >Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddUsers
