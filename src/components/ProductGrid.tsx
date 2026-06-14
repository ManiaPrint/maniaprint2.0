import React, { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { products, categories, Product } from '../data/products';
import { ProductCard } from './ProductCard';
import { ProductDetail } from './ProductDetail';
import { Tabs } from './Tabs';

interface ProductGridProps {
  onAddToCart: (product: Product, quantity?: number) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = React.useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query)
      );
    }

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return result;
  }, [activeCategory, searchQuery, sortBy]);

  return (
    <section id="products" className="section-padding bg-surface-800 relative">
      <div className="absolute inset-0 grid-lines opacity-20" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="section-label inline-flex mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-blue" />
            Shop
          </div>
          <h2 className="text-display-sm font-display font-bold text-white">
            Pre-Designed Products
          </h2>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          <Tabs
            tabs={categories}
            activeTab={activeCategory}
            onChange={setActiveCategory}
          />

          <div className="flex gap-3">
            <div className="relative flex-1 max-w-xs">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border bg-surface-700/50 px-4 py-2 pl-10 text-sm text-white placeholder:text-white/30 border-white/10 focus:border-neon-blue/50 focus:outline-none"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="rounded-lg border bg-surface-700/50 px-4 py-2 text-sm text-white border-white/10 focus:border-neon-blue/50 focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low</option>
              <option value="price-desc">Price: High</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        {/* Products */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                onClick={() => setSelectedProduct(product)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <SlidersHorizontal className="h-12 w-12 text-white/20 mx-auto mb-4" />
            <p className="text-white/50">No products found</p>
          </div>
        )}

        {/* Detail Modal */}
        {selectedProduct && (
          <ProductDetail
            product={selectedProduct}
            isOpen={!!selectedProduct}
            onClose={() => setSelectedProduct(null)}
            onAddToCart={onAddToCart}
          />
        )}
      </div>
    </section>
  );
};
