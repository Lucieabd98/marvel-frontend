const SearchInputComics = ({ inputComics, setInputComics }) => {
  return (
    <input
      type="text"
      placeholder="Type your favorite comic's title"
      name="recherche"
      onChange={(event) => {
        setInputComics(event.target.value);
      }}
    ></input>
  );
};

export default SearchInputComics;
