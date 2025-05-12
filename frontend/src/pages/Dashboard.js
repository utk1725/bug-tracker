import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [projects, setProjects] = useState([]);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('/api/projects', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setProjects(res.data);
    } catch (err) {
      console.error(err);
      navigate('/login');
    }
  };

  useEffect(() => {
    fetchData();
    setUser(JSON.parse(localStorage.getItem('user')));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="p-4">
      <h2>Welcome {user?.username}</h2>
      <button onClick={handleLogout}>Logout</button>
      <h3 className="mt-4">Projects</h3>
      <ul>
        {projects.map((project) => (
          <li key={project._id}>
            {project.name} — <a href={`/project/${project._id}`}>View</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
