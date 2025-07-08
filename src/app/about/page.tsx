'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Image from 'next/image';
export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-90"></div>
        <div className="absolute inset-0">
          <img
            src="/about1.jpeg"
            alt="Cooking background"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.3)' }}
          />
        </div>
        <motion.div 
          className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-8"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            About RecipeHub
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl opacity-90 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Your culinary journey starts here. Discover, create, and share amazing recipes from around the world.
          </motion.p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At RecipeHub, we believe that cooking should be accessible, enjoyable, and inspiring for everyone. 
                Whether you're a seasoned chef or just starting your culinary journey, we're here to help you 
                discover amazing recipes and create memorable meals.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our platform brings together a diverse collection of recipes from different cultures and cuisines, 
                making it easy for you to explore new flavors and techniques from the comfort of your kitchen.
              </p>
            </motion.div>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="text-center">
                  <motion.div 
                    className="text-8xl mb-6"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
                  >
                    🍳
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose RecipeHub?</h3>
                  <ul className="text-left space-y-4 text-gray-600">
                    <motion.li 
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-green-500 text-2xl">✓</span>
                      <span>Curated collection of quality recipes</span>
                    </motion.li>
                    <motion.li 
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-green-500 text-2xl">✓</span>
                      <span>Easy-to-follow instructions</span>
                    </motion.li>
                    <motion.li 
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-green-500 text-2xl">✓</span>
                      <span>Diverse cuisines and dietary options</span>
                    </motion.li>
                    <motion.li 
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-green-500 text-2xl">✓</span>
                      <span>Beautiful, high-quality food photography</span>
                    </motion.li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            What We Offer
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <motion.div 
                className="text-6xl mb-6"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🔍
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Search</h3>
              <p className="text-gray-600 leading-relaxed">
                Find exactly what you're looking for with our advanced search and filtering system.
              </p>
            </motion.div>
            <motion.div 
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <motion.div 
                className="text-6xl mb-6"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🌍
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Cuisines</h3>
              <p className="text-gray-600 leading-relaxed">
                Explore recipes from around the world, from traditional favorites to modern classics.
              </p>
            </motion.div>
            <motion.div 
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <motion.div 
                className="text-6xl mb-6"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                📱
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mobile Friendly</h3>
              <p className="text-gray-600 leading-relaxed">
                Access your favorite recipes anywhere, anytime with our responsive design.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Image
              src="/about2.jpg"
              alt="Delicious food spread"
              className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              width={300}
              height={300}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-3xl font-bold mb-2">Culinary Excellence</h3>
              <p className="text-lg opacity-90">Every recipe tells a story</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="text-5xl font-bold mb-3"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                50+
              </motion.div>
              <div className="text-xl opacity-90">Recipes</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="text-5xl font-bold mb-3"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                15+
              </motion.div>
              <div className="text-xl opacity-90">Cuisines</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="text-5xl font-bold mb-3"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                100%
              </motion.div>
              <div className="text-xl opacity-90">Free</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="text-5xl font-bold mb-3"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
              >
                24/7
              </motion.div>
              <div className="text-xl opacity-90">Available</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Get in Touch
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Have questions, suggestions, or want to share your favorite recipe? We'd love to hear from you!
          </motion.p>
          <motion.div 
            className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4 text-gray-600">
                  <motion.p 
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-2xl">📧</span>
                    <span>hello@recipehub.com</span>
                  </motion.p>
                  <motion.p 
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-2xl">📱</span>
                    <span>+1 (555) 123-4567</span>
                  </motion.p>
                  <motion.p 
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-2xl">📍</span>
                    <span>123 Recipe Street, Food City, FC 12345</span>
                  </motion.p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Follow Us</h3>
                <div className="space-y-4 text-gray-600">
                  <motion.p 
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-2xl">📘</span>
                    <span>Facebook: @RecipeHub</span>
                  </motion.p>
                  <motion.p 
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-2xl">📷</span>
                    <span>Instagram: @recipehub</span>
                  </motion.p>
                  <motion.p 
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-2xl">🐦</span>
                    <span>Twitter: @recipehub</span>
                  </motion.p>
                  <motion.p 
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-2xl">📺</span>
                    <span>YouTube: RecipeHub Channel</span>
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            className="text-4xl mb-6"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
          >
            🍳
          </motion.div>
          <h3 className="text-3xl font-bold mb-6">RecipeHub</h3>
          <p className="text-gray-400 mb-8 text-lg">
            Making cooking accessible and enjoyable for everyone.
          </p>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400">
              © 2024 RecipeHub. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 