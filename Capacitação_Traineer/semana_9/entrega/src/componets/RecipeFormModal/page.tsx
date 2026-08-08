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
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white ">
        <DialogHeader>
          <DialogTitle>Nova receita</DialogTitle>
        </DialogHeader>
        <form>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col gap-1">
              {/* Titulo */}
              <label htmlFor="Titulo">Titulo</label>
              <input
                className="p-2 border border-zinc-200 rounded-md"
                type="text"
                id="title"
              />
            </div>
            <div className="flex flex-col gap-1">
              {/* Categoria */}
              <label htmlFor="Category">Categoria</label>
              <input
                className="p-2 border border-zinc-200 rounded-md"
                type="text"
                id="category"
              />
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
