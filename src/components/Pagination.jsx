export default function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
}) {
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div style={{ marginTop: '20px', textAlign: 'center' }}>
      <button onClick={handlePrev} disabled={currentPage === 1}>
        Previous
      </button>

      {[...Array(totalPages)].map((_, i) => {
        const page = i + 1;
        return (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            style={{
              margin: '0 5px',
              background: currentPage === page ? '#0a8f6a' : 'white',
              color: currentPage === page ? 'white' : 'black',
            }}
          >
            {page}
          </button>
        );
      })}

      <button onClick={handleNext} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
}
