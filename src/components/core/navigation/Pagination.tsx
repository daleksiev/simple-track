interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className = "",
}: PaginationProps) {
  return (
    <div className={`join ${className}`}>
      <button
        className="join-item btn"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
      >
        «
      </button>
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          className={`join-item btn ${
            currentPage === index + 1 ? "btn-active" : ""
          }`}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button
        className="join-item btn"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
      >
        »
      </button>
    </div>
  );
}
