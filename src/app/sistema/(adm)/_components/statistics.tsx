import { Card, CardContent } from "@/components/ui/card";
import { FileCheck, TriangleAlert } from "lucide-react";
import { GrUserWorker } from "react-icons/gr";

export function Statistics() {
  return (
    <div className="mt-6 md:mt-12">
      <h2 className="text-2xl mb-4">
        Estatísticas{" "}
        <span className="text-sm text-gray-500">{"(Últimos 7 dias)"}</span>
      </h2>

      <div className="flex flex-col md:grid grid-cols-[repeat(3,_minmax(120px,_400px))] gap-4">
        <Card className="pt-4">
          <CardContent className="text-gray-500">
            <div className="flex items-center gap-4">
              <GrUserWorker size={64} />
              <div>
                <h3 className="text-2xl font-bold text-gray-800">3.500</h3>
                <p>Profissionais trabalharam na região</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-4">
          <CardContent className="text-gray-500">
            <div className="flex items-center gap-4">
              <FileCheck size={64} />
              <div>
                <h3 className="text-2xl font-bold text-gray-800">10.200</h3>
                <p>ARTs emitidas</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="pt-4">
          <CardContent className="text-gray-500">
            <div className="flex items-center gap-4">
              <TriangleAlert size={64} />
              <div>
                <h3 className="text-2xl font-bold text-gray-800">2.000</h3>
                <p>Fiscalizações realizadas</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
