import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function AddBug() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post(`/api/bugs/${id}`, { title, description }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      navigate(`/project/${id}`);
    } catch (err) {
      alert('Error adding bug');
    }
  };

  return (
    <div className="p-4">
      <h2>Add Bug</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Bug Title" value={title} onChange={e => setTitle(e.target.value)} required />
        <textarea placeholder="Bug Description" value={description} onChange={e => setDescription(e.target.value)} required />
        <button type="submit">Submit Bug</button>
      </form>
    </div>
  );
}

export default AddBug;
