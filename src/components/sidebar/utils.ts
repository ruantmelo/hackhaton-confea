import { HiOutlineIdentification } from "react-icons/hi2";
import {  Construction, LucideProps, NotepadText, TriangleAlert, Users } from "lucide-react"

export const links: {
  icon: React.FC<LucideProps>;
  text: string;
  to: string;
  disabled?: boolean;
}[] = [
  {
    icon: HiOutlineIdentification,
    text: 'Reg. Pendentes',
    to: '/#',
    disabled: true
  },
  {
    icon: Users ,
    text: 'Profissionais',
    to: '/#',
    disabled: true
  },
  {
    icon: NotepadText,
    text: 'Serviços',
    to: '/#',
    disabled: true
  },
  {
    icon: TriangleAlert,
    text: 'Fiscalizações',
    to: '/#',
    disabled: true
  },
  {
    icon: Construction,
    text: 'Obras',
    to: '/#',
    disabled: true
  }
]