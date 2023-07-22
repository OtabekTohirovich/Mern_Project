function Rating(props: {
  rating: number;
  numReview?: number;
  caption?: string;
}) {
  const { rating, numReview, caption } = props;

  return (
    <div className="rating" color="yellow">
      <span>
        <i
          style={{ color: "yellow" }}
          className={
            rating >= 1
              ? "fa-solid fa-star"
              : rating >= 0.5
              ? "fa-solid fa-star-half-stroke"
              : "fa-regular fa-star"
          }
        />
      </span>
      <span>
        <i
          style={{ color: "yellow" }}
          className={
            rating >= 2
              ? "fa-solid fa-star"
              : rating >= 1.5
              ? "fa-solid fa-star-half-stroke"
              : "fa-regular fa-star"
          }
        />
      </span>
      <span>
        <i
          style={{ color: "yellow" }}
          className={
            rating >= 3
              ? "fa-solid fa-star"
              : rating >= 2.5
              ? "fa-solid fa-star-half-stroke"
              : "fa-regular fa-star"
          }
        />
      </span>
      <span>
        <i
          style={{ color: "yellow" }}
          className={
            rating >= 4
              ? "fa-solid fa-star"
              : rating >= 3.5
              ? "fa-solid fa-star-half-stroke"
              : "fa-regular fa-star"
          }
        />
      </span>
      <span>
        <i
          style={{ color: "yellow" }}
          className={
            rating >= 5
              ? "fa-solid fa-star"
              : rating >= 4.5
              ? "fa-solid fa-star-half-stroke"
              : "fa-regular fa-star"
          }
        />
      </span>
      
      {caption ? (
        <span >{caption}</span>
      ) : numReview != 0 ? (
        <span style={{color: '#e67221'}} >{" " + numReview + "reviews"}</span>
      ) : (
        ""
      )}
    </div>
  );
}

export default Rating;
