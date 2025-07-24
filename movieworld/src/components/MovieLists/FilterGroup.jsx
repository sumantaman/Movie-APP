import React from "react";

export const FilterGroup = ({ minRating, onRatingClick, rating }) => {
  return (
    <ul className=" align_center movie_filter">
      {
        rating.map(rate=><li
        className={
          minRating === rate ? "movie_filter_item active" : "movie_filter_item"
        }
        key={rate}
        onClick={() => {
          onRatingClick(rate);
        }}
      >
        {rate}+ Star
      </li>)
      }
      
      </ul>
  );
};
