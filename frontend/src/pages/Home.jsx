import { useEffect, useState } from "react";
import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from 'react-icons/md';
import BooksCard from "../components/home/BooksCard.jsx";
import BooksTable from "../components/home/BooksTable.jsx";
import SkeletonLoader from "../components/SkeletonLoader.jsx";

const Home = () => {
    const [books, setBooks] = useState([]);
    const [showType, setShowType] = useState('card');
    const [bookAfterQuery, setBookAfterQuery] = useState([]);
    const [loading, setLoading] = useState(false);

    function filterFunction(e) {
        const filteredBooks = books.filter(book => book.author.toLowerCase().includes(e.target.value)).map(book => ({ "title": book.title, "author": book.author, "publishYear": book.publishYear }));
        setBookAfterQuery(filteredBooks);
    }

    useEffect(() => {
        setLoading(true);
        axios
            .get(`https://book-store-mern-api-phi.vercel.app/books`)
            .then((res) => {
                setBooks(res.data.data);
                setBookAfterQuery(res.data.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="flex justify-center items-center gap-4 mb-6">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300" onClick={() => setShowType('table')}>
                    Table View
                </button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300" onClick={() => setShowType('card')}>
                    Card View
                </button>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-4 sm:mb-0">Books List</h1>
                <div className="flex items-center space-x-4">
                    <input type="text" className="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by author name" onChange={filterFunction} />
                    <Link to='/books/create' className="text-blue-500 text-4xl hover:text-blue-700 transition duration-300">
                        <MdOutlineAddBox />
                    </Link>
                </div>
            </div>
            <div className="grid gap-6">
                {
                    loading ? (
                        <SkeletonLoader type={showType} />
                    ) : (
                        showType === 'table' ? (
                            <BooksTable books={bookAfterQuery} />
                        ) : (
                            <BooksCard books={bookAfterQuery} />
                        )
                    )
                }
            </div>
        </div>
    );
}

export default Home;
