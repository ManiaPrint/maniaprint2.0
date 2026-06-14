import React from 'react';
import { Star, ShoppingBag } from 'lucide-react';
import { Product } from '../data/products';
import { Badge } from './Card';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onClick: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onClick,
}) => {
  return (
    <div className="group relative rounded-2xl overflow-hidden bg-surface-700/30 border border-white/5 backdrop-blur hover:border-neon-blue/30 hover:shadow-glow transition-all duration-300">
      {/* Image */}
      <div
        className="relative aspect-square overflow-hidden cursor-pointer"
        onClick={onClick}
      >
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {product.featured && (
            <Badge variant="neon">Featured</Badge>
          )}
          {!product.inStock && (
            <Badge variant="error">Sold Out</Badge>
          )}
        </div>

        {/* Quick add button */}
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (product.inStock) onAddToCart(product);
            }}
            disabled={!product.inStock}
            className={`
              w-full flex items-center justify-center gap-2 py-3 rounded-xl
              transition-all duration-200
              ${product.inStock
                ? 'bg-neon-blue text-surface-900 font-semibold hover:shadow-neon-blue'
                : 'bg-surface-700/50 text-white/30 cursor-not-allowed'
              }
            `}
          >
            <ShoppingBag className="h-4 w-4" />
            <span>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Name */}
        <h3
          className="text-lg font-semibold text-white mb-1 cursor-pointer hover:text-neon-blue transition-colors truncate"
          onClick={onClick}
        >
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
          <span className="text-sm text-white/50">{product.rating}</span>
          <span className="text-xs text-white/30">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-neon-blue">${product.price.toFixed(0)}</span>
          <span className="text-xs text-white/30">{product.material}</span>
        </div>
      </div>
    </div>
  );
};
