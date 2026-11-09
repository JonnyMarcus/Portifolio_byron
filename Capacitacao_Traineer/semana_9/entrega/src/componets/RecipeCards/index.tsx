"use client";

import { Recipe } from "@/src/lib/data";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface RecipeCardProps {
  recipe: Recipe;
  onDelete?: (id: string) => void;
}

export default function RecipeCards({ recipe, onDelete }: RecipeCardProps) {
  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (window.confirm(`Deseja realmente excluir a receita "${recipe.title}"?`)) {
      if (onDelete) {
        onDelete(recipe.id);
      }
    }
  };

  return (
    <div className="flex flex-col h-full bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all group">
      <Link href={`/receitas/${recipe.id}`} className="flex flex-col flex-1">
        {/* Imagem com proporção responsiva */}
        <div className="relative w-full h-48 sm:h-52 bg-stone-100 overflow-hidden">
          <Image
            src={recipe.image || "/receitas/bolo-chocolate.png"}
            alt={recipe.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Informações */}
        <div className="flex flex-col flex-1 p-4 sm:p-5 justify-between gap-4">
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-stone-900 group-hover:text-orange-600 transition-colors line-clamp-1">
              {recipe.title}
            </h3>
            <p className="text-sm text-stone-600 line-clamp-2 leading-relaxed">
              {recipe.description}
            </p>
          </div>

          {/* Categoria e Ações */}
          <div className="flex justify-between items-center pt-3 border-t border-slate-100 mt-auto">
            <span className="text-xs font-semibold text-orange-700 bg-orange-100/70 px-2.5 py-1 rounded-full">
              {recipe.category || "Geral"}
            </span>

            {onDelete && (
              <button
                type="button"
                onClick={handleDelete}
                className="p-1.5 text-stone-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors cursor-pointer"
                title="Excluir receita"
                aria-label="Excluir receita"
              >
                <Trash2 size={16} />
              </button>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
