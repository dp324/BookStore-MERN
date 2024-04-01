import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'


const EditBooks = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishYear, setPublishYear] = useState('');
    const navigate = useNavigate(); 
    const {id} = useParams();
    useEffect(() => {
      axios.get(`https://book-store-mern-api-phi.vercel.app/books/${id}`)
      .then((res) => {
        setTitle(res.data.title)
        setAuthor(res.data.author)
        setPublishYear(res.data.publishYear)
      })
      .catch((err) => {
        alert("An internal error occurred!")
        console.log(err);
      })
    }, [])
    const handeEditBook = () => {
        const data = {
            title,
            author,
            publishYear,
        }
        axios
            .put(`https://book-store-mern-api-phi.vercel.app/${id}`, data)
            .then(() => {
                navigate('/');
            })
            .catch((err) => {
                alert('An internal error occurred')
                console.log(err);
            })
    }
  return (
    <div className='p-4'>
        <h1 className='text-3xl my-4'>Edit Book</h1>
        <div className='flex flex-col border-2 border-sky-500 rounded-xl w-[600px] p-4 mx-auto'>
            <div className='my-4'>
                <label className='text-xl mr-4 text-gray-500'>Title</label>
                <input type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className='border-2 border-gray-500 px-4 py-2 w-full'
                />
            </div>
            <div className='my-4'>
                <label className='text-xl mr-4 text-gray-500'>Author</label>
                <input type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className='border-2 border-gray-500 px-4 py-2 w-full'
                />
            </div>
            <div className='my-4'>
                <label className='text-xl mr-4 text-gray-500'>Publish-Year</label>
                <input type="number"
                    value={publishYear}
                    onChange={(e) => setPublishYear(e.target.value)}
                    className='border-2 border-gray-500 px-4 py-2 w-full'
                />
            </div>
            <button className='p-2 bg-sky-300 m-8' onClick={handeEditBook}> 
                save
            </button>
        </div>
      
    </div>
  )
}

export default EditBooks
