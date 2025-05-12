import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('/api/projects')
      .then(res => setProjects(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">All Projects</h2>
      <ul>
        {projects.map(project => (
          <li key={project._id} className="mb-2 border p-2 rounded">
            <strong>{project.title}</strong> - {project.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
