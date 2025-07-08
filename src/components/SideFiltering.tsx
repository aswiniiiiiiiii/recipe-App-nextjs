// import React, { useState } from 'react';

interface SideFilteringProps {
  cuisines: string[];
  difficulties: string[];
  tags: string[];
  selectedCuisine: string;
  selectedDifficulty: string;
  selectedTag: string;
  onFilter: (cuisine: string, difficulty: string, tag: string) => void;
}

export default function SideFiltering({
  cuisines,
  difficulties,
  tags,
  selectedCuisine,
  selectedDifficulty,
  selectedTag,
  onFilter,
}: SideFilteringProps) {
  return (
    <aside className="w-full md:w-64 bg-white rounded-2xl shadow-lg p-6 mb-8 md:mb-0 md:mr-8 border border-gray-100">
      <h2 className="text-xl font-bold mb-6 text-orange-600">Filter Recipes</h2>
      {/* Cuisine Filter */}
      <div className="mb-6">
        <h3 className="text-md font-semibold mb-2 text-gray-700">Cuisine</h3>
        <div className="flex flex-wrap gap-2">
          <button
            className={`px-3 py-1 rounded-full text-sm font-medium border ${selectedCuisine === '' ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-700'} hover:bg-orange-100`}
            onClick={() => onFilter('', selectedDifficulty, selectedTag)}
          >
            All
          </button>
          {cuisines.slice(0, 10).map((cuisine) => (
            <button
              key={cuisine}
              className={`px-3 py-1 rounded-full text-sm font-medium border ${selectedCuisine === cuisine ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-700'} hover:bg-orange-100`}
              onClick={() => onFilter(cuisine, selectedDifficulty, selectedTag)}
            >
              {cuisine}
            </button>
          ))}
        </div>
      </div>
      {/* Difficulty Filter */}
      <div className="mb-6">
        <h3 className="text-md font-semibold mb-2 text-gray-700">Difficulty</h3>
        <div className="flex flex-wrap gap-2">
          <button
            className={`px-3 py-1 rounded-full text-sm font-medium border ${selectedDifficulty === '' ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-700'} hover:bg-orange-100`}
            onClick={() => onFilter(selectedCuisine, '', selectedTag)}
          >
            All
          </button>
          {difficulties.slice(0, 5).map((difficulty) => (
            <button
              key={difficulty}
              className={`px-3 py-1 rounded-full text-sm font-medium border ${selectedDifficulty === difficulty ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-700'} hover:bg-orange-100`}
              onClick={() => onFilter(selectedCuisine, difficulty, selectedTag)}
            >
              {difficulty}
            </button>
          ))}
        </div>
      </div>
      {/* Tag Filter */}
      <div>
        <h3 className="text-md font-semibold mb-2 text-gray-700">Tags</h3>
        <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
          <button
            className={`px-3 py-1 rounded-full text-sm font-medium border ${selectedTag === '' ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-700'} hover:bg-orange-100`}
            onClick={() => onFilter(selectedCuisine, selectedDifficulty, '')}
          >
            All
          </button>
          {tags.slice(0, 5).map((tag) => (
            <button
              key={tag}
              className={`px-3 py-1 rounded-full text-sm font-medium border ${selectedTag === tag ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-700'} hover:bg-orange-100`}
              onClick={() => onFilter(selectedCuisine, selectedDifficulty, tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
