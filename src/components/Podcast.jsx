import React from "react";
import Audio from "../components/Audio";
import { AppContext } from "../App";
import { useContext } from "react";

function Podcast() {
  const { data, user } = useContext(AppContext);
  return (
    <div className="flex flex-col w-full border-opacity-50">
      {data &&
        data.podcast.map((i, j) => (
          <div className="grid h-200 card" key={j}>
            {data.podcast.slice(0, 4).map((i) => (
              <div className="flex flex-col w-full border-opacity-50">
                <div className="grid w-100 h-30 card bg-base-300 rounded-box place-content-center">
                  <img src={i.img} alt="pic" height={100} width={100} />
                  <Audio media={i.audio} />
                  <h1>{i.title}</h1>
                  <h1>{i.date}</h1>
                  <div>
                    {user ? (
                      <p>{i.text}</p>
                    ) : (
                      <a role="button" className="btn text-center">
                        🎧 Join our Premium Membership
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
}

export default Podcast;
