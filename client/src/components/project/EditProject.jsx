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

  return (
    <div>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="description"
        value={desc}
        onChange={(event) => {
          setDesc(event.target.value);
        }}
      />
      <button
        type="button"
        onClick={() => {
          updated(name, desc);
        }}
      >
        Edit
      </button>
    </div>
  );
};

export default EditProject;
