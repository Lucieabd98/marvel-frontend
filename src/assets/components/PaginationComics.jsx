const PaginationComics = ({
  pageNumberComics,
  setPageNumberComics,
  maxPagesComics,
}) => {
  const previousPage = pageNumberComics - 1;
  const nextPage = pageNumberComics + 1;

  return (
    <div className="pagination-comics">
      {pageNumberComics !== 1 && (
        <button
          onClick={() => {
            setPageNumberComics(1);
          }}
        >
          {"< <"}
        </button>
      )}

      {/* {previousPage - 1 > 0 && (
        <button
          onClick={() => {
            setPageNumberComics(previousPage - 1);
          }}
        >
          {previousPage - 1}
        </button>
      )} */}

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
      {nextPage < maxPagesComics && (
        <button
          onClick={() => {
            setPageNumberComics(nextPage);
          }}
        >
          {nextPage}
        </button>
      )}
      {/* {nextPage + 1 <= maxPage && (
        <button
          onClick={() => {
            setPageNumberComics(nextPage + 1);
          }}
        >
          {nextPage + 1}
        </button>
      )} */}
      {pageNumberComics < maxPagesComics && (
        <button
          onClick={() => {
            setPageNumberComics(maxPagesComics);
          }}
        >
          {"> >"}
        </button>
      )}
    </div>
  );
};

export default PaginationComics;
