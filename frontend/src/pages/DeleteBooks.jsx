import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'


const DeleteBooks = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const handleDeleteBook = () => {
    axios
      .delete(`https://bookstore-mern-api1.onrender.com/books/${id}`)
      .then(()=>{
        navigate('/')
      })
      .catch((err) => {
        alert('An internal Error occurred!')
        console.log(err);
      })
  }
  return (
    <div className='p-4'>
      <h1 className='text-3xl my-4'>Delete Book</h1>
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>Are you sure want to delete this book??</h3>
        <button className='p-4 bg-red-600 ext-white m-8 w-full text-white rounded-xl' onClick={handleDeleteBook}>Yes Delete It</button>

      </div>
    </div>
  )
}

export default DeleteBooks
