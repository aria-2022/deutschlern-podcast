import React from "react";
import audio2 from '../assets/a2.mp3'

function Audio({media}) {
  return (
    <audio id="audio" controls autoplay muted loop>
      <source src={media} type="audio/mpeg" />
    </audio>
  );
}

export default Audio;
