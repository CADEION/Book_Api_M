import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaSortAlphaDown, FaSortAlphaUp, FaChevronLeft, FaChevronRight, FaBook } from 'react-icons/fa';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [sortBy, setSortBy] = useState('title');
  const [sortOrder, setSortOrder] = useState('asc');
  const [page, setPage] = useState(1);
  const [pageSize] = useState(5);
  const [total, setTotal] = useState(0);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/books', {
        params: { page, page_size: pageSize, sort_by: sortBy, sort_order: sortOrder }
      });
      setBooks(response.data.books);
      setTotal(response.data.total);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, [page, sortBy, sortOrder]);

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-2xl shadow-xl">
      <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-8 flex items-center justify-center gap-3">
        <FaBook className="text-blue-600" /> Book Explorer
      </h2>

      <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
        <div className="flex gap-3 items-center">
          <label className="text-gray-700 font-semibold">Sort By:</label>
          <select
            className="px-3 py-2 border border-gray-300 rounded-md bg-white shadow-sm focus:ring focus:ring-blue-200"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="title">Title</option>
            <option value="author">Author</option>
            <option value="publicationYear">Year</option>
            <option value="genre">Genre</option>
          </select>

          <select
            className="px-3 py-2 border border-gray-300 rounded-md bg-white shadow-sm focus:ring focus:ring-blue-200"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="asc">Ascending <FaSortAlphaDown /></option>
            <option value="desc">Descending <FaSortAlphaUp /></option>
          </select>
        </div>
      </div>

      {books.length > 0 ? (
        <ul className="divide-y divide-blue-200">
          {books.map((book) => (
            <li key={book._id} className="py-5 px-4 hover:bg-blue-50 transition duration-200 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-900">{book.title}</h3>
              <p className="text-gray-700">
                <span className="font-medium">{book.author}</span> &middot; {book.publicationYear} &middot; <span className="italic">{book.genre}</span>
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500 italic mt-8">No books found.</p>
      )}

      <div className="flex justify-between items-center mt-10">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className={`flex items-center gap-2 px-5 py-2 rounded-lg text-white transition duration-200 ${
            page === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          <FaChevronLeft /> Previous
        </button>

        <span className="text-lg font-semibold text-blue-700">Page {page}</span>

        <button
          onClick={() => setPage(page + 1)}
          disabled={page * pageSize >= total}
          className={`flex items-center gap-2 px-5 py-2 rounded-lg text-white transition duration-200 ${
            page * pageSize >= total ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          Next <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default BookList;
