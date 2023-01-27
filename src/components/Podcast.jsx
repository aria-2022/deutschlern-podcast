import React from "react";
import Audio from "../components/Audio";
import { AppContext } from "../App";
import { useContext } from "react";
import { Link } from "react-router-dom";

function Podcast() {
  const {user, podcasts } = useContext(AppContext);
  return (
    <div className="hero-content hero min-h-screen flex-col lg:flex-colum-reverse">
      <div className="flex flex-col space-y-7 w-full border-opacity-50">
        <div className="flex flex-col space-y-7 grid h-100 card ">
          {podcasts &&
            podcasts.slice(0, 4).map((i) => (
              <div className="w-full border-opacity-50">
                <div className="flex flex-row w-100 h-40 card bg-base-200 rounded-box place-content-center shadow-2xl">
                  <img src={i.img} alt="pic" height={100} width={100} />
                  <div className="text-center text-xl font-medium">
                    <Audio media={i.audio} />
                    <h1>{i.title}</h1>
                    <h1>{i.date}</h1>
                    <div>
                      {user ? (
                        <p>{i.text}</p>
                      ) : (
                        <div className="text-center collapse-title text-xl font-medium">
                          <button className="btn">
                            <Link
                              to="/login"
                              role="button"
                              className="text-center collapse-title text-xl font-medium"
                            >
                              🎧 Premium Mitgliedschaft
                            </Link>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <br />
    </div>
  );
}

export default Podcast;
