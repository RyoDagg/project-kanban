import ProjectCard from "./ProjectCard.jsx";

import { useEffect, useState } from "react";
import axios from "axios";
import Addproject from "./Addproject.jsx";
import Delete from "./Delete.jsx";
const ProjectsList = ({ user }) => {

  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetchAllProjects();

  }, []);


  const fetchAllProjects = () => {

    if (user) {
      axios
        .get(`http://localhost:3000/api/user/${user.id}/projects`)
        .then((response) => {
          setProjects([...response.data, ...response.data, ...response.data, ...response.data]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };


  const createproject = (name, description) => {
    console.log(name, description);
    axios
      .post("http://localhost:3000/api/project", {
        name,
        description,
        userId: user.id,
      })
      .then(() => { fetchAllProjects() })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteProject = (id) => {
    axios
      .delete(`http://localhost:3000/api/project/${id}`)
      .then(() => {
        fetchAllProjects()
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="mx-5 my-5 border-4 p-5">
      <Addproject create={createproject} />
      <Delete deleted={deleteProject} project={project} />
      <div className="flex gap-4 justify-around flex-wrap">
        {projects.map((project, key) => {
          return (
            <ProjectCard key={key} project={project} setProject={setProject} />
          );
        })}
      </div>

      <button
        data-bs-toggle="modal"
        data-bs-target="#Modal"
        className="btn btn-success"
      >
        Add Project
      </button>
    </div>
  );
};

export default ProjectsList;
