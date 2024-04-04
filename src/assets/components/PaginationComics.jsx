const PaginationComics = ({ pageNumberComics, setPageNumberComics }) => {
  const previousPage = pageNumberComics - 1;
  const nextPage = pageNumberComics + 1;
  const maxPage = 474;

  return (
    <div>
      {pageNumberComics !== 1 && (
        <button
          onClick={() => {
            setPageNumberComics(1);
          }}
        >
          firstpage
        </button>
      )}

      {previousPage - 1 > 0 && (
        <button
          onClick={() => {
            setPageNumberComics(previousPage - 1);
          }}
        >
          {previousPage - 1}
        </button>
      )}

      {previousPage !== 0 && (
        <button
          onClick={() => {
            setPageNumberComics(previousPage);
          }}
        >
          {previousPage}
        </button>
      )}
      <button className="current-page">{pageNumberComics}</button>
      {nextPage < 475 && (
        <button
          onClick={() => {
            setPageNumberComics(nextPage);
          }}
        >
          {nextPage}
        </button>
      )}
      {nextPage + 1 <= maxPage && (
        <button
          onClick={() => {
            setPageNumberComics(nextPage + 1);
          }}
        >
          {nextPage + 1}
        </button>
      )}
      {pageNumberComics < maxPage && (
        <button
          onClick={() => {
            setPageNumberComics(maxPage);
          }}
        >
          last page
        </button>
      )}
    </div>
  );
};

export default PaginationComics;
