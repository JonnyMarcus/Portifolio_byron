"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../ui/dialog";

export default function RecipeFormModal() {
  const [isRecipeModalOpen, setIsRecipeModalOpen] = useState(false);
  return (
    <Dialog>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Nova receita</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
