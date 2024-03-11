import React from "react";
import { useLocation } from 'react-router-dom';
const Project = () => {
  const { state } = useLocation()
  const { project } = state
  return(
    <div>
    <h3>{project.name}</h3>
    <h3>{project.description}</h3>
  </div>
  ) 
};

export default Project;
