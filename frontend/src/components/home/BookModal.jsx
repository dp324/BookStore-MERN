import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className='fixed bg-black bg-opacity-50 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className='w-full max-w-md bg-white rounded-lg shadow-lg p-6 relative'
      >
        <AiOutlineClose
          className='absolute top-4 right-4 text-2xl text-blue-600 cursor-pointer'
          onClick={onClose}
        />
        <h2 className='absolute top-4 left-4 bg-blue-300 text-blue-800 px-2 py-1 rounded-lg text-center text-base'>
          {book.publishYear}
        </h2>
        <br /><br />
        <h4 className='text-gray-500 mb-2'>{book._id}</h4>
        <div className='flex items-center mb-4'>
          <PiBookOpenTextLight className='text-green-500 text-2xl mr-2' />
          <h2 className='text-lg font-semibold'>{book.title}</h2>
        </div>
        <div className='flex items-center mb-4'>
          <BiUserCircle className='text-purple-500 text-2xl mr-2' />
          <h2 className='text-lg font-semibold'>{book.author}</h2>
        </div>
        <p className='text-gray-700 mb-2'>Anything You Want to Show</p>
        <p className='text-gray-700'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
          molestias voluptas nobis deserunt consectetur! Temporibus,
          voluptatibus ullam. Autem, cum, perferendis nobis doloribus illo
          iusto amet velit ipsum necessitatibus veritatis!
        </p>
      </div>
    </div>
  );
};

export default BookModal;
