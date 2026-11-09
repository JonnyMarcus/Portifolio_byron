"use client";

import RecipeCards from "@/src/componets/RecipeCards";
import RecipeFormModal from "@/src/componets/RecipeFormModal/page";
import { Plus, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import type { Recipe } from "@/src/lib/data";
import {
  buscarReceitasAPI,
  criarReceitaAPI,
  excluirReceitaAPI,
} from "@/src/lib/api";

export default function ReceitasPage() {
  const [isRecipeModalOpen, setIsRecipeModalOpen] = useState(false);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [carregando, setCarregando] = useState(true);

  // Busca inicial das receitas na API
  useEffect(() => {
    let ativo = true;

    async function carregar() {
      try {
        const dados = await buscarReceitasAPI();
        if (ativo) {
          setRecipes(dados);
        }
      } catch (error) {
        console.error("Erro ao requisitar as receitas:", error);
      } finally {
        if (ativo) {
          setCarregando(false);
        }
      }
    }

    carregar();
    return () => {
      ativo = false;
    };
  }, []);

  // Criação de nova receita via API
  const handleCreateRecipe = async (recipeData: Omit<Recipe, "id">) => {
    try {
      const novaReceita = await criarReceitaAPI(recipeData);
      setRecipes((prev) => [novaReceita, ...prev]);
    } catch (erro) {
      console.error("Erro ao criar receita:", erro);
    }
  };

  // Exclusão de receita via API
  const handleDeleteRecipe = async (id: string) => {
    try {
      await excluirReceitaAPI(id);
      setRecipes((prev) => prev.filter((r) => r.id !== id));
    } catch (erro) {
      console.error("Erro ao excluir receita:", erro);
    }
  };

  return (
    <main className="grow py-8 sm:py-12 bg-stone-50/40 min-h-[calc(100vh-140px)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Barra de Título e Ação */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-stone-200/70 pb-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-stone-900">
              Todas as receitas
            </h1>
            <p className="text-sm text-stone-500 mt-1">
              Explore o catálogo completo de pratos e sobremesas
            </p>
          </div>

          <button
            onClick={() => setIsRecipeModalOpen(true)}
            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-white text-sm font-semibold bg-orange-600 hover:bg-orange-700 transition-colors shadow-xs hover:shadow-md cursor-pointer w-full sm:w-auto"
          >
            <Plus size={18} />
            Nova receita
          </button>
        </div>

        {/* Estado de Carregamento */}
        {carregando ? (
          <div className="flex flex-col items-center justify-center py-20 gap-3 text-stone-500">
            <Loader2 className="w-8 h-8 animate-spin text-orange-600" />
            <p className="text-sm">Carregando catálogo de receitas...</p>
          </div>
        ) : recipes.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <p className="text-lg font-medium text-stone-700">
              Nenhuma receita cadastrada ainda.
            </p>
            <p className="text-sm text-stone-500 mt-1">
              Clique em "Nova receita" acima para adicionar a primeira.
            </p>
          </div>
        ) : (
          /* Grid Responsivo de Receitas */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8">
            {recipes.map((recipe) => (
              <RecipeCards
                key={recipe.id}
                recipe={recipe}
                onDelete={handleDeleteRecipe}
              />
            ))}
          </div>
        )}
      </div>

      <RecipeFormModal
        isOpen={isRecipeModalOpen}
        onClose={() => setIsRecipeModalOpen(false)}
        onSave={handleCreateRecipe}
      />
    </main>
  );
}
