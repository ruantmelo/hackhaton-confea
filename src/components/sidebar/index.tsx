'use client'

import {  ChevronsLeft, ChevronsRight, Construction, HelpCircle, LayoutPanelTop, LucideProps, MoveLeft, MoveRight, NotepadText, ScanSearch, Settings, TriangleAlert, Users } from "lucide-react"
import { Button } from "../ui/button"
import { atom, useAtom } from 'jotai' 
import Link from "next/link"


const links: {
  icon: React.FC<LucideProps>;
  text: string;
  to: string;
  disabled?: boolean;
}[] = [
  {
    icon: Users,
    text: 'Registros Pendentes',
    to: '/#',
    disabled: true
  },
  {
    icon: Users ,
    text: 'Profissionais Cadastrados',
    to: '/turmas',
    disabled: true
  },
  {
    icon: NotepadText,
    text: 'Solicitações',
    to: '/questoes',
  },
  {
    icon: TriangleAlert,
    text: 'Fiscalizações',
    to: '/estrutura',
    disabled: true
  },
  {
    icon: Construction,
    text: 'Obras',
    to: '/estrutura',
    disabled: true
  }
]

export const sidebarOpenAtom = atom(false)

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useAtom(sidebarOpenAtom)

  const className = isOpen ? 'w-[200px]' : 'w-[80px]'

  return <aside className={`h-full relative bg-primary transition-all text-gray-200 px-4 py-6 flex flex-col ${className}`}>
  <div className="relative">
    <h1 className='text-2xl'></h1>
    <div className={`${isOpen ? '' : 'opacity-0'} ml-4`}>Administrativo</div>

  </div>
  <Button variant={'link'} className='text-gray-200 absolute top-0 translate-y-1/2 t right-0' size="icon" onClick={() => setIsOpen(cur => !cur)}>
    { isOpen ? <MoveLeft /> : <MoveRight />}
  </Button>
  
  
  <nav className='flex flex-col gap-y-2 mt-[100px] overflow-hidden'>
    {links.map((link) => (
      <Link
        href={link.to}
        className={`${link.disabled ? 'opacity-30 pointer-events-none ' : ''} flex items-center gap-4 p-2 h-[40px] w-[200px] hover:text-green-500 transition-colors`}
        key={link.text}
      >
        <link.icon className="ml-1"/>
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
}