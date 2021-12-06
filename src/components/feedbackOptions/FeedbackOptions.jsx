import React from "react";
import style from "../statistics/Statistics.module.css";

const FeedbackOptions = ({
  optionGood,
  optionNeutral,
  optionBad,
  addGoodButton,
  addNeutralButton,
  addBadButton,
}) => {
  return (
    <div>
      <button type="button" onClick={addGoodButton} className={style.good}>
        {optionGood}
      </button>
      <button
        type="button"
        onClick={addNeutralButton}
        className={style.neutral}
      >
        {optionNeutral}
      </button>
      <button type="button" onClick={addBadButton} className={style.bad}>
        {optionBad}
      </button>
    </div>
  );
};

export default FeedbackOptions;
