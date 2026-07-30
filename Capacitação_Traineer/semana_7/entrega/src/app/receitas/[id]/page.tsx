import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ReceitaPage() {
  return (
    <main className="grow p-8">
      <div className="container mx-auto">
        <Link
          className=" flex text-orange-500 hover:text-orange-700 transition-colors"
          href="receitas"
        >
          <ChevronLeft /> Voltar para receitas
        </Link>

        <section className="relative h-96 w-full">
          <Image src="" alt="Titulo da receita" fill />
        </section>

        <div>
          <h1>Titulo da receita</h1>
          <p>descrição da receita</p>

          <div>{/* TODO: componetnes de info */}</div>
        </div>

        {/* Colunas */}
        <div>
          {/* coluna dos ingredientes */}
          <div></div>
          {/* coluna do preparo */}
          <div>{/* TODO: componete do modo de preparo */}</div>
        </div>
      </div>
    </main>
  );
}
