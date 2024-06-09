import React from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteBooks = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const handleDeleteBook = () => {
        axios.delete(`https://book-store-mern-api-phi.vercel.app/books/${id}`)
            .then(() => {
                navigate('/');
            })
            .catch((err) => {
                alert('An internal Error occurred!');
                console.log(err);
            });
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-3xl mb-6 text-center text-gray-800 font-bold">Delete Book</h1>
                <div className="mb-8">
                    <h3 className="text-xl text-center text-gray-700">Are you sure you want to delete this book?</h3>
                </div>
                <div className="flex justify-center">
                    <button
                        className="px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
                        onClick={handleDeleteBook}
                    >
                        Yes, Delete It
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteBooks;
