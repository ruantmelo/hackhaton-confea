import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

import { Profissional } from "@/types/profissional"
import { statusRNPLabels } from "@/types/statusLabels";


interface ProfessionalDialogProps {
  profissional?: Profissional;
  onClose: () => void;
}

export function ProfissionalDialog({profissional, onClose} : ProfessionalDialogProps) {
  return (
    <Dialog  open={!!profissional} onOpenChange={open => !open && onClose()}>
    <DialogContent className='max-w-xl'>
      <DialogHeader>
        <DialogTitle>Dados do profissional</DialogTitle>
      </DialogHeader>
      <div className='mt-6 grid gap-6 grid-cols-2 grid-rows-4'>
        <div>Nome: <span className='text-gray-600'>{profissional?.nome}</span></div>
        <div>RNP: <span className='text-gray-600'>{profissional?.rnp}</span></div>
        <div>Situação: <span className='text-gray-600'>{statusRNPLabels[profissional?.statusRnp as number ]}</span></div>
        <div>UF: <span className='text-gray-600'>{profissional?.ufNaturalidade}</span></div>
        <div>Município: <span className='text-gray-600'>{profissional?.cidadeNaturalidade}</span></div>
        <div>Títulos: <span className='text-gray-600'>{profissional?.titulos.join(',')}</span></div>
        <div>Data de Registro: <span className='text-gray-600'>{new Date(profissional?.dataCriacao as string).toLocaleDateString()}</span></div>
      </div>
    </DialogContent>
  </Dialog>

  )
}