// components/BookCard.jsx
import { Link } from 'react-router-dom';
import "./BookCard.css";

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <img 
        src={book.image} 
        alt={book.bookName} 
        className="img-card" 
      />
      <h3 className="book-title">{book.bookName}</h3>
      <p className="book-author">{book.author}</p>
      <p className="book-category">{book.category}</p>
      <p className="book-rating">Rating: {book.rating}</p>
      <Link to={`/book/${book.bookId}`}>
        <button className="details-button">Book Details</button>
      </Link>
    </div>
  );
};

export default BookCard;

