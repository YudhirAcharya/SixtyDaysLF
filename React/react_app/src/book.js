const Book = ({ image, title, author, number }) => {
  return (
    <div className="book">
      <span className="number">{`# ${number + 1}`}</span>
      <img src={image}></img>
      <h2>{title}</h2>
      <h3>{author}</h3>
    </div>
  );
};

export default Book;
