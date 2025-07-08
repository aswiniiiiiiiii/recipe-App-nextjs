'use client';

import { useState, useEffect, useCallback } from 'react';
import { Recipe } from '@/types/recipe';
import { fetchRecipes } from '@/lib/api';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import RecipeCard from '@/components/RecipeCard';
import SideFiltering from '@/components/SideFiltering';
import Image from 'next/image';

export default function Home() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [cuisines, setCuisines] = useState<string[]>([]);
  const [difficulties, setDifficulties] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [selectedCuisine, setSelectedCuisine] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const loadRecipes = async () => {
      try {
        setLoading(true);
        const data = await fetchRecipes(50);
        setRecipes(data.recipes);
        setFilteredRecipes(data.recipes);
        setCuisines([...new Set(data.recipes.map(recipe => recipe.cuisine))].sort());
        setDifficulties([...new Set(data.recipes.map(recipe => recipe.difficulty))].sort());
        setTags([...new Set(data.recipes.flatMap(recipe => recipe.tags))].sort());
      } catch (err) {
        setError('Failed to load recipes');
        console.error('Error loading recipes:', err);
      } finally {
        setLoading(false);
      }
    };
    loadRecipes();
  }, []);

  // Filtering logic
  useEffect(() => {
    let filtered = recipes;
    if (searchQuery.trim()) {
      filtered = filtered.filter(recipe =>
        recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }
    if (selectedCuisine) {
      filtered = filtered.filter(recipe => recipe.cuisine === selectedCuisine);
    }
    if (selectedDifficulty) {
      filtered = filtered.filter(recipe => recipe.difficulty === selectedDifficulty);
    }
    if (selectedTag) {
      filtered = filtered.filter(recipe => recipe.tags.includes(selectedTag));
    }
    setFilteredRecipes(filtered);
  }, [recipes, searchQuery, selectedCuisine, selectedDifficulty, selectedTag]);

  const handleFilter = (cuisine: string, difficulty: string, tag: string) => {
    setSelectedCuisine(cuisine);
    setSelectedDifficulty(difficulty);
    setSelectedTag(tag);
  };

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading delicious recipes...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <p className="text-red-600 text-lg">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="mt-4 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/food.jpg"
            alt="Delicious food background"
            fill
            className="w-full h-full object-cover object-center"
            style={{ filter: 'brightness(0.55) blur(1px)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br   to-black/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-pulse drop-shadow-lg">
            Discover Amazing Recipes
          </h1>
          <p className="text-xl md:text-2xl mb-10 opacity-90 leading-relaxed drop-shadow">
            {`From traditional favorites to modern classics, find your next culinary adventure`}
          </p>
          {/* <div className="flex justify-center space-x-6">
            <div className="bg-white bg-opacity-20 rounded-xl px-8 py-4 backdrop-blur-sm border border-white border-opacity-30">
              <span className="text-3xl font-bold block">{recipes.length}</span>
              <p className="text-sm font-medium">Recipes</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-xl px-8 py-4 backdrop-blur-sm border border-white border-opacity-30">
              <span className="text-3xl font-bold block">{cuisines.length}</span>
              <p className="text-sm font-medium">Cuisines</p>
            </div>
          </div> */}
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4 w-full">
            <SideFiltering
              cuisines={cuisines}
              difficulties={difficulties}
              tags={tags}
              selectedCuisine={selectedCuisine}
              selectedDifficulty={selectedDifficulty}
              selectedTag={selectedTag}
              onFilter={handleFilter}
            />
          </div>
          <div className="md:w-3/4 w-full">
            <SearchBar onSearch={handleSearch} />
            <section className="pb-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {filteredRecipes.length === 0 ? (
                  <div className="text-center py-16">
                    <div className="text-6xl mb-4">🔍</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No recipes found</h3>
                    <p className="text-gray-600">Try adjusting your search criteria</p>
                  </div>
                ) : (
                  <>
                    <div className="flex justify-between items-center mb-8">
                      <h2 className="text-3xl font-bold text-gray-900">
                        {filteredRecipes.length} Recipe{filteredRecipes.length !== 1 ? 's' : ''} Found
                      </h2>
                      <div className="text-sm text-gray-500">
                        Showing {filteredRecipes.length} of {recipes.length} recipes
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredRecipes.map((recipe, index) => (
                        <RecipeCard key={recipe.id} recipe={recipe} index={index} />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
