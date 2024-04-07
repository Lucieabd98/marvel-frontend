const PaginationCharacters = ({
  pageNumberCharacter,
  setPageNumberCharacter,
  maxPagesCharacters,
}) => {
  const previousPage = pageNumberCharacter - 1;
  const nextPage = pageNumberCharacter + 1;

  return (
    <div className="pagination-characters">
      {pageNumberCharacter !== 1 && (
        <button
          onClick={() => {
            setPageNumberCharacter(1);
          }}
        >
          {"< <"}
        </button>
      )}

      {previousPage !== 0 && (
        <button
          onClick={() => {
            setPageNumberCharacter(previousPage);
          }}
        >
          {previousPage}
        </button>
      )}
      <button className="current-page">{pageNumberCharacter}</button>
      {nextPage < maxPagesCharacters && (
        <button
          onClick={() => {
            setPageNumberCharacter(nextPage);
          }}
        >
          {nextPage}
        </button>
      )}

      {pageNumberCharacter < maxPagesCharacters && (
        <button
          onClick={() => {
            setPageNumberCharacter(maxPagesCharacters);
          }}
        >
          {"> >"}
        </button>
      )}
    </div>
  );
};

export default PaginationCharacters;
