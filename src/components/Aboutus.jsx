import React from "react";
import { Link } from "react-router-dom";

function Aboutus() {
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={require("./image.jpg")}
          alt="image"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold text-center">Hallo, ich bin <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-warning relative inline-block">
    <span class="relative text-white">Christof</span>
  </span></h1>
          <p className="py-6">
            meine Muttersprache ist Deutsch. Ich möchte euch helfen, Deutsch zu
            lernen. Meiner Meinung nach geht das am besten, indem ihr möglichst
            viel Deutsch hört, lest und sprecht. Für das Hören und Lesen gibt es
            hier den Podcast. 
            <br /> Weil ich selbst gerne Sprachen lerne (ja,
            es ist eines meiner Hobbys!), weiß ich, dass es oft gut ist, wenn
            man mit kurzen Texten lernen kann. Deswegen nehme ich kurze
            Podcast-Folgen auf. 
            <br /> Hier seht ihr außer mir noch Maria, die
            auch Deutsch gelernt hat und weiter lernt. Wir stehen vor der
            Thai-Sala im Westpark in München, einem buddhistischen Heiligtum aus
            Thailand. 
            <br /> Aber keine Angst, damit wollen wir nicht sagen,
            dass Deutsch genauso schwer zu lernen ist wie Thai.
          </p>
          <div className="text-center collapse-title text-xl font-medium text-center">
            <button className="btn">
              <Link to="/contactus" className="link link-hover">
              Kontakt
            </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
