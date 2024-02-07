import React from 'react'

const ListCard = ({snippetTitle,snippetUserName, snippetLikes, snippetDiss}) => {
  return (
    <main className=' flex justify-between h-10 w-full bg-slate-50 py-0.5 px-1 rounded-sm cursor-pointer'>
      <div className='flex flex-col justify-center h-full leading-none'>
        {/* TODO: When backend is done - limit the no of characters to fit with UI for snippetTitle */}
         <p className='font-semibold text-xs text-neutral-700 hover:underline cursor-pointer'>{'Palindrome'}</p> {/* snippetTitle */}
         <p className='font-semibold text-[8px] text-neutral-500 hover:underline cursor-pointer'>{'@Someone#422'}</p> {/* postedBy */}
      </div>
      <div className='flex flex-col justify-center text-[9px] items-end leading-[1.8]'>
        <p className='font-semibold text-neutral-500'>Likes <span className='py-px px-1 bg-green-400 text-white rounded-sm'>{'122'}</span></p> {/* snippetLikes */}
        <p className='font-semibold text-neutral-500'>Discussion <span className='py-px px-1 bg-teal-500 text-white rounded-sm'>{'001'}</span></p> {/* snippetsDiscussions */}
      </div>
    </main>
  )
}

export default ListCard
