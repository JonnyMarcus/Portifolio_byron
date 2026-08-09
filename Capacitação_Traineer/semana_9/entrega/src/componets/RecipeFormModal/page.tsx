import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../ui/dialog";

interface RecipeFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RecipeFormModal({
  isOpen,
  onClose,
}: RecipeFormModalProps) {
  const inputStyle = "p-2 border border-zinc-200 rounded-md";
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Nova receita</DialogTitle>
        </DialogHeader>
        <form className="flex flex-col gap-4 w-full">
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col gap-1">
              {/* Titulo */}
              <label htmlFor="Titulo">Titulo</label>
              <input className={inputStyle} type="text" id="title" />
            </div>
            <div className="flex flex-col gap-1">
              {/* Categoria */}
              <label htmlFor="Category">Categoria</label>
              <input className={inputStyle} type="text" id="category" />
            </div>
          </div>
          {/* Descrição */}
          <div className="flex flex-col gap-1">
            <label htmlFor="description">Descrição</label>
            <textarea className={inputStyle} id="description" />
          </div>
          <div className="flex flex-col">
            {/* URl imagem */}
            <label htmlFor="imageUrl">URL da imagem</label>
            <input
              type="text"
              className={inputStyle}
              id="imageUrl"
              placeholder="/imagem.svg"
            />
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
              />
            </div>

            <div className="flex flex-col gap-1">
              {/* Tempo de cozimento */}
              <label htmlFor="cookTime">Tempo de cozimento</label>
              <input
                className={inputStyle}
                type="text"
                id="cookTime"
                placeholder="30 minutos"
              />
            </div>

            <div className="flex flex-col gap-1">
              {/* Porções */}
              <label htmlFor="Servings">Porções</label>
              <input
                className={inputStyle}
                type="number"
                id="servings"
                defaultValue={1}
              />
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
