import { FormState, useForm } from "react-hook-form";
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

interface RecipeFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RecipeFormModal({
  isOpen,
  onClose,
}: RecipeFormModalProps) {
  const styleErrors = "text-sm text-red-500";
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<RecipeFormData>({
    resolver: yupResolver(recipeSchema),
    mode: "onSubmit",
  });

  const onSubmit = (data: RecipeFormData) => {
    (console.log(data), reset(), onClose());
  };
  const inputStyle = "p-2 border border-zinc-200 rounded-md";
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white sm:max-w-2xl">
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
          <div className="flex flex-col">
            {/* URl imagem */}
            <label htmlFor="imageUrl">URL da imagem</label>
            <input
              type="text"
              className={inputStyle}
              id="imageUrl"
              placeholder="/imagem.svg"
              {...register("imageURL")}
            />
            {errors.imageURL && (
              <span className={styleErrors}>{errors.imageURL.message}</span>
            )}
          </div>
          {/*  */}
          <div className="grid grid-cols-3 gap-2 items-center">
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
