import React from 'react'
import { Link } from 'react-router-dom';
import { Bell, Bookmark, Brain, ChevronDown, Clock, DraftingCompass, Search, Settings, User, Users2,} from 'lucide-react';
import {
  DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "../../Components/ui/dropdown-menu"
  import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Input } from '../../Components/ui/input';
import { Separator } from '../../Components/ui/separator';
import ListCard from '../../Components/core/ListCard';

const ExploreSidebar = () => {
  return (
    <>
    <aside className='flex flex-col w-72 md:w-64 md:min-w-52 xl:w-72 h-full py-px px-1 relative'>
        <div className='h-14 w-full flex justify-between items-center'>
            <DropdownMenu>
                <DropdownMenuTrigger  className='flex gap-2 items-center text-xs font-semibold hover:underline hover:bg-slate-50 p-1.5 rounded-md'>   
                <img
                src='data:image/jpeg;base64,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'
                alt='profile'
                className='h-8 w-8 rounded-full' 
                />
                    {'Someone#422'}
                    <ChevronDown className='h-5 w-5'/>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='ml-14 w-40 '>
                    <DropdownMenuLabel className='flex items-center gap-2 '><Settings  className='h-4 w-4 '/><p>Account</p></DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem><User className='h-4 w-4 mr-2'/><p>Profile</p></DropdownMenuItem>
                    <DropdownMenuItem><DraftingCompass className='h-4 w-4 mr-2'/><p>Draft</p></DropdownMenuItem>
                    <DropdownMenuItem><Users2 className='h-4 w-4 mr-2'/><p>Team</p></DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <Bell className=' fill-black h-7 w-7 p-1.5 cursor-pointer hover:bg-slate-50 rounded-md'/>
        </div>
        <section className='py-2'>
            <div className='relative w-full h-fit px-1'>
            <Search size={16} className='absolute top-2 left-3 text-neutral-600'/>
            <Input placeholder="Search your codes & discus.." className='h-8 pl-8 text-xs text-neutral-600 placeholder:text-[10px] placeholder:text-neutral-400 ring-0 ring-offset-0 focus:!ring-0 focus:!ring-offset-0'/>
            </div>
            <Separator  className='my-2'/>
            <section className='flex flex-col h-full'>
                <Accordion type="single" collapsible defaultValue="item-1" className='p-2 overflow-y-scroll'>
                  <AccordionItem  value="item-1" className='border-none' >
                    <AccordionTrigger>
                      <Link to={'/explore/recents'} className='flex gap-1 items-center'>
                        <Clock size={20} className='fill-black text-white'/>
                        Recents
                      </Link>
                    </AccordionTrigger>
                    <AccordionContent className='ml-6 space-y-1.5'>
                      <ListCard />
                      <ListCard />
                      <ListCard />
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className='border-none'>
                    <AccordionTrigger>
                      <Link to={'/explore/saves'} className='flex gap-1 items-center'>
                        <Bookmark size={20} className='fill-black'/>
                        Saves
                      </Link>
                    </AccordionTrigger>
                    <AccordionContent className='ml-6 space-y-1.5'>
                      <ListCard />
                      <ListCard />
                      <ListCard />
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className='border-none'>
                    <AccordionTrigger>
                      <Link to={'/explore/Colab'} className='flex gap-1 items-center'>
                        <Brain size={20} className='text-white fill-black'/>
                        Collaborations
                      </Link>
                    </AccordionTrigger>
                    <AccordionContent className='ml-6 space-y-1.5'>
                      <ListCard />
                      <ListCard />
                      <ListCard />
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
            </section>
        </section>
      </aside>
    </>
  )
}

export default ExploreSidebar
