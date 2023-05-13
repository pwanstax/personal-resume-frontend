import type {NextPage} from "next";
import {useState} from "react";

const interests = [
  {name: "fullstack development", status: false},
  {name: "SOCCER", status: true},
  {name: "PIZZA", status: true},
  {name: "programming", status: false},
  {name: "MUSIC", status: true},
  {name: "business", status: false},
  {name: "start up", status: false},
  {name: "SALMON", status: true},
  {name: "SLEEP", status: true},
  {name: "data scientist", status: false},
];
const imgList = [
  ["fb.png", "https://www.facebook.com/profile.php?id=100010703378959"],
  ["ig.jpg", "https://instagram.com/__pwan?igshid=YmMyMTA2M2Y="],
  ["linkedin.png", "https://www.linkedin.com/in/pawan-kanjeam-487409218/"],
  ["medium.png", "https://medium.com/@pawankanjeam"],
  ["email.png", "mailto:tutor_pawan@hotmail.com"],
];
const AboutPage: NextPage = () => {
  const [revealed, setReveal] = useState(false);
  return (
    <div className="aboutpage-container main-section">
      <div className="header">
        <h1 className="info-topic">INTEREST</h1>
      </div>
      <div className="interest">
        {interests.map((interest) => {
          return (
            <div
              className={
                !interest.status && revealed
                  ? "running-text content black"
                  : "running-text content"
              }
            >
              <span>{interest.name}</span>
            </div>
          );
        })}
        <div
          className="running-text content"
          onClick={() => setReveal(!revealed)}
        >
          <span>Click to see my real interest</span>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default AboutPage;
