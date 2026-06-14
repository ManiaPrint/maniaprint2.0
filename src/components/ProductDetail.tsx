import React, { useState, useEffect } from 'react';
import { Star, ShoppingBag, Minus, Plus, X } from 'lucide-react';
import { Product } from '../data/products';
import { Badge } from './Card';
import { Button } from './Button';

interface ProductDetailProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({
  product,
  isOpen,
  onClose,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (isOpen) {
      setQuantity(1);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, product.id]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleQuantityChange = (delta: number) => {
    setQuantity(Math.max(1, quantity + delta));
  };

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-surface-900/80 backdrop-blur-xl"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-3xl bg-surface-800/90 backdrop-blur border border-white/10 rounded-2xl overflow-hidden animate-scale-in">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-lg bg-surface-700/50 text-white/50 hover:text-white hover:bg-surface-700 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-square bg-surface-700/30">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-8 flex flex-col">
            {/* Badges */}
            <div className="flex gap-2 mb-4">
              <Badge variant="secondary">{product.category}</Badge>
              {product.featured && <Badge variant="neon">Featured</Badge>}
            </div>

            {/* Title */}
            <h2 className="text-2xl font-display font-bold text-white mb-2">
              {product.name}
            </h2>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-white/20'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-white/50">{product.reviews} reviews</span>
            </div>

            {/* Description */}
            <p className="text-white/60 mb-6">{product.description}</p>

            {/* Specs */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-surface-700/30 rounded-lg p-3 border border-white/5">
                <p className="text-xs text-white/40 mb-1">Material</p>
                <p className="text-sm font-semibold text-white">{product.material}</p>
              </div>
              <div className="bg-surface-700/30 rounded-lg p-3 border border-white/5">
                <p className="text-xs text-white/40 mb-1">Size</p>
                <p className="text-sm font-semibold text-white">{product.dimensions}</p>
              </div>
            </div>

            {/* Spacer */}
            <div className="flex-grow" />

            {/* Price */}
            <div className="text-3xl font-display font-bold text-neon-blue neon-text-sm mb-6">
              ${(product.price * quantity).toFixed(2)}
            </div>

            {/* Quantity and Add */}
            <div className="flex gap-3">
              <div className="flex items-center bg-surface-700/50 rounded-xl border border-white/10">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="p-3 text-white/60 hover:text-white transition-colors"
                >
                  <Minus className="h-5 w-5" />
                </button>
                <span className="w-10 text-center font-bold text-white">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="p-3 text-white/60 hover:text-white transition-colors"
                >
                  <Plus className="h-5 w-5" />
                </button>
              </div>

              <Button
                variant="primary"
                className="flex-1"
                disabled={!product.inStock}
                leftIcon={<ShoppingBag className="h-5 w-5" />}
                onClick={handleAddToCart}
              >
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
