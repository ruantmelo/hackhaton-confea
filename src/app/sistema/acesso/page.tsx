import Link from "next/link";
import { SignInForm } from "./_components/signInForm";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Entrar",
  description: "Acesso ao Sistema do Profissional",
};

export default function Access() {
  return (
    <div className="flex flex-col lg:grid h-full w-full justify-center lg:grid-rows-1 lg:grid-cols-[1.5fr_1fr] lg:h-lvh bg-[url('/construction-people.png')]">
      <aside className="flex flex-col justify-center lg:justify-between bg-access-background p-6 lg:p-12 lg:pb-4 text-white">
        <div className="hidden lg:flex flex-col justify-between">
          <div className="max-w-screen-lg mt-[120px] ">
            <h1 className="text-4xl font-bold">
              Bem vindo ao Sistema Unificado CONFEA/CREA/MUTUA
            </h1>
            <p className="mt-6">
              O sistema foi desenvolvido para oferecer uma interface eficiente e
              acessível, facilitando a comunicação e interação entre os
              profissionais, empresas e os conselhos regionais. Aqui, você
              poderá realizar suas consultas, registrar suas atividades,
              atualizar suas informações profissionais e acessar uma ampla gama
              de serviços e recursos que visam aprimorar o exercício da sua
              profissão.
            </p>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold">
              Acesse os serviços disponibilizados ao público:
            </h2>
            <ul className="mt-4 list-square list-inside marker:text-yellow-crea">
              <li>
                <Link href={"/institucional/servicos/consultar-profissional"}>
                  Consulta de Profissional
                </Link>
              </li>
              <li className="mt-2">
                <Link href={"#"}>Consulta de Universidades Cadastradas</Link>
              </li>
              <li className="mt-2">
                <Link href={"#"}>Validação de documentos</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center">
          <img src="/logo-confea-crea-mutua.png" alt="Logo do CREA" />
        </div>
      </aside>
      <main className="bg-white p-8 lg:p-12 lg:pb-4 flex flex-col justify-between ">
        <div className="mt-8 lg:mt-[120px]">
          <h2 className="text-2xl text-center font-semibold mb-8 ">
            Acesso ao Sistema do Profissional
          </h2>
          <SignInForm />
        </div>

        <div className="end text-center">Versão 1.0.0</div>
      </main>
    </div>
  );
}
