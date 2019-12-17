import React from "react";
import summary from "../assets/summary.png";

const Summary = () => {
  return (
    <div className="summary-wrapper">
      <div className="summary-image">
        <img id="top-image" alt="women programmer" src={summary} />
      </div>
      <div className="summary-text">
        <p className="summary">
          Hi, my name is Marina. I'm a full-stack web engineer with experience
          in software development, project management, and makeup artistry. My
          prior experience helped me to develop collaboration, problem-solving,
          and organizational skills. I'm excited to bring those skills into my
          web development journey. When I'm not programming, I'm likely hiking
          or observing the night sky with my telescope, thinking about new
          technologies, or trying an original recipe.
        </p>
      </div>
    </div>
  );
};
export default Summary;
