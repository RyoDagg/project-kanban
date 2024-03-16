import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
const EditProject = () => {
  const { state } = useLocation();
  const { project } = state;
  console.log(state);
  const navigateTo = useNavigate();
  const [name, setName] = useState(project.name);
  const [desc, setDesc] = useState(project.description);
  const [query, setQuery] = useState('')
  const [users, setUsers] = useState([])

  const updated = (name, description) => {
    axios
      .put(`http://localhost:3000/api/project/${project.id}`, {
        name,
        description,
      })
      .then(() => {
        navigateTo("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const search = (query) => {

    axios.post("http://localhost:3000/api/user/search",
      {
        query
      }).then(({ data }) => {
        setUsers(data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  const addUser = (userId) => {
    axios.post("http://localhost:3000/api/project/addUser", {
      userId,
      projectId: project.id
    }).then(console.log).catch(console.log)
  }
  return (
    <div className="">

      <div className="flex justify-center">
        <div className="w-[400px] p-[20px] mt-[90px] rounded-md shadow-sm border-2">
          <h1 className="text-center text-[25px] text-[#3D1CE3] font-[600]">
            Edit
          </h1>
          <div className="py-[5px] my-[5px]">
            <div className="py-[5px] my-[5px]">
              <label className="text-[#3116B6] text-[17px]" htmlFor="">
                Title
              </label>

              <input
                className="form-control"
                type="text"
                placeholder="name"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </div>
            <div className='py-[5px] my-[5px]'>
              <label className='text-[#3116B6] text-[17px]'
                htmlFor="">Description</label>
              <textarea
                className="form-control"
                type="text"
                placeholder="description"
                value={desc}
                onChange={(event) => {
                  setDesc(event.target.value);
                }}

              />
            </div >
            <div className="text-center my-2">
              <button className="btn btn-success"
                type="button"
                onClick={() => {
                  updated(name, desc);
                }}
              >
                Edit
              </button>
            </div>
            <input type="text" onChange={(event) => { setQuery(event.target.value) }} />
            <button onClick={() => { search(query) }}>Search</button>
            <ul>
              {users.map(user => <li key={user.id}>{user.fullName} <button onClick={() => addUser(user.id)}>Add</button></li>)}
            </ul>
          </div>
        </div>
      </div>

    </div>

  );
};

export default EditProject;
