import React, { useState } from 'react'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "../components/ui/pagination"
import { Combine, Plus, Search } from 'lucide-react';
import { Input } from '../components/ui/input';
import { cn } from '@/lib/utils';

import { snippetsData } from '@/lib/snippetsData';
import { Link } from 'react-router-dom';
import PostCard from '@/components/core/PostCard';

const ListingPost = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [snippetPerPage, setSnippetPerPage] = useState(6)

  const lastSnippetIdx = currentPage * snippetPerPage;
  const firstSnippetIdx = lastSnippetIdx - snippetPerPage;
  const currentSnippetList = snippetsData.slice(firstSnippetIdx, lastSnippetIdx);
  return (
    <>
      <div className='min-h-16 w-full bg-white rounded-lg mb-2 flex items-center justify-between p-2'>
          <aside className='relative h-fit w-full pr-4'> 
          <Search className='h-5 w-5 absolute top-2 left-2 text-neutral-600'/>
          <Input 
          className='h-9 w-full min-h-max  xl:min-w-[672px] max-w-2xl pl-9 placeholder:text-neutral-400
          ring-0 ring-offset-0 focus:!ring-0 focus:!ring-offset-0'
          placeholder='Search by languages, keywords, tags, users ...'
          />
          </aside>
          <div className='flex gap-4'>
            {/* TODO: Can be optimized */}
            <Link to={'add-snippet'} className='hidden lg:flex items-center justify-center  h-12 w-40 bg-blue-400 hover:bg-blue-300 text-white rounded-lg'>Add a snippet</Link>
            <Link to={'colab'} className='lg:hidden flex items-center justify-center  h-12 w-12 bg-blue-400 hover:bg-blue-300 text-white rounded-lg'><Plus /></Link>
            <Link to={'add-snippet'} className='hidden lg:flex  items-center justify-center h-12 w-40 bg-green-400 hover:bg-green-300 text-white rounded-lg'>Collaborate</Link>
            <Link to={'colab'} className='lg:hidden flex  items-center justify-center h-12 w-12 bg-green-400 hover:bg-green-300 text-white rounded-lg'><Combine /></Link>
          </div>
          </div>
             <div className='flex flex-col gap-8 md:gap-0 h-full min-w-fit py-8 px-2 overflow-y-scroll'>
            
            {
                currentSnippetList.map((snippet, idx) => (
                  <PostCard 
                  key={idx}
                  data={snippet}
                  />
                ))
              }

              {/*Pagination */}
          <div className='pb-12 -mt-4'>
              <SnippetPagination 
              snippetDatalength={snippetsData.length}
              snippetsPerPage={snippetPerPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              isLastPage={
              currentSnippetList.length < snippetPerPage ? true : false
              }
              />
          </div>
          </div>
    </>
  )
}

export default ListingPost

const SnippetPagination = ({ 
  snippetDatalength,
  snippetsPerPage,
  currentPage,
  setCurrentPage,
  isLastPage,
}) => {
  let pages = [];
  for(let i = 1; i <= Math.ceil(snippetDatalength / snippetsPerPage); i++){
    pages.push(i)
  }

  const handleNextClick = () => {
    if(currentPage < pages.length){
      setCurrentPage(currentPage + 1)
    }
  }
  const handlePrevClick = () => {
    if(currentPage > 1){
      setCurrentPage(currentPage - 1)
    }
  }
  return(
    <>
    <Pagination>
      <PaginationContent className='space-x-2 mr-auto md:ml-12'>

        <PaginationItem>
          <PaginationPrevious className={cn('hover:bg-blue-300 hover:text-white border h-8',currentPage === 1 ? 'cursor-not-allowed':'cursor-pointer')}  onClick={() => handlePrevClick()}/>
        </PaginationItem>

        <PaginationItem className=''>
          <PaginationNext className={cn('hover:bg-blue-300 hover:text-white border h-8',isLastPage ? 'cursor-not-allowed':'cursor-pointer')} onClick={() => handleNextClick()} />
        </PaginationItem>

      </PaginationContent>
    </Pagination>
    </>
  )
}


