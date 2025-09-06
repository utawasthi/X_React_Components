
type PaginationProps = {
  currentPage : number;
  totalPages : number;
  onPageChange : (page : number) => void;
}

function Pagination({currentPage , totalPages , onPageChange} : PaginationProps) {

  const pages = Array.from({length : totalPages} , (_ , i) => i + 1);

  return (
    <div className = 'my-1 flex flex-wrap items-center justify-center space-y-1 py-1'>
      <button
        onClick = {() => onPageChange(currentPage - 1)}
        disabled = {currentPage === 1}
        className = "cursor-pointer px-3 py-1 rounded-lg bg-gray-500 disabled:opacity-50"
      >
        Prev
      </button>
      {
        pages.map((page) => (
          <button
            key = {page}
            onClick = {() => onPageChange(page)}
            className={`px-3 py-1 mx-1 rounded cursor-pointer ${
              page === currentPage
                ? "bg-cyan-500 text-white"
                : "bg-gray-500 hover:bg-gray-400"
            }`}
          >
            {page}
          </button>
        ))
      }
      <button
        onClick = {() => onPageChange(currentPage - 1)}
        disabled = {currentPage === totalPages}
        className = "px-3 py-1 rounded-lg bg-gray-500 disabled:opacity-50 cursor-pointer"
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
