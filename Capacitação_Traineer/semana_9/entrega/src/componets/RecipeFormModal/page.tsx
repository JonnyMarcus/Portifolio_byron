import { FormState, useFieldArray, useForm } from "react-hook-form";
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
import { ArrowDownToLine } from "lucide-react";
import { useRef, useState } from "react";

interface RecipeFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const DEFAULT_VALUES: RecipeFormData = {
  title: "",
  category: "",
  description: "",
  imageURL: "",
  prepTime: "",
  cookTime: "",
  servings: 1,
  ingredients: [{ value: "" }],
  instructions: [{ value: "" }],
};

export default function RecipeFormModal({
  isOpen,
  onClose,
}: RecipeFormModalProps) {
  const styleErrors = "text-sm text-red-500";
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
    (console.log(recipeData), reset(), setPreviewUrl(null), onClose());
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    setValue("imageURL", url, { shouldValidate: true });
  };

  const handleRemoveImage = () => {
    setPreviewUrl(null);
    setValue("imageURL", "", { shouldValidate: true });
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const inputStyle = "p-2 border border-zinc-200 rounded-md grow";
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white sm:max-w-2xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Nova receita</DialogTitle>
        </DialogHeader>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 w-full"
        >
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col gap-1">
              {/* Titulo */}
              <label htmlFor="Titulo">Titulo</label>
              <input
                className={inputStyle}
                type="text"
                id="title"
                {...register("title")}
              />
              {errors.title && (
                <span className={styleErrors}>{errors.title.message}</span>
              )}
            </div>
            <div className="flex flex-col gap-1">
              {/* Categoria */}
              <label htmlFor="Category">Categoria</label>
              <input
                className={inputStyle}
                type="text"
                id="category"
                {...register("category")}
              />
              {errors.category && (
                <span className={styleErrors}>{errors.category.message}</span>
              )}
            </div>
          </div>
          {/* Descrição */}
          <div className="flex flex-col gap-1">
            <label htmlFor="description">Descrição</label>
            <textarea
              className={inputStyle}
              id="description"
              {...register("description")}
            />
            {errors.description && (
              <span className={styleErrors}>{errors.description.message}</span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            {/* URl imagem */}
            <label htmlFor="imageUrl">URL da imagem</label>
            <div className="flex gap-2">
              <input
                type="text"
                className={inputStyle}
                id="imageUrl"
                placeholder="/imagem.svg"
                {...register("imageURL")}
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
                className="border border-zinc-300 bg-white rounded-md hover:bg-gray-100 transition-colors px-4 py-2 font-medium"
              >
                <ArrowDownToLine />
              </button>
            </div>
            {previewUrl && (
              <div className="mt-1 flex items-center gap-2">
                <img
                  src={previewUrl}
                  alt="Pré-visualização"
                  className="w-32 h-32 object-cover rounded-md border border-zinc-200"
                />
                <button
                  type="button"
                  onClick={handleRemoveImage}
                  className="border border-zinc-300 bg-white rounded-md hover:bg-gray-100 transition-colors px-4 py-2 font-medium h-fit"
                >
                  Remover imagem
                </button>
              </div>
            )}
            {errors.imageURL && (
              <span className={styleErrors}>{errors.imageURL.message}</span>
            )}
          </div>
          <div className="grid grid-cols-3 gap-2 items-start">
            <div className="flex flex-col gap-1">
              {/* Tempo de preparo */}
              <label htmlFor="PrepTime">Tempo de preparo</label>
              <input
                className={inputStyle}
                type="text"
                id="PrepTime"
                placeholder="15 minutos"
                {...register("prepTime")}
              />
              {errors.prepTime && (
                <span className={styleErrors}>{errors.prepTime.message}</span>
              )}
            </div>

            <div className="flex flex-col gap-1">
              {/* Tempo de cozimento */}
              <label htmlFor="cookTime">Tempo de cozimento</label>
              <input
                className={inputStyle}
                type="text"
                id="cookTime"
                placeholder="30 minutos"
                {...register("cookTime")}
              />
              {errors.cookTime && (
                <span className={styleErrors}>{errors.cookTime.message}</span>
              )}
            </div>

            <div className="flex flex-col gap-1">
              {/* Porções */}
              <label htmlFor="Servings">Porções</label>
              <input
                className={inputStyle}
                type="number"
                id="servings"
                defaultValue={1}
                {...register("servings")}
              />
              {errors.servings && (
                <span className={styleErrors}>{errors.servings.message}</span>
              )}
            </div>
          </div>

          {/* LIsta de ingredientes */}
          <div className="flex flex-col gap-1">
            <label htmlFor="ingredients">Ingredientes</label>
            <div className="flex flex-col gap-1">
              {/* Conteudo */}
              {ingredientsFields.map((field, index) => (
                <div key={field.id} className="flex flex-col gap-1">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Digite um ingrediente"
                      className={inputStyle}
                      {...register(`ingredients.${index}.value`)}
                    />
                    {ingredientsFields.length > 1 && (
                      <button
                        id="ingedients"
                        type="button"
                        className="border border-zinc-300 bg-white rounded-md hover:bg-gray-100 transition-colors px-4 py-2 font-medium"
                        onClick={() => removeIngredients(index)}
                      >
                        Remover
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
                className="border border-zinc-300 bg-white rounded-md hover:bg-gray-100 transition-colors px-4 py-2 font-medium w-fit"
                onClick={() => appendIngredients({ value: "" })}
              >
                Adicionar ingrediente
              </button>
            </div>
          </div>
          {/* Lista de intruçoes */}
          <div className="flex flex-col gap-1">
            <label htmlFor="instructions">Instruções</label>
            <div className="flex flex-col gap-1">
              {/* Conteudo */}
              {instructionsFields.map((field, index) => (
                <div key={field.id} className="flex flex-col gap-1">
                  <div className="flex gap-2">
                    <textarea
                      id="instructions"
                      placeholder="Digite uma instrução"
                      className={inputStyle}
                      {...register(`instructions.${index}.value`)}
                    />
                    {instructionsFields.length > 1 && (
                      <button
                        type="button"
                        className="border border-zinc-300 bg-white rounded-md hover:bg-gray-100 transition-colors px-4 py-2 font-medium h-fit"
                        onClick={() => removeInstructions(index)}
                      >
                        Remover
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
                className="border border-zinc-300 bg-white rounded-md hover:bg-gray-100 transition-colors px-4 py-2 font-medium w-fit"
                onClick={() => appendInstructions({ value: "" })}
              >
                Adicionar instrução
              </button>
            </div>
          </div>
          <div className=" flex self-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="border border-zinc-300 bg-white rounded-md hover:bg-gray-100 transition-colors px-4 py-2 font-medium"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-black px-4 py-2 text-white rounded-md  hover:bg-gray-800 transition-colors font-medium "
            >
              Criar receita
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
