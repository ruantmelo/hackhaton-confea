import { Metadata } from "next";
import { ShortCuts } from "./_components/shortCuts";
import { Statistics } from "./_components/statistics";

export const metadata: Metadata = {
  title: "Sistema - Admin",
  description: "Home do administrador do sistema",
};

export default function Home() {
  return (
    <div>
      <ShortCuts />
      <Statistics />
    </div>
  );
}
