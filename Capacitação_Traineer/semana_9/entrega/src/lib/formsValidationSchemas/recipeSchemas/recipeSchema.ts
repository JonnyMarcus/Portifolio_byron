import * as yup from "yup";

export const recipeSchema = yup.object().shape({
  title: yup.string().required("O titulo é obrigatorio"),
  category: yup.string().required("A categoria é obrigatorio"),
  description: yup.string().required("A descrição é obrigatorio"),
  imageURL: yup.string().required("A URL imagem é Obrigatoria"),
  prepTime: yup.string().required("O tempo De preparo é obrigatorio"),
  cookTime: yup.string().required("o tempo de cozimento é obrigatorio"),
  servings: yup
    .number()
    .typeError("As porções devem ser um numero")
    .positive("AS porções devem ser postivas")
    .integer("As porções devem ser numeros interios")
    .min(1, "Devem haver pelo menso 1 porção")
    .required("A porções é obrigatoria"),
  ingredients: yup
    .array()
    .of(
      yup.object({
        value: yup.string().required("o ingrediente nao pdoe ser vazio"),
      }),
    )
    .min(1, "Adicione pelo menos 1 ingrediente")
    .required("Tem que ter pelo menos 1 ingrediente"),
  instructions: yup
    .array()
    .of(
      yup.object({
        value: yup.string().required("A instrução nao pdoe ser vazia"),
      }),
    )
    .min(1, "Adicione pelo menos 1 instrução")
    .required("Tem que ter pelo menos 1 instrução"),
});

export type RecipeFormData = yup.InferType<typeof recipeSchema>;
