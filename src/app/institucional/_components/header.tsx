import Image from "next/image";
import Link from "next/link";

import { LuLogIn } from "react-icons/lu";

export function Header() {
  return (
    <nav className="bg-primary py-4 px-24 flex justify-between items-center text-white">
      <Image width={230} height={60} src={'/logo-confea-white.png'} alt={'Logo CONFEA'}/>

      <ul className='flex max-w-xl w-full justify-between text-lg '>
        <li><a href="#">Sobre</a></li>
        <li><a href="#">Transparência</a></li>
        <li><a href="#">Serviços</a></li>
        <li><a href="#">Fale Conosco</a></li>
      </ul>

      <Link href="/login" className='flex gap-2 items-center'>
        <LuLogIn />
        Área do Profissional
      </Link>
    </nav>
  );
}