import UrlRow from '@components/UrlRow';

const UrlTable = ({ urls, sortColumn, sortDirection, handleSort }) => {
  const renderSortIcon = (column) => {
    if (sortColumn !== column) return null;
    return sortDirection === 'asc' ? ' 🔼' : ' 🔽';
  };

  return (
    <table className="table table-hover table-bordered">
      <thead className="thead-dark">
        <tr className='text-center'>
          <th onClick={() => handleSort('id')} style={{ cursor: 'pointer' }}>
              ID {renderSortIcon('id')}
          </th>
          <th>Full URL</th>
          <th>Short Code</th>
          <th onClick={() => handleSort('click_count')} style={{ cursor: 'pointer' }}>
            Click Count {renderSortIcon('click_count')}
          </th>
        </tr>
      </thead>
      <tbody>
        {urls.map((url, index) => (
          <UrlRow url={url} key={index} />
        ))}
      </tbody>
    </table>
  );
};

export default UrlTable;
