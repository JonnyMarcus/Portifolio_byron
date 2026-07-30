import Infopill from "@/src/componets/infopill";
import { recipes } from "@/src/lib/data";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface RecipePageProps {
  params: Promise<{ id: string }>;
}

export default async function ReceitaPage({ params }: RecipePageProps) {
  const { id } = await params;
  const recipe = recipes.find((recipe) => recipe.id === id);

  if (!recipe) {
    return notFound();
  }
  return (
    <main className="grow p-8">
      <div className="container mx-auto">
        <Link
          className=" flex text-orange-500 hover:text-orange-700 transition-colors mb-6"
          href="receitas"
        >
          <ChevronLeft /> Voltar para receitas
        </Link>
        <section className="rounded-lg overflow-hidden shadow-md">
          <div className="relative h-96 w-full">
            <Image
              src={recipe.image}
              alt={recipe.title}
              fill
              className="object-cover"
            />
          </div>

          <div className=" flex flex-col gap-6 p-6">
            <div>
              <h1 className="text-3xl font-bold">{recipe.title}</h1>
              <p>{recipe.description}</p>
            </div>

            <div className="flex gap-4">
              <Infopill title="Preparo" info={recipe.prepTime} />
              <Infopill title="Cozimento" info={recipe.cookTime} />
              <Infopill title="Porção" info={recipe.servings} />
              <Infopill title="Categoria" info={recipe.category} />
            </div>

            {/* Colunas */}
            <div className="grid grid-cols-2">
              {/* coluna dos ingredientes */}
              <div>
                <h2 className="text-xl font-bold mb-4">Ingredientes</h2>
                <ul className="list-disc list-inside space-y-2">
                  {recipe.ingredients.map((ingredient) => (
                    <li className="marker:text-orange-500">{ingredient}</li>
                  ))}
                </ul>
              </div>
              {/* coluna do preparo */}
              <div>
                <h2 className="text-xl font-bold mb-4">Modo preparo</h2>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
