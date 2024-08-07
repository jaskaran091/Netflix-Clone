import { useState, useEffect, useRef } from "react";
import style from "./rows.module.css";

function Rows({ imgUrl, title }) {
  const [movies, setMovies] = useState([]);
  const rowRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  function fetchMovies() {
    fetch(imgUrl)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        console.log(data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  useEffect(() => {
    fetchMovies();
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (rowRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = rowRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
      }
    };

    if (rowRef.current) {
      rowRef.current.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => {
      if (rowRef.current) {
        rowRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [movies]);
  const scrollLeft = () => {
    if (rowRef.current) {
      rowRef.current.scrollLeft -= rowRef.current.offsetWidth;
    }
  };

  const scrollRight = () => {
    if (rowRef.current) {
      rowRef.current.scrollLeft += rowRef.current.offsetWidth;
    }
  };

  return (
    <div className={style.container}>
      <h4>{title}</h4>
      <div className={style.buttunContainer}>
        {canScrollLeft && (
          <button onClick={scrollLeft} className={style.leftScrollButton}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="15"
              viewBox="0 0 320 512"
            >
              <path
                fill="white"
                d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
              />
            </svg>
          </button>
        )}
        <div className={style.row} ref={rowRef}>
          {movies?.map((movie, i) => (
            <div key={i}>
              <img
                src={`https://image.tmdb.org/t/p/w500/` + movie?.backdrop_path}
                alt={movie.title}
                className={style.img}
              />
            </div>
          ))}
        </div>
        {canScrollRight && (
          <button onClick={scrollRight} className={style.rightScrollButton}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="15"
              viewBox="0 0 320 512"
            >
              <path
                fill="white"
                d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

export default Rows;
