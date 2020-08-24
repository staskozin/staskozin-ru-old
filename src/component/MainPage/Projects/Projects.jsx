import React, { useState, useEffect } from 'react';

import './Projects.scss';
import Square from './Square/Square';

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('https://staskozin.ru/api/get_projects.php')
      .then(r => r.json())
      .then(r => setProjects(r));
  }, []);

  return (
    projects.length !== 0 &&
    <>
      <div className="squares">
        {projects.filter(project => !project.archived).map(project => <Square data={project} key={project.project_id} />)}
      </div>
      <h2>Архивные проекты</h2>
      <div className="squares">
        {projects.filter(project => project.archived).map(project => <Square data={project} key={project.project_id} />)}
      </div>
    </>
  )
}
