'use client'

import { HelpCircle, MoveLeft, MoveRight } from "lucide-react"
import { Button } from "../ui/button"
import { atom, useAtom } from 'jotai' 
import Link from "next/link"
import { links } from "./utils"

export const sidebarOpenAtom = atom(false)

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useAtom(sidebarOpenAtom)

  const className = isOpen ? 'w-[280px]' : 'w-[80px]'

  return ( 
    <>
      <aside className={`hidden md:flex flex-col h-full relative bg-primary transition-all duration-300 transition- text-gray-200 px-4 py-6  ${className}`}>

        <div className='flex w-full justify-end'>
          <Button variant={'link'} className='text-gray-200' size="icon" onClick={() => setIsOpen(cur => !cur)}>
            { isOpen ? <MoveLeft /> : <MoveRight />}
          </Button>
        </div>
        
        <nav className='flex flex-col gap-y-2 mt-[100px] overflow-hidden'>
          {links.map((link) => (
            <Link
              href={link.to}
              className={`${link.disabled ? 'opacity-30 pointer-events-none ' : ''} flex items-center gap-4 p-2 h-[40px] w-[200px] hover:text-green-500 transition-colors`}
              key={link.text}
            >
              <link.icon size={24} className="ml-1"/>
              <span className={isOpen ? '' : 'hidden'}>
                {link.text}
              </span>
            </Link>
          ))}
        </nav>
        
        <div className='mt-auto mb-0'>
          <a  className='opacity-30 pointer-events-none flex items-center gap-4 p-2 h-[40px] w-[200px] hover:text-green-500 transition-colors'>
            <HelpCircle className="ml-1" />
            <span className={isOpen ? '' : 'hidden'}>Central de Ajuda</span>
          </a>

          <div className='text-sm mt-4 text-center'>
            Versão 1.0.0
          </div>
        </div>
      </aside>
    </>
  )
}