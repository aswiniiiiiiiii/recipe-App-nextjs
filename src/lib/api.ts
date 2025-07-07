import { RecipeResponse } from '@/types/recipe';

const API_BASE_URL = 'https://dummyjson.com';

export async function fetchRecipes(limit: number = 50): Promise<RecipeResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/recipes?limit=${limit}`);
    if (!response.ok) {
      throw new Error('Failed to fetch recipes');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }
}

export async function fetchRecipeById(id: number) {
  try {
    const response = await fetch(`${API_BASE_URL}/recipes/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch recipe');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching recipe:', error);
    throw error;
  }
} 