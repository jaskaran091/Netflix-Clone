import Banner from "./Banner";
import Footer from "./Footer";
import Rows from "./Rows";
import style from "./movies.module.css";

function Movies() {
  const apiKey = "718b2dc4507e53c3d798aead7e58428d";

  return (
    <>
      <Banner />
      <div className={style.allRows}>
        <Rows
          imgUrl={`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`}
          title={"Popular Movies"}
        />
        <Rows
          imgUrl={`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`}
          title={"Top Rated Movies"}
        />
        <Rows
          imgUrl={`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1
`}
          title={"Now Playing Movies"}
        />
        <Rows
          imgUrl={`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1
`}
          title={"Upcoming Movies"}
        />
        <Rows
          imgUrl={`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1

`}
          title={"Popular TV Shows"}
        />
        <Rows
          imgUrl={`https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&language=en-US&page=1


`}
          title={"Top Rated TV Showss"}
        />
        <Rows
          imgUrl={`https://api.themoviedb.org/3/tv/airing_today?api_key=${apiKey}&language=en-US&page=1


`}
          title={"Airing Today TV Shows"}
        />
        <Rows
          imgUrl={`https://api.themoviedb.org/3/tv/on_the_air?api_key=${apiKey}&language=en-US&page=1`}
          title={"On The Air TV Shows"}
        />
        <Rows
          imgUrl={`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=28&language=en-US&sort_by=popularity.desc&page=1`}
          title={"Popular Action Movies"}
        />
        <Rows
          imgUrl={`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=12&language=en-US&sort_by=popularity.desc&page=1


`}
          title={"Popular Adventure Movies"}
        />
        <Rows
          imgUrl={`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=35&language=en-US&sort_by=popularity.desc&page=1



`}
          title={"Popular Comedy Movies"}
        />
      </div>
      <Footer />
    </>
  );
}

export default Movies;
