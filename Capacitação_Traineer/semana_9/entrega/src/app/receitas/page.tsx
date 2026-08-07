import RecipeCards from "@/src/componets/RecipeCards";
import RecipeFormModal from "@/src/componets/RecipeFormModal/page";
import { recipes } from "@/src/lib/data";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function ReceitasPage() {
  const [isRecipeModalOpen, setIsRecipeModalOpen] = useState(false);
  return (
    <main className=" grow py-8">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold">Todas as receitas</h1>
          <button
            onClick={() => setIsRecipeModalOpen(true)}
            className="flex gap-2 px-4 py-2 border rounded-lg text-white items-center bg-black hover:bg-slate-900 transition-colors"
          >
            <Plus size={16} />
            Nova receita
          </button>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-8">
          {recipes.map((recipe) => (
            <RecipeCards key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>

      <RecipeFormModal
        isOpen={isRecipeModalOpen}
        onClose={() => setIsRecipeModalOpen(false)}
      />
    </main>
  );
}
