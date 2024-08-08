import style from "./blackBox.module.css";

function BlackBox({ item }) {
  return (
    <div
      className={`${style.container} ${
        item.id % 2 === 0 ? style.row : style.rowRev
      }`}
    >
      <div className={item.id % 2 === 0 ? style.text : style.revText}>
        <h1>{item.content.h1}</h1>
        <p>{item.content.p}</p>
      </div>
      <div className={style.img}>
        <div className={style.wrapper}>
          <img src={item.img} alt="" />
          {item.id === 1 && (
            <div className={style.strange}>
              <div className={style.strangeImg}>
                <img
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                  alt=""
                />
              </div>
              <div className={style.strangeText}>
                <h6>Stranger Things</h6>
                <p>Downloading...</p>
              </div>
            </div>
          )}

          {(item.id === 0 || item.id === 2) && (
            <video
              data-uia="nmhp-card-animation-asset-video"
              autoPlay
              playsInline
              muted
              loop
              className={item.id === 0 ? style.video : style.video2}
            >
              <source src={item.video} type="video/mp4" />
            </video>
          )}
        </div>
      </div>
    </div>
  );
}

export default BlackBox;
