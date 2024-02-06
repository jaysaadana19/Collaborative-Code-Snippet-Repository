import { Button } from '@/components/ui/button'
import React from 'react'
import { snippetsData } from '@/lib/snippetsData';
import { Combine, Plus, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import PostCard from '@/components/core/PostCard';

const ListingPost = () => {
  return (
    <>
    <div className='min-h-16 w-full bg-white rounded-lg mb-2 flex items-center justify-between p-2'>
          <aside className='relative h-fit w-full pr-4'> 
          <Search className='h-5 w-5 absolute top-2 left-2 text-neutral-600'/>
          <Input 
          className='h-9 w-full min-h-max  xl:min-w-[672px] max-w-2xl pl-9 placeholder:text-neutral-400'
          placeholder='Search by languages, keywords, tags, users ...'
          />
          </aside>
          <div className='flex gap-4'>
            <Button className='hidden lg:flex items-center justify-center  h-12 w-40 bg-blue-400 text-white rounded-lg'>Add a snippet</Button>
            <Button className='lg:hidden flex items-center justify-center  h-12 w-12 bg-blue-400 text-white rounded-lg'><Plus /></Button>
            <Button className='hidden lg:flex  items-center justify-center h-12 w-40 bg-green-400 text-white rounded-lg'>Collaborate</Button>
            <Button className='lg:hidden flex  items-center justify-center h-12 w-12 bg-green-400 text-white rounded-lg'><Combine /></Button>
          </div>
          </div>
          
          <div className='flex flex-col gap-8 md:gap-0 h-full w-full py-4 px-2 overflow-y-scroll '>
          
            {
                snippetsData.map((snippet, idx) => (
                  <PostCard 
                  key={idx}
                  data={snippet}
                  />
                ))
              }
          </div>
    </>
  )
}

export default ListingPost
