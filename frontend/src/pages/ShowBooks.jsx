import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ShowBooks = () => {
    const [book, setBook] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`https://book-store-mern-api-phi.vercel.app/books/${id}`)
            .then((res) => {
                setBook(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6 border border-gray-300">
                <h1 className="text-3xl mb-6 text-center text-gray-800 font-bold">Show Book</h1>
                <div className="mb-4 p-4 border border-gray-300 rounded-lg">
                    <span className="block text-gray-700 text-sm font-bold mb-2">ID</span>
                    <span className="block text-gray-600">{book._id}</span>
                </div>
                <div className="mb-4 p-4 border border-gray-300 rounded-lg">
                    <span className="block text-gray-700 text-sm font-bold mb-2">Title</span>
                    <span className="block text-gray-600">{book.title}</span>
                </div>
                <div className="mb-4 p-4 border border-gray-300 rounded-lg">
                    <span className="block text-gray-700 text-sm font-bold mb-2">Author</span>
                    <span className="block text-gray-600">{book.author}</span>
                </div>
                <div className="mb-4 p-4 border border-gray-300 rounded-lg">
                    <span className="block text-gray-700 text-sm font-bold mb-2">Publish Year</span>
                    <span className="block text-gray-600">{book.publishYear}</span>
                </div>
                <div className="mb-4 p-4 border border-gray-300 rounded-lg">
                    <span className="block text-gray-700 text-sm font-bold mb-2">Create Time</span>
                    <span className="block text-gray-600">{new Date(book.createdAt).toLocaleString()}</span>
                </div>
                <div className="mb-4 p-4 border border-gray-300 rounded-lg">
                    <span className="block text-gray-700 text-sm font-bold mb-2">Last Update Time</span>
                    <span className="block text-gray-600">{new Date(book.updatedAt).toLocaleString()}</span>
                </div>
            </div>
        </div>
    );
};

export default ShowBooks;
