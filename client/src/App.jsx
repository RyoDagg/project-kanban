import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Project from "./components/Project.jsx";
import projectsData from "../data/projects.json";
import ProjectsList from "./components/ProjectsList.jsx";

function App() {
  const [projects, setProjects] = useState(projectsData);

  return (
    <div>
      <Routes>
        <Route path="/" element={<ProjectsList projects={projects} />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </div>
  );
}

export default App;
