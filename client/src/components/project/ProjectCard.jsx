import { useNavigate } from "react-router-dom";

const ProjectCard = ({ project }) => {
    const navigateTo = useNavigate();

    return (
        <div
            className="w-[250px] m-[10px] rounded shadow hover:bg-slate-200 cursor-pointer duration-200"
            onClick={() => {
                navigateTo("/project", { state: { project } });
            }}
        >
            <h1 className="text-center bg-[#3d1ce335]">{project.name}</h1>
            <div className="h-[150px]"></div>
        </div>
    )
}

export default ProjectCard
