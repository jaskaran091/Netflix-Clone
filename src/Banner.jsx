import { useEffect, useState } from "react";
import style1 from "./banner.module.css";
import Header from "./Header";

function Banner() {
  const [info, setInfo] = useState([]);
  const [random, setRandom] = useState();
  const [imgUrl, setImgUrl] = useState({});
  function fetchMovies() {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=718b2dc4507e53c3d798aead7e58428d&language=en-US&page=1
     `)
      .then((res) => res.json())
      .then((data) => setInfo(data.results));
  }
  useEffect(() => {
    fetchMovies();
    setRandom(Math.floor(Math.random() * 20));
  }, []);
  setTimeout(() => {
    setImgUrl(info[random]);
  }, 0);
  return (
    <div className={style1.container}>
      <Header />
      {imgUrl?.title && (
        <>
          <div className={style1.info}>
            <h1>{imgUrl.title}</h1>
            <div className={style1.overview}>
              <h5>{imgUrl.overview}</h5>
            </div>
            <div className={style1.buttons}>
              <button className={style1.play}>
                <h5>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="30"
                    width="50"
                    viewBox="0 0 384 512"
                  >
                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                  </svg>
                  Play
                </h5>
              </button>
              <button className={style1.more}>
                <h5>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="35"
                    width="27"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#ffffff"
                      d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
                    />
                  </svg>
                  More Info
                </h5>
              </button>
            </div>
          </div>
          <img
            src={`https://image.tmdb.org/t/p/original${imgUrl.backdrop_path}`}
            alt={imgUrl.title}
            className={style1.img}
          />
        </>
      )}
    </div>
  );
}

export default Banner;
