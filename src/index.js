import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img
        className="avatar"
        src="https://avatars.githubusercontent.com/u/72725569?s=400&u=f6ca15b8b5a1586f78a622d4187d747f91ba9b5b&v=4"
        alt="avatar"
      />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Alastair Cruz Pahati</h1>
      <p>
        Baby Boy who likes to say "KA" whenever he wants to eat. Always play
        with his red sports car
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💪" color="blue" />
      <Skill skill="HTML+CSS" emoji="💪" color="orangered" />
      <Skill skill="Javascript" emoji="💪" color="yellow" />
      <Skill skill="Web Design" emoji="💪" color="orange" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
