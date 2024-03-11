import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Project from "./components/Project.jsx";
// import projectsData from "../data/projects.json";
import ProjectsList from "./components/ProjectsList.jsx";
import axios from "axios";
function App() {
  const [projects, setProjects] = useState([]);
  const [dummy, setDummy] = useState(false);

  useEffect(() => {
    fetchAllProjects();
  }, [dummy]);

  const fetchAllProjects = () => {
    axios
      .get("http://localhost:3000/api/project")
      .then((response) => {
        console.log(response.data);
        setProjects(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
