import { useEffect, useState} from "react"
import React from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"
import {AiOutlineEdit} from 'react-icons/ai';
import {MdOutlineAddBox, MdOutlineDelete} from 'react-icons/md';
import {BsInfoCircle} from 'react-icons/bs';
import BooksCard from "../components/home/BooksCard.jsx";
import BooksTable from "../components/home/BooksTable.jsx";

const Home = () => {
    const [books, setBooks] = useState([]);
    const [showType, setShowType] = useState('card');
    const [bookAfterQuery, setBookAfterQuery] = useState([]);
    function filterFunction(e){
        const filteredBooks = books.filter(book => book.author.toLowerCase().includes(e.target.value)).map(book => ({"title":book.title, "author":book.author, "publishYear": book.publishYear}));
        setBookAfterQuery(filteredBooks);
    }

    useEffect(() => {
        axios
            .get(`https://bookstore-mern-api1.onrender.com/books`)
            .then((res) => {
                setBooks(res.data.data);
                setBookAfterQuery(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);
    
  return (
    <div className="p-4">
        <div className="flex justify-center items-center gap-x-4">
            <button className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg" onClick={() => setShowType('table')}>
                Table
            </button>
            <button className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg" onClick={() => setShowType('card')}>
                Card
            </button>
        </div>
        <div className="flex justify-between items-center gap-x-4">
            <h1 className="text-3xl my-8 mx-5">Books List</h1>
            <div>
                <div className="flex justify-between items-center">
                <input type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500      focus:border-blue-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by author name" onChange={filterFunction}/>
                <Link to= '/books/create' className="mx-5">
                    <MdOutlineAddBox  className="text-sky-800 text-4xl"/>
                </Link>
                </div>
            </div>
        </div>
        {
            
            showType === 'table' ? (
                <BooksTable books={bookAfterQuery}/>
            ) : (
                <BooksCard books={bookAfterQuery}/>
            )
        }
    </div>
  )
}

export default Home
