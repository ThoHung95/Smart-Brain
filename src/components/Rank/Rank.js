import React from "react";

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className="white f3">
        "{name}, your current entries count is {entries}"
      </div>
    </div>
  );
};

export default Rank;
