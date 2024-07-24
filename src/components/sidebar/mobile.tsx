import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { HelpCircle, Menu } from "lucide-react"
import Link from "next/link"
import { links } from "./utils"

export function MobileSidebar() {  
  return (
    <Sheet>
      <SheetTrigger>
        <Menu/>
      </SheetTrigger>
      <SheetContent side='left' className='flex flex-col justify-between h-full'>
        <div>
          <SheetHeader className="pl-0">
            <img src="/logo-confea-crea-al.png" alt="Logo" className="max-w-[200px] mb-4" />
            <SheetTitle className='text-gray-600'>Sistema Administrativo</SheetTitle>
          </SheetHeader>
          <nav className='flex flex-col gap-y-6 mt-16 sm:mt-28 overflow-hidden'>
              {links.map((link) => (
                <Link
                  href={link.to}
                  className={`${link.disabled ? 'opacity-50 pointer-events-none ' : ''} text-gray-600 text-lg text-center flex items-center gap-4 p-2 h-[40px] w-[200px] hover:text-green-500 transition-colors`}
                  key={link.text}
                >
                  <link.icon size={24} className="ml-1"/>
                
                    {link.text}
                
                </Link>
              ))}
          </nav>

        </div>
        <div className='flex flex-col justify-between '>
            <div className=''>
              <a  className='opacity-50 text-gray-600 pointer-events-none flex items-center gap-4 p-2 h-[40px] w-[200px] hover:text-green-500 transition-colors'>
                <HelpCircle className="ml-1" />
                Central de Ajuda
              </a>

              <div className='text-sm mt-4 text-gray-600 text-center'>
                Versão 1.0.0
              </div>
            </div>
        </div>
      </SheetContent>
    </Sheet>

  )
}