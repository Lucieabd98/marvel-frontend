const SearchInputCharacters = ({ input, setInput }) => {
  return (
    <input
      type="text"
      placeholder="Type your favorite character's name"
      name="recherche"
      onChange={(event) => {
        setInput(event.target.value);
      }}
    ></input>
  );
};

export default SearchInputCharacters;
