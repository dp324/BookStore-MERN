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
    const [showType, setShowType] = useState('table');
    useEffect(() => {
        axios
            .get('http://localhost:5555/books')
            .then((res) => {
                setBooks(res.data.data);
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
            <h1 className="text-3xl my-8 ">Books List</h1>
                <Link to= '/books/create'>
                    <MdOutlineAddBox  className="text-sky-800 text-4xl"/>
                </Link>
        </div>
        {
            showType === 'table' ? (
                <BooksTable books={books}/>
            ) : (
                <BooksCard books={books}/>
            )
        }
    </div>
  )
}

export default Home
