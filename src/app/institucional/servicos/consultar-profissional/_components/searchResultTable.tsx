import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Profissional } from "@/types/profissional"
import { statusRNPLabels } from "@/types/statusLabels"

const profissionais: Profissional[] = [
  {
    nome: "Letícia Fernando Moraes",
    rnp: "1113379024",
    numRegistroCrea: "",
    dataCriacao: "2021-09-01",
    statusRnp: 0,
    titulos: [
      'Engenheira Civil',
    ],
    ufNaturalidade: 'AL',
    cidadeNaturalidade: 'Maceió',
  },
  {
    nome: "Letícia Almeida Almada",
    rnp: "0013379024",
    numRegistroCrea: "1231233",
    dataCriacao: "2021-09-01",
    statusRnp: 1,
    titulos: [
      'Engenheira Civil',
    ],
    ufNaturalidade: 'AL',
    cidadeNaturalidade: 'Maceió',
  },
  {
    nome: "Letícia Pedro Rocha",
    rnp: "4513379024",
    numRegistroCrea: "1231233",
    dataCriacao: "2021-09-01",
    statusRnp: 1,
    titulos: [
      'Engenheira Civil',
    ],
    ufNaturalidade: 'AL',
    cidadeNaturalidade: 'Maceió',
  },
  {
    nome: "Letícia Fernando Moraes",
    rnp: "2213379024",
    statusRnp: 0,
    titulos: [
      'Engenheira Civil',
    ],
    ufNaturalidade: 'AL',
    cidadeNaturalidade: 'Maceió',
    dataCriacao: "2021-09-01",
    numRegistroCrea: "1231233",
  },
  {
    nome: "Letícia Fernando Moraes",
    rnp: "2213379024",
    statusRnp: 0,
    titulos: [
      'Engenheira Civil',
    ],
    ufNaturalidade: 'AL',
    cidadeNaturalidade: 'Maceió',
    dataCriacao: "2021-09-01",
    numRegistroCrea: "1231233",
  },
]


interface SearchResultTableProps{
  selectProfissional: (profissional: Profissional) => void
}

export function SearchResultTable({selectProfissional}: SearchResultTableProps) {
  return (
    <>
    <div className="mt-16">
      <h3 className="text-xl text-center mt-8">
        Resultados da busca
      </h3>
    </div>
     <Table className='mt-6' >
      <TableHeader>
        <TableRow className="font-bold">
          <TableHead>Nome</TableHead>
          <TableHead>RNP</TableHead>
          <TableHead>Situação</TableHead>
          <TableHead className="text-center">UF</TableHead>
          <TableHead className="text-right"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {profissionais.map((profissional) => (
          <TableRow key={profissional.nome}>
            <TableCell className="font-medium">{profissional.nome}</TableCell>
            <TableCell>{profissional.rnp}</TableCell>
            <TableCell>{statusRNPLabels[profissional.statusRnp]}</TableCell>
            <TableCell className="text-center">{profissional.ufNaturalidade}</TableCell>
            <TableCell className="text-right">
              <Button size='sm' variant='outline' onClick={() => selectProfissional(profissional)}>Ver</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      </Table>
    </>
   
  )
}
