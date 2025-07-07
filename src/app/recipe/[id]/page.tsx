  'use client';

  import { useState, useEffect } from 'react';
  import { useParams, useRouter } from 'next/navigation';
  import Image from 'next/image';
  import { Recipe } from '@/types/recipe';
  import { fetchRecipeById } from '@/lib/api';
  import Header from '@/components/Header';

  export default function RecipeDetail() {
    const params = useParams();
    const router = useRouter();
    const [recipe, setRecipe] = useState<Recipe | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const recipeId = parseInt(params.id as string);

    useEffect(() => {
      const loadRecipe = async () => {
        try {
          setLoading(true);
          const data = await fetchRecipeById(recipeId);
          setRecipe(data);
        } catch (err) {
          setError('Failed to load recipe');
          console.error('Error loading recipe:', err);
        } finally {
          setLoading(false);
        }
      };
    
      if (params.id) {
        loadRecipe();
      }
    }, [recipeId]);
    const getDifficultyColor = (difficulty: string) => {
      switch (difficulty) {
        case 'Easy':
          return 'bg-green-100 text-green-800';
        case 'Medium':
          return 'bg-yellow-100 text-yellow-800';
        case 'Hard':
          return 'bg-red-100 text-red-800';
        default:
          return 'bg-gray-100 text-gray-800';
      }
    };

    if (loading) {
      return (
        <div className="min-h-screen bg-gray-50">
          <Header />
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading recipe...</p>
            </div>
          </div>
        </div>
      );
    }

    if (error || !recipe) {
      return (
        <div className="min-h-screen bg-gray-50">
          <Header />
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="text-center">
              <p className="text-red-600 text-lg">{error || 'Recipe not found'}</p>
              <button 
                onClick={() => router.push('/')}
                className="mt-4 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700"
              >
                Back to Recipes
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back Button */}
          <button
            onClick={() => router.push('/')}
            className="flex items-center space-x-2 text-orange-600 hover:text-orange-700 mb-6 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back to Recipes</span>
          </button>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
            {/* Recipe Header */}
            <div className="relative h-96">
              <Image
                src={recipe.image}
                alt={recipe.name}
                fill
                
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center space-x-4 mb-4">
                  <span className={`px-4 py-2 rounded-full text-sm font-medium ${getDifficultyColor(recipe.difficulty)} shadow-lg`}>
                    {recipe.difficulty}
                  </span>
                  <span className="flex items-center space-x-2 bg-black bg-opacity-30 px-3 py-1 rounded-full">
                    <span className="text-yellow-400 text-lg">★</span>
                    <span className="font-bold">{recipe.rating}</span>
                    <span className="text-sm opacity-75">({recipe.reviewCount} reviews)</span>
                  </span>
                </div>
                <h1 className="text-5xl font-bold mb-3 text-white drop-shadow-lg">{recipe.name}</h1>
                <p className="text-xl opacity-90">{recipe.cuisine} Cuisine</p>
              </div>
            </div>

            <div className="p-8">
              {/* Recipe Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">{recipe.prepTimeMinutes}</div>
                  <div className="text-sm text-gray-600">Prep Time (min)</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">{recipe.cookTimeMinutes}</div>
                  <div className="text-sm text-gray-600">Cook Time (min)</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">{recipe.servings}</div>
                  <div className="text-sm text-gray-600">Servings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">{recipe.caloriesPerServing}</div>
                  <div className="text-sm text-gray-600">Calories</div>
                </div>
              </div>

              {/* Tags */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {recipe.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Ingredients */}
              <div className="mb-8">
                <h3 className="text-2xl text-orange-600 font-bold mb-4">Ingredients</h3>
                <ul className="space-y-2">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-orange-600 mt-1">•</span>
                      <span className="text-gray-700">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Instructions */}
              <div>
                <h3 className="text-2xl font-bold text-orange-600 mb-4">Instructions</h3>
                <ol className="space-y-4">
                  {recipe.instructions.map((instruction, index) => (
                    <li key={index} className="flex space-x-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </span>
                      <p className="text-gray-700 leading-relaxed">{instruction}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } 