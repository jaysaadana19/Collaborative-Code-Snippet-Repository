
import ExploreSidebar from './ExploreSidebar';
import MobileSidebar from './MobileSidebar';

import { Outlet } from 'react-router-dom';

const Explore = () => {
  return (
    <main className='w-full h-screen flex '>
      <div className='hidden md:block h-full'>
        <ExploreSidebar />
      </div>
      <section className='flex flex-col h-full w-full '>
        <nav className='min-h-14  flex items-center py-2 px-4'>
        <MobileSidebar />
        </nav>
        <section className='h-full w-full p-2 bg-blue-50 rounded-tl-md overflow-hidden'>
          <Outlet />
        </section>
      </section>
    </main>
  )
}

export default Explore
