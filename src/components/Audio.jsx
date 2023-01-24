import React from "react";

function Audio({ media }) {
  return (
    <div className="flex flex-row w-100 h-30 card bg-base-200 rounded-box place-content-center">
    <audio id="audio" controls autoplay muted loop >
      <source src={media} type="audio/mpeg" />
    </audio>

    </div>
  );
}

export default Audio;
