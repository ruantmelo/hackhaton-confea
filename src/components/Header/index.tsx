'use client'

import { useMediaQuery } from "@/hooks/useMediaQuery"
import { MobileSidebar } from "../sidebar/mobile"
import { UserMenu } from "./UserMenu"

export const Header = () => {
  const isMobile = useMediaQuery('(max-width: 770px)')

  return (
    <header className='flex w-full px-12 py-4 justify-between bg-gray-50 border-b-2 '>
       {isMobile && <MobileSidebar />}

      <div className='flex items-center gap-2'>
       
        <img src="/logo-confea-crea-al.png" alt="Logo" className="hidden md:inline md:max-w-[300px]" />
      <p className='hidden md:block'>| Sistema Administrativo</p>
      </div>
      <UserMenu />
    </header>
  )
}