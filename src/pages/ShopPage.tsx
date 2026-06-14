import React, { useState } from 'react';
import { Search, Layers, Box, Filter } from 'lucide-react';
import { products, categories, Product } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ProductDetail } from '../components/ProductDetail';
import { GridPattern, GlowOrb, GeometricCube, GeometricHexagon, GeometricPyramid, GeometricSphere, GeometricTriangle, GeometricSpiral, GeometricRing } from '../components/GeometryBackground';

interface ShopPageProps {
  onAddToCart: (product: Product, quantity?: number) => void;
}

const Bubble = ({ delay, size, left, color }: { delay: number; size: number; left: number; color: string }) => (
  <div
    className={`absolute rounded-full animate-particle ${color === 'blue' ? 'bg-neon-blue/10' : color === 'purple' ? 'bg-neon-purple/10' : 'bg-neon-green/10'}`}
    style={{
      width: size,
      height: size,
      left: `${left}%`,
      animationDelay: `${delay}s`,
      boxShadow: `inset 0 0 ${size/3}px ${color === 'blue' ? 'rgba(0, 212, 255, 0.2)' : color === 'purple' ? 'rgba(139, 92, 246, 0.2)' : 'rgba(0, 255, 136, 0.2)'}, 0 0 ${size/2}px ${color === 'blue' ? 'rgba(0, 212, 255, 0.1)' : color === 'purple' ? 'rgba(139, 92, 246, 0.1)' : 'rgba(0, 255, 136, 0.1)'}`,
    }}
  />
);

export const ShopPage: React.FC<ShopPageProps> = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = React.useMemo(() => {
    let result = [...products];
    if (activeCategory !== 'all') result = result.filter((p) => p.category === activeCategory);
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter((p) => p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query));
    }
    switch (sortBy) {
      case 'price-asc': result.sort((a, b) => a.price - b.price); break;
      case 'price-desc': result.sort((a, b) => b.price - a.price); break;
      case 'rating': result.sort((a, b) => b.rating - a.rating); break;
      default: result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }
    return result;
  }, [activeCategory, searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-surface-900 pt-24">
      {/* Hero Header */}
      <section className="relative py-16 overflow-hidden">
        <GridPattern />
        <GlowOrb className="top-0 left-1/3" color="blue" size="md" />
        <GlowOrb className="bottom-0 right-0" color="purple" size="sm" />

        {/* Floating shapes */}
        <div className="absolute top-10 right-[15%] animate-float opacity-20">
          <GeometricCube size={60} color="blue" />
        </div>
        <div className="absolute bottom-5 left-[10%] animate-float-delayed opacity-15">
          <GeometricHexagon size={50} color="green" />
        </div>
        <div className="absolute top-[30%] left-[5%] animate-float opacity-25">
          <GeometricPyramid size={45} color="purple" />
        </div>
        <div className="absolute bottom-[20%] right-[25%] animate-float-delayed opacity-15">
          <GeometricSphere size={55} color="blue" />
        </div>
        <div className="absolute top-[50%] right-[8%] animate-float opacity-20">
          <GeometricTriangle size={40} color="pink" />
        </div>

        {/* Bubbles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <Bubble
              key={`shop-bubble-${i}`}
              delay={i * 2}
              size={Math.random() * 25 + 8}
              left={Math.random() * 100}
              color={['blue', 'purple', 'green'][Math.floor(Math.random() * 3)] as 'blue' | 'purple' | 'green'}
            />
          ))}
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-blue/10 border border-neon-blue/20 mb-4">
              <Box className="w-4 h-4 text-neon-blue" />
              <span className="text-sm font-medium text-neon-blue">3D Printed Products</span>
            </div>
            <h1 className="text-display-md font-display font-bold text-white mb-3">
              Shop <span className="gradient-text neon-text">Pre-Designed</span>
            </h1>
            <p className="text-white/50 max-w-md mx-auto">Browse our collection of ready-to-print products</p>
          </div>

          {/* Stats bar */}
          <div className="flex justify-center gap-8 mb-10">
            <div className="text-center">
              <div className="text-2xl font-display font-bold text-neon-blue">{products.length}</div>
              <div className="text-xs text-white/40">Products</div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <div className="text-2xl font-display font-bold text-neon-purple">{categories.length - 1}</div>
              <div className="text-xs text-white/40">Categories</div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <div className="text-2xl font-display font-bold text-neon-green">50+</div>
              <div className="text-xs text-white/40">Materials</div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Content */}
      <section className="relative pb-20 overflow-hidden">
        <GridPattern className="opacity-50" />

        {/* More floating shapes */}
        <div className="absolute top-[20%] left-[3%] animate-float-delayed opacity-15">
          <GeometricSpiral size={50} color="purple" />
        </div>
        <div className="absolute bottom-[30%] right-[5%] animate-float opacity-20">
          <GeometricRing size={45} color="green" />
        </div>

        <div className="container-custom relative z-10">
          {/* Filters */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            <div className="flex flex-wrap gap-2 flex-1">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${activeCategory === category.id ? 'bg-neon-blue/10 text-neon-blue border border-neon-blue/20 shadow-glow' : 'text-white/60 bg-surface-700/30 border border-white/5 hover:bg-surface-700/50 hover:text-white'}`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  {category.label}
                </button>
              ))}
            </div>

            <div className="flex gap-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-48 rounded-lg border bg-surface-700/50 px-4 py-2 pl-10 text-sm text-white placeholder:text-white/30 border-white/10 focus:border-neon-blue/50 focus:outline-none"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                className="rounded-lg border bg-surface-700/50 px-4 py-2 text-sm text-white border-white/10 focus:border-neon-blue/50 focus:outline-none cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low</option>
                <option value="price-desc">Price: High</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                  <ProductCard product={product} onAddToCart={onAddToCart} onClick={() => setSelectedProduct(product)} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-16 h-16 rounded-full bg-surface-700/50 flex items-center justify-center mx-auto mb-4">
                <Filter className="h-8 w-8 text-white/20" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">No products found</h3>
              <p className="text-white/40 text-sm mb-6">Try adjusting your filters or search</p>
              <button onClick={() => { setActiveCategory('all'); setSearchQuery(''); }} className="text-neon-blue hover:text-accent-light transition-colors text-sm">
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {selectedProduct && (
        <ProductDetail product={selectedProduct} isOpen={!!selectedProduct} onClose={() => setSelectedProduct(null)} onAddToCart={onAddToCart} />
      )}
    </div>
  );
};
