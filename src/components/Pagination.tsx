interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  filteredItems: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  totalItems,
  filteredItems,
  onPageChange,
}: PaginationProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mt-4 space-y-4 sm:space-y-0">
      <span className="text-sm">{filteredItems}/{totalItems} dữ liệu</span>

      <div className="flex items-center space-x-2">
        <button
          className="p-2 flex items-center justify-center disabled:opacity-50"
          onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
        >
          &lt;
        </button>

        {totalPages > 6 ? (
          <>
            <button
              className={`w-8 h-8 flex items-center justify-center ${currentPage === 1 ? 'bg-[#78C6E7] text-white font-bold' : ''}`}
              onClick={() => onPageChange(1)}
            >
              1
            </button>
            {currentPage > 3 && <span className="px-2">...</span>}

            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter(page => page === 1 || page === totalPages || Math.abs(page - currentPage) <= 1)
              .map(page => (
                <button
                  key={page}
                  className={`w-8 h-8 flex items-center justify-center ${currentPage === page ? 'bg-[#78C6E7] text-white font-bold' : ''}`}
                  onClick={() => onPageChange(page)}
                >
                  {page}
                </button>
              ))}

            {currentPage < totalPages - 2 && <span className="px-2">...</span>}
            <button
              className={`w-8 h-8 flex items-center justify-center ${currentPage === totalPages ? 'bg-[#78C6E7] text-white font-bold' : ''}`}
              onClick={() => onPageChange(totalPages)}
            >
              {totalPages}
            </button>
          </>
        ) : (
          [...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={`w-8 h-8 flex items-center justify-center rounded-md border ${currentPage === i + 1 ? 'bg-[#78C6E7] text-white font-bold' : ''}`}
              onClick={() => onPageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))
        )}

        <button
          className="p-2 flex items-center justify-center disabled:opacity-50"
          onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>

      <span className="flex items-center text-sm">
        <span className="text-gray-700 font-medium">Trang</span>
        <div className="ml-3 px-3 py-1 border rounded-lg bg-white shadow-sm text-[#55595D] font-semibold">
          {currentPage}
        </div>
      </span>
    </div>
  );
}
