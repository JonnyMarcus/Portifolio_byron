import Infopill from "@/src/componets/infopill";
import PreparationStep from "@/src/componets/PreparationStep";
import { buscarReceitaPorIdAPI } from "@/src/lib/api";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface RecipePageProps {
  params: Promise<{ id: string }>;
}

export default async function ReceitaPage({ params }: RecipePageProps) {
  const { id } = await params;
  const recipe = await buscarReceitaPorIdAPI(id);

  if (!recipe) {
    return notFound();
  }

  return (
    <main className="grow py-6 sm:py-10 bg-stone-50/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Link
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors mb-6 group"
          href="/receitas"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Voltar para receitas
        </Link>

        <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
          {/* Imagem com Altura Responsiva */}
          <div className="relative h-64 sm:h-80 md:h-96 w-full bg-stone-100">
            <Image
              src={recipe.image || "/receitas/bolo-chocolate.png"}
              alt={recipe.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-6 p-5 sm:p-8">
            <div>
              <h1 className="text-2xl sm:text-4xl font-bold text-stone-900 leading-tight">
                {recipe.title}
              </h1>
              <p className="text-stone-600 text-sm sm:text-base mt-2 leading-relaxed">
                {recipe.description}
              </p>
            </div>

            {/* Marcadores de Informações em Grid Responsivo */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-stone-50 p-3 sm:p-4 rounded-xl border border-stone-100">
              <Infopill title="Preparo" info={recipe.prepTime} />
              <Infopill title="Cozimento" info={recipe.cookTime} />
              <Infopill title="Porções" info={`${recipe.servings} pessoas`} />
              <Infopill title="Categoria" info={recipe.category} />
            </div>

            {/* Colunas Responsivas de Ingredientes e Modo de Preparo */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-slate-100">
              {/* Coluna dos Ingredientes */}
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-stone-900 mb-4 pb-2 border-b border-orange-100 flex items-center justify-between">
                  <span>Ingredientes</span>
                  <span className="text-xs font-normal text-stone-400">
                    {recipe.ingredients.length} itens
                  </span>
                </h2>
                <ul className="space-y-2.5 text-sm sm:text-base text-stone-700">
                  {recipe.ingredients.map((ingredient, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-orange-500 font-bold">•</span>
                      <span>{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Coluna do Modo de Preparo */}
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-stone-900 mb-4 pb-2 border-b border-orange-100">
                  Modo de preparo
                </h2>
                <ol className="space-y-4">
                  {recipe.instructions.map((instruction, index) => (
                    <PreparationStep
                      key={index}
                      index={index + 1}
                      description={instruction}
                    />
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
