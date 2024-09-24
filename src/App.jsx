// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import BookCard from './components/BookCard';
import BookDetails from './pages/BookDetails';
import FAQ from './components/FAQ';
import NotFound from './components/NotFound';
import booksData from './data/books.json';
import "./index.css"
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <Banner />
      <Routes>
        <Route path="/" element={
          <div className="book-container">
            {booksData.map(book => <BookCard key={book.bookId} book={book} />)}
          </div>
        } />
        <Route path="/book/:bookId" element={<BookDetails />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
    
  );
};

export default App;

