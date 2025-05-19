import { useState } from 'react';
import UrlTable from '@components/UrlTable';
import SearchBar from '@components/SearchBar';
import Loading from '@components/Loading';
import ErrorMessage from '@components/ErrorMessage';
import Pagination from '@components/Pagination';
import { Link } from 'react-router-dom';
import { useSorting } from '@hooks/useSorting';
import { useFiltering } from '@hooks/useFiltering';
import { useTopUrls } from '@hooks/useTopUrls'

const TopUrls = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const urlsPerPage = 10;

  const { urls, loading, error } = useTopUrls();
  const filteredUrls = useFiltering(urls, searchTerm);

  const {
    sortedData: sortedUrls,
    sortConfig: { key: sortColumn, direction: sortDirection },
    requestSort
  } = useSorting(filteredUrls);

  const handlePageChange = (page) => setCurrentPage(page);

  // Pagination logic
  const indexOfLast = currentPage * urlsPerPage;
  const indexOfFirst = indexOfLast - urlsPerPage;
  const currentUrls = sortedUrls.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredUrls.length / urlsPerPage);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-end">
        <Link to="/new" className="btn btn-primary">
          Shorten new URL
        </Link>
      </div>

      <h2 className="my-5">Top 100 URLs</h2>
      <SearchBar query={searchTerm} onChange={setSearchTerm} />
      <UrlTable urls={currentUrls} sortColumn={sortColumn} sortDirection={sortDirection} handleSort={requestSort} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default TopUrls;
