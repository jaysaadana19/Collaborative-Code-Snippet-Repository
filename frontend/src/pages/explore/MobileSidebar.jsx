import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import ExploreSidebar from "./exploreSidebar"
import { AlignLeft } from "lucide-react"
  
const MobileSidebar = () => {
  return (
    <>
    <Sheet>
        <SheetTrigger className='block md:hidden'>
            <AlignLeft className="p-1 h-8 w-8 hover:bg-blue-50 rounded-sm"/>
        </SheetTrigger>
        <SheetContent side={'left'} className='w-80  p-0' >
            <ExploreSidebar />
        </SheetContent>
    </Sheet>
    </>
  )
}

export default MobileSidebar
