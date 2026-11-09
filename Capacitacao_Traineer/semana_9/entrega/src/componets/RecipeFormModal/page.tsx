"use client";

import { useFieldArray, useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../ui/dialog";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  RecipeFormData,
  recipeSchema,
} from "@/src/lib/formsValidationSchemas/recipeSchemas/recipeSchema";
import { ArrowDownToLine, Plus, Trash2 } from "lucide-react";
import { useRef, useState } from "react";
import { Recipe } from "@/src/lib/data";

interface RecipeFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (recipe: Omit<Recipe, "id">) => void;
}

const DEFAULT_VALUES: RecipeFormData = {
  title: "",
  category: "",
  description: "",
  image: "",
  prepTime: "",
  cookTime: "",
  servings: 1,
  ingredients: [{ value: "" }],
  instructions: [{ value: "" }],
};

export default function RecipeFormModal({
  isOpen,
  onClose,
  onSave,
}: RecipeFormModalProps) {
  const styleErrors = "text-xs text-red-500 mt-0.5";
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    reset,
    handleSubmit,
    setValue,
    formState: { errors },
    control,
  } = useForm<RecipeFormData>({
    resolver: yupResolver(recipeSchema),
    mode: "onSubmit",
    defaultValues: DEFAULT_VALUES,
  });

  const {
    fields: ingredientsFields,
    append: appendIngredients,
    remove: removeIngredients,
  } = useFieldArray({
    control,
    name: "ingredients",
  });

  const {
    fields: instructionsFields,
    append: appendInstructions,
    remove: removeInstructions,
  } = useFieldArray({
    control,
    name: "instructions",
  });

  const onSubmit = (data: RecipeFormData) => {
    const recipeData = {
      ...data,
      ingredients: data.ingredients.map((ingredient) => ingredient.value),
      instructions: data.instructions.map((instruction) => instruction.value),
    };
    onSave(recipeData);
    reset();
    setPreviewUrl(null);
    onClose();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    setValue("image", url, { shouldValidate: true });
  };

  const handleRemoveImage = () => {
    setPreviewUrl(null);
    setValue("image", "", { shouldValidate: true });
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const inputStyle =
    "p-2.5 border border-zinc-300 rounded-lg text-sm outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 w-full";

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white w-[95vw] sm:max-w-2xl max-h-[90vh] overflow-y-auto p-4 sm:p-6 rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-stone-900">
            Cadastrar Nova Receita
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full mt-2">
          {/* Título e Categoria responsivos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex flex-col gap-1">
              <label htmlFor="title" className="text-xs font-semibold text-stone-700">
                Título da receita *
              </label>
              <input
                className={inputStyle}
                type="text"
                id="title"
                placeholder="Ex: Torta de Limão"
                {...register("title")}
              />
              {errors.title && <span className={styleErrors}>{errors.title.message}</span>}
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="category" className="text-xs font-semibold text-stone-700">
                Categoria *
              </label>
              <input
                className={inputStyle}
                type="text"
                id="category"
                placeholder="Ex: Sobremesas, Pratos Principais"
                {...register("category")}
              />
              {errors.category && <span className={styleErrors}>{errors.category.message}</span>}
            </div>
          </div>

          {/* Descrição */}
          <div className="flex flex-col gap-1">
            <label htmlFor="description" className="text-xs font-semibold text-stone-700">
              Descrição breve *
            </label>
            <textarea
              className={`${inputStyle} min-h-[70px] resize-y`}
              id="description"
              placeholder="Descreva a receita em poucas palavras..."
              {...register("description")}
            />
            {errors.description && (
              <span className={styleErrors}>{errors.description.message}</span>
            )}
          </div>

          {/* Imagem */}
          <div className="flex flex-col gap-1">
            <label htmlFor="imageUrl" className="text-xs font-semibold text-stone-700">
              URL da imagem ou upload
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                className={inputStyle}
                id="imageUrl"
                placeholder="/receitas/bolo-chocolate.png ou link web"
                {...register("image")}
              />
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="border border-zinc-300 bg-stone-50 rounded-lg hover:bg-stone-100 transition-colors px-3 py-2 cursor-pointer flex items-center justify-center shrink-0"
                title="Carregar arquivo de imagem"
              >
                <ArrowDownToLine className="w-5 h-5 text-stone-600" />
              </button>
            </div>

            {previewUrl && (
              <div className="mt-2 flex items-center gap-3">
                <img
                  src={previewUrl}
                  alt="Pré-visualização"
                  className="w-20 h-20 object-cover rounded-lg border border-zinc-200"
                />
                <button
                  type="button"
                  onClick={handleRemoveImage}
                  className="text-xs text-red-600 hover:text-red-800 underline cursor-pointer"
                >
                  Remover imagem
                </button>
              </div>
            )}
            {errors.image && <span className={styleErrors}>{errors.image.message}</span>}
          </div>

          {/* Tempos e Porções em Grid Responsivo */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="flex flex-col gap-1">
              <label htmlFor="prepTime" className="text-xs font-semibold text-stone-700">
                Preparo *
              </label>
              <input
                className={inputStyle}
                type="text"
                id="prepTime"
                placeholder="15 minutos"
                {...register("prepTime")}
              />
              {errors.prepTime && <span className={styleErrors}>{errors.prepTime.message}</span>}
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="cookTime" className="text-xs font-semibold text-stone-700">
                Cozimento *
              </label>
              <input
                className={inputStyle}
                type="text"
                id="cookTime"
                placeholder="30 minutos"
                {...register("cookTime")}
              />
              {errors.cookTime && <span className={styleErrors}>{errors.cookTime.message}</span>}
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="servings" className="text-xs font-semibold text-stone-700">
                Porções *
              </label>
              <input
                className={inputStyle}
                type="number"
                id="servings"
                min={1}
                defaultValue={1}
                {...register("servings")}
              />
              {errors.servings && <span className={styleErrors}>{errors.servings.message}</span>}
            </div>
          </div>

          {/* Ingredientes */}
          <div className="flex flex-col gap-1 mt-1">
            <label className="text-xs font-semibold text-stone-700">Ingredientes *</label>
            <div className="flex flex-col gap-2">
              {ingredientsFields.map((field, index) => (
                <div key={field.id} className="flex flex-col gap-1">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder={`Ingrediente ${index + 1}`}
                      className={inputStyle}
                      {...register(`ingredients.${index}.value`)}
                    />
                    {ingredientsFields.length > 1 && (
                      <button
                        type="button"
                        className="p-2.5 text-stone-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer shrink-0"
                        onClick={() => removeIngredients(index)}
                        title="Remover ingrediente"
                      >
                        <Trash2 size={16} />
                      </button>
                    )}
                  </div>
                  {errors.ingredients?.[index]?.value && (
                    <span className={styleErrors}>
                      {errors.ingredients[index]?.value?.message}
                    </span>
                  )}
                </div>
              ))}

              <button
                type="button"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-600 hover:text-orange-800 transition-colors py-1 cursor-pointer w-fit"
                onClick={() => appendIngredients({ value: "" })}
              >
                <Plus size={14} /> Adicionar ingrediente
              </button>
            </div>
          </div>

          {/* Instruções */}
          <div className="flex flex-col gap-1 mt-1">
            <label className="text-xs font-semibold text-stone-700">Modo de preparo *</label>
            <div className="flex flex-col gap-2">
              {instructionsFields.map((field, index) => (
                <div key={field.id} className="flex flex-col gap-1">
                  <div className="flex gap-2 items-start">
                    <textarea
                      placeholder={`Passo ${index + 1}`}
                      className={`${inputStyle} min-h-[50px] resize-y`}
                      {...register(`instructions.${index}.value`)}
                    />
                    {instructionsFields.length > 1 && (
                      <button
                        type="button"
                        className="p-2.5 text-stone-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer shrink-0 mt-1"
                        onClick={() => removeInstructions(index)}
                        title="Remover passo"
                      >
                        <Trash2 size={16} />
                      </button>
                    )}
                  </div>
                  {errors.instructions?.[index]?.value && (
                    <span className={styleErrors}>
                      {errors.instructions[index]?.value?.message}
                    </span>
                  )}
                </div>
              ))}

              <button
                type="button"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-600 hover:text-orange-800 transition-colors py-1 cursor-pointer w-fit"
                onClick={() => appendInstructions({ value: "" })}
              >
                <Plus size={14} /> Adicionar instrução
              </button>
            </div>
          </div>

          {/* Botões de Ação */}
          <div className="flex justify-end gap-3 mt-4 pt-3 border-t border-slate-100">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-stone-600 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-sm font-bold bg-orange-600 text-white hover:bg-orange-700 rounded-lg transition-colors cursor-pointer shadow-xs"
            >
              Salvar Receita
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
