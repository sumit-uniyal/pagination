import { useEffect, useState } from 'react';
import EmployeeTable from './components/EmployeeTable';
import Pagination from './components/Pagination';
import { fetchEmployees } from './services/api';

export default function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const rowsPerPage = 10;

  useEffect(() => {
    fetchEmployees()
      .then((res) => setData(res))
      .catch(() => alert('failed to fetch data'));
  }, []);

  // Pagination Logic HERE (no hook)
  const totalPages = Math.ceil(data.length / rowsPerPage);

  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = data.slice(startIndex, startIndex + rowsPerPage);

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>Employee Data Table</h2>

      <EmployeeTable data={currentData} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
