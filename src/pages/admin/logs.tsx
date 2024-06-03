import { useEffect, useState } from 'react';
import { Table } from 'shadcn';

export default function Logs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    // Logları API'den veya yerel depolamadan çekme işlemi
    const fetchedLogs = [
      { id: 1, user: 'user1@example.com', action: 'Logged in', timestamp: '2024-06-03 10:00:00' },
      { id: 2, user: 'user2@example.com', action: 'Added a product', timestamp: '2024-06-03 11:00:00' },
      // Diğer loglar
    ];
    setLogs(fetchedLogs);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">User Activity Logs</h1>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>User</th>
              <th>Action</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {logs.map(log => (
              <tr key={log.id}>
                <td>{log.id}</td>
                <td>{log.user}</td>
                <td>{log.action}</td>
                <td>{log.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
