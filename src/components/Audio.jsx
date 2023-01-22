import React from "react";

function Audio({ media }) {
  return (
    <audio id="audio" controls autoplay muted loop>
      <source src={media} type="audio/mpeg" />
    </audio>
  );
}

export default Audio;
