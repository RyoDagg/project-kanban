import React from 'react'

const ProjectsList = ({ projects }) => {

    return (
        <div>

            <ul>
                {projects.map((project, key) => {
                    return (
                        <li key={key}>
                            {project.name}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ProjectsList
