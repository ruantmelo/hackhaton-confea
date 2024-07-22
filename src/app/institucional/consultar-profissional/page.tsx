import { SearchProfessionalForm } from "./_components/searchProfessionalForm";

export default function Page(){
  return (
    <main className='flex flex-col items-center'>
      <h1 className='text-4xl font-semibold text-center mt-8'>
        Consultar Profissional
      </h1>
      <p className='mt-4 mb-8'>Encontre um profissional registrado na base de dados do CONFEA</p>

      <SearchProfessionalForm />
    </main>
  );
}