"use client";

import RecipeCards from "@/src/componets/RecipeCards";
import RecipeFormModal from "@/src/componets/RecipeFormModal/page";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import type { Recipe } from "@/src/lib/data";
import api from "@/src/lib/api";

export default function ReceitasPage() {
  const [isRecipeModalOpen, setIsRecipeModalOpen] = useState(false);
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const handleCreateRecipe = (recipeData: Omit<Recipe, "id">) => {
    const newRecipe: Recipe = {
      ...recipeData,
      id: (recipes.length + 1).toString(),
    };
    setRecipes((prev) => [...prev, newRecipe]);
  };
  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await api.get("/recipes");

        setRecipes(response.data);
      } catch (error) {
        console.log("Error ao requisitar as receitas", error);
      }

      fetchRecipe();
    };
  }, []);

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
        onSave={handleCreateRecipe}
      />
    </main>
  );
}
