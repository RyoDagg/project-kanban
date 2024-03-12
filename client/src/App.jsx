import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Project from "./components/project/Project.jsx";
// import projectsData from "../data/projects.json";
import ProjectsList from "./components/project/ProjectsList.jsx";
import axios from "axios";
import Navbar from "./components/Navbar.jsx";
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
  const createproject = (name, description) => {
    axios.post("http://localhost:3000/api/project", {
      name: name, description: description
    }).then(() => {
      setDummy(!dummy)
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <>
      <Navbar />
      <div className="mx-5 my-5 border-8 p-5">
        <Routes>
          <Route path="/" element={<ProjectsList projects={projects} />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
