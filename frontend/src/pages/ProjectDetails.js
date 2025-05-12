import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      const res = await axios.get(`/api/projects/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setProject(res.data);
      const bugRes = await axios.get(`/api/bugs/project/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setBugs(bugRes.data);
    };
    fetchData();
  }, [id]);

  if (!project) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <Link to={`/add-bug/${project._id}`}>Add Bug</Link>
      <h3>Bugs</h3>
      <ul>
        {bugs.map((bug) => (
          <li key={bug._id}>{bug.title} - {bug.status}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectDetails;
