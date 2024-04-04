const SearchInputComics = ({ inputComics, setInputComics }) => {
  return (
    <input
      type="text"
      placeholder="Recherche tes ... préférés"
      name="recherche"
      onChange={(event) => {
        setInputComics(event.target.value);
      }}
    ></input>
  );
};

export default SearchInputComics;
