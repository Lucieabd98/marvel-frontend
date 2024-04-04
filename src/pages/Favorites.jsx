const Favorites = ({ favorites }) => {
  console.log(favorites);
  return (
    <main className="main-favorites">
      <div>
        <h1>YOUR FAVORITES</h1>
      </div>
      {favorites.map((elem) => {
        const url =
          elem.thumbnail.path +
          "/" +
          "standard_fantastic" +
          "." +
          elem.thumbnail.extension;
        console.log(elem);
        console.log(url);

        return (
          <div key={elem._id} className="container-favorites">
            <div>
              <div
                className="character-img"
                style={{ backgroundImage: `url(${url})` }}
              ></div>
              <div>
                <div>
                  <h2>{elem.title}</h2>
                  <p>{elem.description}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <h1>coucou je suis Favorites</h1>
    </main>
  );
};

export default Favorites;
