import React from "react";
import Audio from "../components/Audio";
import { AppContext } from "../App";
import { useContext } from "react";

import a1 from "../assets/a1.mp3";
import a2 from "../assets/a2.mp3";
import a3 from "../assets/a3.mp3";
import a4 from "../assets/a4.mp3";

function Home() {
  return (
    <>
      <div
        className="picture hero min-h-screen lg:card-side bg-base-200 shadow-xl"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1517649281203-dad836b4abe5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGxpb258ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60')`,
        }}
      >
        <div className="hero-content text-center text-neutral-content warm">
          <div className="max">
            <h1 className="mb-50 text-5xl font-bold">DEUTSCH LERNEN MIT PODCAST</h1>
            <h2 className="mb-50 text-5xl font-bold">3 MINUTEN DEUTSCH</h2>
          </div>
        </div>
      </div>
      <div></div>

      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium text-center">
          <a role="button" className="btn text-center">
            🎧 PODCAST HÖREN
          </a>
        </div>
        <div className="collapse-content text-center">
          <Audio media={a1} />
          <Audio media={a2} />
          <Audio media={a3} />
          <Audio media={a4} />
        </div>
      </div>
    </>
  );
}

export default Home;
