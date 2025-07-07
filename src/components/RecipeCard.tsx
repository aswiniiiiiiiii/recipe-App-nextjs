'use client';

import { Recipe } from '@/types/recipe';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

interface RecipeCardProps {
  recipe: Recipe;
  index: number;
}

export default function RecipeCard({ recipe, index }: RecipeCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/recipe/${recipe.id}`);
  };

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

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.2 }
      }}
      onClick={handleClick}
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden group border border-gray-100"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          width={500}
          height={300}
          src={recipe.image}
          alt={recipe.name}
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <motion.div 
          className="absolute top-2 right-2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 + index * 0.1 }}
        >
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(recipe.difficulty)} shadow-lg`}>
            {recipe.difficulty}
          </span>
        </motion.div>
        <div className="absolute bottom-2 left-2 flex items-center space-x-1">
          <motion.span 
            className="text-yellow-400"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            ★
          </motion.span>
          <span className="text-white text-sm font-medium drop-shadow-lg">{recipe.rating}</span>
          <span className="text-white text-xs drop-shadow-lg">({recipe.reviewCount})</span>
        </div>
      </div>
      
      <div className="p-6">
        <motion.h3 
          className="text-lg font-bold text-gray-900 mb-3 line-clamp-2"
          whileHover={{ color: "#ea580c" }}
          transition={{ duration: 0.2 }}
        >
          {recipe.name}
        </motion.h3>
        
        <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
          <span className="font-medium">{recipe.cuisine}</span>
          <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs font-medium">
            {recipe.servings} servings
          </span>
        </div>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-3">
            <span className="flex items-center space-x-1">
              <span className="text-orange-500">⏱️</span>
              <span>{recipe.prepTimeMinutes}m</span>
            </span>
            <span className="flex items-center space-x-1">
              <span className="text-red-500">🔥</span>
              <span>{recipe.cookTimeMinutes}m</span>
            </span>
          </div>
          <span className="flex items-center space-x-1">
            <span className="text-purple-500">🔥</span>
            <span>{recipe.caloriesPerServing} cal</span>
          </span>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {recipe.tags.slice(0, 3).map((tag, tagIndex) => (
            <motion.span 
              key={tagIndex}
              className="px-3 py-1 bg-gradient-to-r from-orange-50 to-red-50 text-orange-700 text-xs rounded-full border border-orange-200 font-medium"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#fed7aa"
              }}
              transition={{ duration: 0.2 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
} 