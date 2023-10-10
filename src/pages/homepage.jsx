
import { Button } from '@material-tailwind/react';
import './homepage.css'
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <>
      <div className="w-full min-h-[100vh] bg-cover bg-frontalhotel bg-bottom flex justify-center items-center">
      <div className="w-full h-[100vh]  grid grid-cols-12 ">
          <div className="col-span-6 "></div>
          <div className="col-span-6 col-start-7 p-3 flex items-center justify-center flex-col bg-gray-100 bg-opacity-20 rounded-l-full">
            <h1
           
            className="text-[3.3em] font-extrabold text-gray-400 text-center">
              Villa Sort reservation
            </h1>
            <h2 className=' mb-10 text-gray-300 font-extrabold'>Better services-motivation </h2>
           <Link to={'homepage'}>
           <Button className='w-[150px] h-12' variant='gradient' color='blue-gray'>Check</Button>
           </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
