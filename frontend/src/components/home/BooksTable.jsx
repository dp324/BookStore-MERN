import React from 'react';
import { Link } from "react-router-dom";
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import { BsInfoCircle } from 'react-icons/bs';

const BooksTable = ({ books }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-separate border-spacing-2 bg-white shadow-lg rounded-lg">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="p-4 border border-blue-500 rounded-tl-lg">No.</th>
            <th className="p-4 border border-blue-500">Title</th>
            <th className="p-4 border border-blue-500">Author</th>
            <th className="p-4 border border-blue-500">Publish-Year</th>
            <th className="p-4 border border-blue-500 rounded-tr-lg">Operations</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book._id} className={`h-16 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
              <td className="p-4 border border-gray-300 text-center font-medium text-gray-700">
                {index + 1}
              </td>
              <td className="p-4 border border-gray-300 text-center font-medium text-gray-700">
                {book.title}
              </td>
              <td className="p-4 border border-gray-300 text-center font-medium text-gray-700">
                {book.author}
              </td>
              <td className="p-4 border border-gray-300 text-center font-medium text-gray-700">
                {book.publishYear}
              </td>
              <td className="p-4 border border-gray-300 text-center">
                <div className="flex justify-center gap-4">
                  <Link to={`/books/details/${book._id}`}>
                    <BsInfoCircle className="text-2xl text-green-500 hover:text-green-700 transition-colors duration-300" />
                  </Link>
                  <Link to={`/books/edit/${book._id}`}>
                    <AiOutlineEdit className="text-2xl text-yellow-500 hover:text-yellow-700 transition-colors duration-300" />
                  </Link>
                  <Link to={`/books/delete/${book._id}`}>
                    <MdOutlineDelete className="text-2xl text-red-500 hover:text-red-700 transition-colors duration-300" />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BooksTable;
