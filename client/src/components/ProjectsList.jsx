import React from "react";
import Project from "./Project.jsx";
import { useNavigate } from "react-router-dom";
const ProjectsList = ({ projects }) => {
  const navigateTo = useNavigate();
  const handleclick = (project) => {
    navigateTo("/project", { state: { project } });
  };
  return (
    <div>
      <ul>
        {projects.map((project, key) => {
          return (
            <li
              key={key}
              onClick={() => {
                handleclick(project);
              }}
            >
              {project.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProjectsList;
