import axios, { AxiosInstance } from "axios";
import { Recipe, recipes as receitasPadrao } from "./data";

const URL_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api";

const api: AxiosInstance = axios.create({
  baseURL: URL_BASE,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

/**
 * Busca todas as receitas da API (com fallback para dados locais)
 */
export async function buscarReceitasAPI(): Promise<Recipe[]> {
  try {
    const resposta = await api.get<Recipe[]>("/recipes");
    if (resposta.data && Array.isArray(resposta.data) && resposta.data.length > 0) {
      return resposta.data;
    }
  } catch (erro) {
    console.warn("Aviso: Servidor de receitas inacessível na porta 3001. Usando receitas locais de contingência.");
  }
  return receitasPadrao;
}

/**
 * Busca uma receita específica pelo ID
 */
export async function buscarReceitaPorIdAPI(id: string): Promise<Recipe | null> {
  try {
    const resposta = await api.get<Recipe>(`/recipes/${id}`);
    if (resposta.data) {
      return resposta.data;
    }
  } catch (erro) {
    console.warn(`Aviso: Receita ${id} não encontrada na API. Verificando dados locais.`);
  }

  const encontrada = receitasPadrao.find((r) => r.id === id);
  return encontrada || null;
}

/**
 * Cria uma nova receita via POST na API
 */
export async function criarReceitaAPI(dados: Omit<Recipe, "id">): Promise<Recipe> {
  try {
    const resposta = await api.post<Recipe>("/recipes", dados);
    return resposta.data;
  } catch (erro) {
    console.warn("Aviso: Falha ao enviar para o backend. Criando registro localmente.");
    return {
      ...dados,
      id: Date.now().toString(),
    };
  }
}

/**
 * Remove uma receita via DELETE na API
 */
export async function excluirReceitaAPI(id: string): Promise<boolean> {
  try {
    await api.delete(`/recipes/${id}`);
    return true;
  } catch (erro) {
    console.warn(`Aviso: Falha ao excluir receita ${id} no backend.`);
    return false;
  }
}

export default api;
