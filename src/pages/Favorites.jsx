const Favorites = ({ favorites }) => {
  // console.log(favorites);
  return (
    <main className="main-favorites ">
      <div className="header-favorites">
        {favorites.length === 0 ? (
          <h1>Add your first favorite comic or character</h1>
        ) : (
          <h1>YOUR FAVORITES...</h1>
        )}
      </div>
      {favorites.length !== 0 && (
        <div className="all-favorites ">
          <div>
            <h2>...COMICS</h2>
            <div className="all-favorite-comics">
              {favorites.map((elem, index) => {
                return elem.type === "Comic" ? (
                  <div className="one-favorite-card " key={index}>
                    {elem.type === "Comic" && (
                      <div>
                        <div
                          className="character-img"
                          style={{
                            backgroundImage: `url(${elem.url})`,
                          }}
                        ></div>
                        <div>
                          <h3>{elem.title}</h3>
                        </div>
                      </div>
                    )}
                  </div>
                ) : null;
              })}
            </div>
          </div>
          <div>
            <h2>...CHARACTERS</h2>
            <div className="all-favorite-characters">
              {favorites.map((elem, index) => {
                return elem.type === "Character" ? (
                  <div key={index} className="one-favorite-card">
                    {elem.type === "Character" && (
                      <div>
                        <div
                          className="character-img"
                          style={{
                            backgroundImage: `url(${elem.url})`,
                          }}
                        ></div>
                        <div>
                          <h3>{elem.title}</h3>
                        </div>
                      </div>
                    )}
                  </div>
                ) : null;
              })}
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Favorites;

{
  /* <div>
<div
  className="character-img"
  style={{ backgroundImage: `url(${elem.url})` }}
></div>
<div>
  <div>
    <h2>{elem.title}</h2>
  </div>
</div>
</div> */
}
