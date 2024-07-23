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

const invoices = [
  {
    nome: "Letícia Fernando Moraes",
    rnp: "1113379024",
    situacao: "Ativo",
    UF: "AL",
  },
  {
    nome: "Letícia Fernando Moraes",
    rnp: "0013379024",
    situacao: "Ativo",
    UF: "AL",
  },
  {
    nome: "Letícia Fernando Moraes",
    rnp: "4513379024",
    situacao: "Ativo",
    UF: "AL",
  },
  {
    nome: "Letícia Fernando Moraes",
    rnp: "2213379024",
    situacao: "Cancelado",
    UF: "RJ",
  },
  {
    nome: "Letícia Fernando Moraes",
    rnp: "2213379024",
    situacao: "Migrado",
    UF: "SP",
  },
]

export function SearchResultTable() {
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
        {invoices.map((invoice) => (
          <TableRow key={invoice.nome}>
            <TableCell className="font-medium">{invoice.nome}</TableCell>
            <TableCell>{invoice.rnp}</TableCell>
            <TableCell>{invoice.situacao}</TableCell>
            <TableCell className="text-center">{invoice.UF}</TableCell>
            <TableCell className="text-right">...</TableCell>
          </TableRow>
        ))}
      </TableBody>
      </Table>
    </>
   
  )
}
