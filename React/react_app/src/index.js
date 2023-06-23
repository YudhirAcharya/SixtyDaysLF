import React from "react";
import ReactDOM from "react-dom";
import books from "./books";
import "./index.css";
import Book from "./book";

const Booklist = () => {
  return (
    <React.Fragment>
      <h1 className="title">SHOP ONLINE</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return <Book {...book} number={index} />;
        })}
      </section>
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(<Booklist />);
