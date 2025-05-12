import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminDashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem('token');
      const res = await axios.get('/api/auth/users', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUsers(res.data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="p-4">
      <h2>Admin Dashboard</h2>
      <h3>All Users</h3>
      <ul>
        {users.map((user) => (
          <li key={user._id}>{user.username} - {user.role}</li>
        ))}
      </ul>
    </div>
  );
}

export default AdminDashboard;
