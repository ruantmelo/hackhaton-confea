import { Card, CardContent } from "@/components/ui/card";

import { HiOutlineIdentification } from "react-icons/hi2";
import { LuUsers, LuAlertTriangle } from "react-icons/lu";

export function ShortCuts() {
  return (
    <>
      <h2 className="text-2xl mb-4">Acesso Rápido</h2>
      <div className="grid grid-cols-3 flex-wrap md:grid-cols-[repeat(3,_minmax(120px,_300px))] gap-6 ">
        <Card className="pt-4">
          <CardContent className="flex flex-col justify-center items-center cursor-not-allowed text-primary">
            <HiOutlineIdentification className="text-3xl sm:text-6xl md:text-8xl" />
            <span className="text-xs text-center sm:text-base md:text-lg">
              Registros Pendentes
            </span>
          </CardContent>
        </Card>
        <Card className="pt-4">
          <CardContent className="flex flex-col justify-center items-center cursor-not-allowed text-primary">
            <LuAlertTriangle className="text-5xl sm:text-6xl md:text-8xl" />
            <span className="text-xs text-center sm:text-base md:text-lg">
              Visulizar Denúncias
            </span>
          </CardContent>
        </Card>
        <Card className="pt-4">
          <CardContent className="flex flex-col justify-center items-center cursor-not-allowed text-primary">
            <LuUsers className="text-4xl sm:text-6xl md:text-8xl" />
            <span className="text-xs text-center sm:text-base md:text-lg">
              Ver Profissionais
            </span>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
