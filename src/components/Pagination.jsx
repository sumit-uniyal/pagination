export default function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
}) {
  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handlePageClick = (page) => {
    setCurrentPage(() => page);
  };

  return (
    <div style={{ marginTop: '20px', textAlign: 'center' }}>
      {/* Previous */}
      <button onClick={handlePrev}>Previous</button>

      {/* Page Numbers */}
      {[...Array(totalPages)].map((_, i) => {
        const page = i + 1;

        return (
          <button
            key={page}
            onClick={() => handlePageClick(page)}
            style={{
              margin: '0 5px',
              padding: '5px 10px',
              backgroundColor: currentPage === page ? '#0a8f6a' : '#ffffff',
              color: currentPage === page ? '#ffffff' : '#000000',
              border: '1px solid #ccc',
            }}
          >
            {page}
          </button>
        );
      })}

      {/* Next */}
      <button onClick={handleNext}>Next</button>
    </div>
  );
}
