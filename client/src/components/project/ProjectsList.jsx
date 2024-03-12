import ProjectCard from "./ProjectCard.jsx";
const ProjectsList = ({ projects }) => {



  return (
    <div className="flex gap-4 justify-around flex-wrap">
        {projects.map((project, key) => {
          return (
            <ProjectCard
              key={key}
              project={project}              
            />
          );
        })}
    </div>
  );
};

export default ProjectsList;
