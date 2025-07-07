'use client';

import Header from '@/components/Header';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            About RecipeHub
          </h1>
          <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
            Your culinary journey starts here. Discover, create, and share amazing recipes from around the world.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
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
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center">
                <div className="text-6xl mb-4">🍳</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose RecipeHub?</h3>
                <ul className="text-left space-y-3 text-gray-600">
                  <li className="flex items-center space-x-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>Curated collection of quality recipes</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>Easy-to-follow instructions</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>Diverse cuisines and dietary options</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>Beautiful, high-quality food photography</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Search</h3>
              <p className="text-gray-600">
                Find exactly what you're looking for with our advanced search and filtering system.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Global Cuisines</h3>
              <p className="text-gray-600">
                Explore recipes from around the world, from traditional favorites to modern classics.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mobile Friendly</h3>
              <p className="text-gray-600">
                Access your favorite recipes anywhere, anytime with our responsive design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">Recipes</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-lg opacity-90">Cuisines</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-lg opacity-90">Free</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-lg opacity-90">Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Have questions, suggestions, or want to share your favorite recipe? We'd love to hear from you!
          </p>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-3 text-gray-600">
                  <p>📧 Email: hello@recipehub.com</p>
                  <p>📱 Phone: +1 (555) 123-4567</p>
                  <p>📍 Address: 123 Recipe Street, Food City, FC 12345</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h3>
                <div className="space-y-3 text-gray-600">
                  <p>📘 Facebook: @RecipeHub</p>
                  <p>📷 Instagram: @recipehub</p>
                  <p>🐦 Twitter: @recipehub</p>
                  <p>📺 YouTube: RecipeHub Channel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-3xl mb-4">🍳</div>
          <h3 className="text-2xl font-bold mb-4">RecipeHub</h3>
          <p className="text-gray-400 mb-6">
            Making cooking accessible and enjoyable for everyone.
          </p>
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-400">
              © 2024 RecipeHub. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 