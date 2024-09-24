// src/pages/BookDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import books from '../data/books.json';
import { toast } from 'react-toastify';
import './BookDetails.css'; // Import the CSS file

const BookDetails = () => {
  const { bookId } = useParams();
  const book = books.find(b => b.bookId === parseInt(bookId));

  const addToWishlist = () => {
    toast.success(`${book.bookName} has been successfully added to the Wishlist.`);
  };

  const addToCart = () => {
    toast.success(`${book.bookName} has been successfully added to the Cart.`);
  };

  return (
    <div className="book-details-container">
      <img src={book.image} alt={book.bookName} className="book-image" />
      <div className="book-info">
        <h1 className="book-title">{book.bookName}</h1>
        <p><strong>Author:</strong> {book.author}</p>
        <p><strong>Category:</strong> {book.category}</p>
        <p><strong>Review:</strong> {book.review}</p>
        <p><strong>Total Pages:</strong> {book.totalPages}</p>
        <p><strong>Publisher:</strong> {book.publisher}</p>
        <p><strong>Year of Publishing:</strong> {book.yearOfPublishing}</p>
        <p><strong>Rating:</strong> {book.rating}</p>
        <button className="btn-wishlist" onClick={addToWishlist}>Wish to Read</button>
        <button className="btn-cart" onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default BookDetails;
