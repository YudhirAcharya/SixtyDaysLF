import React from "react";
import ReactDOM from "react-dom/client";

function Greeting() {
  return (
    <React.Fragment>
      <div>
        <h3>hi</h3>
      </div>
      <h2>you</h2>
      <div>
        <Person />
        <Adderss />
      </div>
    </React.Fragment>
  );
}

function Person() {
  return <p>John Wick</p>;
}

const Adderss = () => {
  return <p>USA</p>;
};
const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(<Greeting />);
