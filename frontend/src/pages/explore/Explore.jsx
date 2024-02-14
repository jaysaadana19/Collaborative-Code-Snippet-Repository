
import { ArrowLeft } from 'lucide-react';
import ExploreSidebar from './ExploreSidebar';
import MobileSidebar from './MobileSidebar';
import { useLocation, useNavigate } from 'react-router-dom';

import { Outlet } from 'react-router-dom';

const Explore = () => {
  const navigate = useNavigate()
  const location = useLocation();
  
  console.log(location.pathname)
  return (
    <main className='w-full h-screen flex '>
      <div className='hidden md:block h-full'>
        <ExploreSidebar />
      </div>
      <section className='flex flex-col h-full w-full '>
        <nav className='min-h-14  flex items-center py-2 px-4'>
        <MobileSidebar />
        </nav>
        <section className='h-full relative w-full p-2 bg-blue-50 rounded-tl-md overflow-hidden'>
          <Outlet />
          {
            location.pathname !== '/explore' &&
          <ArrowLeft onClick={() =>  navigate(-1)} className='absolute text-blue-500 p-1.5 mt-2 h-8 w-8 top-0 bg-white rounded-lg'/>
          }
        </section>
      </section>
    </main>
  )
}

export default Explore
