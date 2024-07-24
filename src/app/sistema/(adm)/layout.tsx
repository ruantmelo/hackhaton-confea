import { Header } from "@/components/Header";
import { Sidebar } from "@/components/sidebar";
import { Providers } from "@/lib/providers";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <div className="h-dvh flex">
        <Sidebar />
        <div className="w-full">
          <Header />
          <main className="mt-6 px-6 md:px-12">{children}</main>
        </div>
      </div>
    </Providers>
  );
}
