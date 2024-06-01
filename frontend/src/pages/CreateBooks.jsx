import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateBooks = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishYear, setPublishYear] = useState('');
    const navigate = useNavigate();

    const handleSaveBook = () => {
        const data = {
            title,
            author,
            publishYear,
        };
        axios
            .post(`https://bookstore-mern-api1.onrender.com/books`, data)
            .then(() => {
                navigate('/');
            })
            .catch((err) => {
                alert('An internal error occurred');
                console.log(err);
            });
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-3xl mb-6 text-center text-gray-800 font-bold">Create Book</h1>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Author</label>
                    <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Publish Year</label>
                    <input
                        type="number"
                        value={publishYear}
                        onChange={(e) => setPublishYear(e.target.value)}
                        className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                    onClick={handleSaveBook}
                    className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    Save
                </button>
            </div>
        </div>
    );
};

export default CreateBooks;
