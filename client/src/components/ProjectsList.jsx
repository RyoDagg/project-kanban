import { useNavigate } from "react-router-dom";
const ProjectsList = ({ projects }) => {

  const navigateTo = useNavigate();


  return (
    <div>
      <ul>
        {projects.map((project, key) => {
          return (
            <li
              key={key}
              onClick={() => {
                navigateTo("/project", { state: { project } });
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
