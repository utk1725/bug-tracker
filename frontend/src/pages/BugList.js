import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BugList = () => {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    axios.get('/api/bugs')
      .then(res => setBugs(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">All Bugs</h2>
      <ul>
        {bugs.map(bug => (
          <li key={bug._id} className="mb-2 border p-2 rounded">
            <strong>{bug.title}</strong> - {bug.status} - {bug.priority}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BugList;
