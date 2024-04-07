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
