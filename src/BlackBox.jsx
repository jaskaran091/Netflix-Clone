import style1 from "./blackBox.module.css";

function BlackBox({ item }) {
  return (
    <div
      className={style1.container}
      style={{ flexDirection: `${item.id % 2 === 0 ? "row" : "row-reverse"}` }}
    >
      <div className={item.id % 2 === 0 ? style1.text : style1.revText}>
        <h1>{item.content.h1}</h1>
        <p>{item.content.p}</p>
      </div>
      <div className={style1.img1}>
        <img
          src={item.img}
          className={item.id % 2 === 0 ? style1.img : style1.revImg}
        />
        {item.id === 1 && (
          <div className={style1.strange}>
            <img src={item.img2} />
            <div className={style1.strangeText}>
              Stranger Things <p>Downloading...</p>
            </div>
          </div>
        )}
        <div className={item.id === 0 ? style1.video : style1.video3}>
          <video
            data-uia="nmhp-card-animation-asset-video"
            autoPlay
            playsInline
            muted
            loop
          >
            <source src={item.video} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}

export default BlackBox;
