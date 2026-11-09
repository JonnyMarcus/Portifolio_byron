import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { buscarReceitasAPI } from "../lib/api";
import RecipeCards from "../componets/RecipeCards";

export default async function Home() {
  const todasReceitas = await buscarReceitasAPI();
  const receitasDestaque = todasReceitas.slice(0, 3);

  return (
    <main className="grow flex flex-col min-h-[calc(100vh-140px)]">
      {/* Seção Hero com Imagem de Fundo e Banner Responsivo */}
      <section className="flex flex-col gap-5 items-center justify-center bg-[url('/receitas/bg_home-receitas.png')] bg-cover bg-center bg-no-repeat py-12 sm:py-16 px-4 text-center">
        <img
          src="/receitas/receitas-deliciosas1.png"
          alt="Texto principal do site Receitas deliciosas"
          width={600}
          height={400}
          className="w-full max-w-xs sm:max-w-md h-auto"
        />

        <p className="text-base sm:text-xl text-stone-600 max-w-md sm:max-w-xl leading-relaxed">
          Descubra receitas simples, práticas e saborosas para todas as ocasiões.
        </p>

        <Link
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg px-6 py-3 transition-colors shadow-xs hover:shadow-md text-sm sm:text-base mt-2"
          href="/receitas"
        >
          Ver todas as receitas
        </Link>
      </section>

      {/* Seção Receitas em Destaque */}
      <section className="py-12 sm:py-16 bg-stone-50/50 flex-1">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center">
          <div className="flex flex-col items-center mb-8 text-center">
            <span className="text-xs uppercase tracking-widest text-orange-600 font-bold mb-1">
              Seleção Especial
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              Receitas em destaque
            </h2>
          </div>

          {/* Grid Responsivo de Destaques */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full mb-10">
            {receitasDestaque.map((recipe) => (
              <RecipeCards key={recipe.id} recipe={recipe} />
            ))}
          </div>

          <Link
            className="inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-orange-600 hover:text-orange-700 transition-colors group"
            href="/receitas"
          >
            Ver todas as receitas
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </main>
  );
}
