import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddProject() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('/api/projects', { name, description }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      navigate('/dashboard');
    } catch (err) {
      alert('Error creating project');
    }
  };

  return (
    <div className="p-4">
      <h2>Add Project</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Project Name" value={name} onChange={e => setName(e.target.value)} required />
        <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} required />
        <button type="submit">Create Project</button>
      </form>
    </div>
  );
}

export default AddProject;
