'use client'

import { useState } from "react";
import { ProfissionalDialog } from "./_components/profissionalDialog";
import { SearchProfessionalForm } from "./_components/searchProfissionalForm";
import { SearchResultTable } from "./_components/searchResultTable";
import { Profissional } from "@/types/profissional";


export default function Page(){
  const [profissional, setProfissional] = useState<Profissional | undefined>(undefined)

  const onCloseProfissionalDialog = () => {
    setProfissional(undefined)
  }

  return (
    <main className='flex flex-col items-center max-w-4xl mx-auto'>
      <h1 className='text-4xl font-semibold text-center mt-8'>
        Consultar Profissional
      </h1>
      <p className='mt-4 mb-8'>Encontre um profissional registrado na base de dados do CONFEA</p>

      <SearchProfessionalForm />

      <SearchResultTable selectProfissional={setProfissional}/>

      <ProfissionalDialog onClose={onCloseProfissionalDialog} profissional={profissional}/>
    </main>
    
  );
}