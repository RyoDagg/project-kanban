import { useEffect, useContext, useState } from "react";
import axios from "axios";

import ProjectCard from "./ProjectCard.jsx";
import Addproject from "./Addproject.jsx";
import Delete from "./Delete.jsx";
import { GlobalContext } from "../Home.jsx";
const ProjectsList = () => {

  const [projects, setProjects] = useState([]);
  const [projectsMember, setProjectsMember] = useState([]);
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetchAllProjects();

  }, []);

  const user = useContext(GlobalContext)

  const fetchAllProjects = () => {

    if (user) {
      axios
        .get(`http://localhost:3000/api/user/${user.id}/projects`)
        .then((response) => {
          setProjects([...response.data]);
        })
        .catch((err) => {
          console.log(err);
        });

      axios
        .get(`http://localhost:3000/api/user/${user.id}/projectin`)
        .then((response) => {
          setProjectsMember(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };


  const createproject = (name, description) => {
    const token = localStorage.getItem('x-token')

    console.log(name, description);
    axios
      .post("http://localhost:3000/api/project", {
        name,
        description,
      },
        {
          headers: {

            'x-token': token
          }
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
    <>
      <Addproject create={createproject} />
      <Delete deleted={deleteProject} project={project} />
      <div className="mx-3 my-5 divide-y rounded border-1 border-[#120844] p-4 pt-2">
        <div className="flex justify-end px-3 py-2">
          <button
            data-bs-toggle="modal"
            data-bs-target="#Modal"
            className="btn btn-lg btn-success"
          >
            Add Project
          </button >
        </div>
        <div className="">
          <div className="grid border-1 rounded border-[#120844] gap-4 grid-cols-3 p-3 flex-wrap">
            {projects.map((project, key) => {
              return (
                <ProjectCard key={key} project={project} setProject={setProject} />
              );
            })}
          </div>
          <div className="grid gap-4 grid-cols-3 flex-wrap">
            {projectsMember.map((project, key) => {
              return (
                <ProjectCard key={key} project={project} setProject={setProject} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsList;
