import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ProjectsList from "./components/project/ProjectsList.jsx";
import axios from "axios";
import Navbar from "./components/Navbar.jsx";
import Kanban from "./components/tasks/Kanban.jsx";
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
      <div className="mx-5 my-5 border-4 p-5">
        <Routes>
          <Route path="/" element={<ProjectsList projects={projects} />} />
          <Route path="/project" element={<Kanban />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
