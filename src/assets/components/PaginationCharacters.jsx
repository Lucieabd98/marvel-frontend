const PaginationCharacters = ({
  pageNumberCharacter,
  setPageNumberCharacter,
}) => {
  const previousPage = pageNumberCharacter - 1;
  const nextPage = pageNumberCharacter + 1;
  const maxPage = 15;

  return (
    <div className="pagination-characters">
      {pageNumberCharacter !== 1 && (
        <button
          onClick={() => {
            setPageNumberCharacter(1);
          }}
        >
          firstpage
        </button>
      )}

      {previousPage - 1 > 0 && (
        <button
          onClick={() => {
            setPageNumberCharacter(previousPage - 1);
          }}
        >
          {previousPage - 1}
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
      {nextPage !== 16 && (
        <button
          onClick={() => {
            setPageNumberCharacter(nextPage);
          }}
        >
          {nextPage}
        </button>
      )}
      {nextPage + 1 <= maxPage && (
        <button
          onClick={() => {
            setPageNumberCharacter(nextPage + 1);
          }}
        >
          {nextPage + 1}
        </button>
      )}
      {pageNumberCharacter < maxPage && (
        <button
          onClick={() => {
            setPageNumberCharacter(maxPage);
          }}
        >
          last page
        </button>
      )}
    </div>
  );
};

export default PaginationCharacters;

// /     {nextPage !== 16 && (
//       <button
//         onClick={() => {
//           setPageNumberCharacter(pageNumberCharacter + 1);
//         }}
//       >
//         {pageNumberCharacter + 1}
//       </button>
//     )}
//     <button
//       onClick={() => {
//         setPageNumberCharacter(15);
//       }}
//     >
//       Last page
//     </button>
