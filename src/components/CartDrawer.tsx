import React, { useEffect } from 'react';
import { X, Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { Button } from './Button';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const { items, removeItem, updateQuantity, total, itemCount, clearCart } = useCart();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleQuantityChange = (productId: string, delta: number) => {
    const item = items.find((i) => i.product.id === productId);
    if (item) {
      updateQuantity(productId, item.quantity + delta);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-surface-900/80 backdrop-blur-xl"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-surface-800/90 backdrop-blur border-l border-white/10 flex flex-col animate-slide-in-right">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <ShoppingBag className="h-6 w-6 text-neon-blue" />
            <h2 className="text-xl font-display font-bold text-white">
              Cart ({itemCount})
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-white/50 hover:text-white hover:bg-white/5 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <div className="w-16 h-16 rounded-full bg-surface-700/50 flex items-center justify-center mb-4">
                <ShoppingBag className="h-8 w-8 text-white/20" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Empty cart</h3>
              <p className="text-white/40 text-sm mb-6">Add some products to get started</p>
              <Button
                variant="ghost"
                onClick={onClose}
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Browse Shop
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-4 rounded-xl bg-surface-700/30 border border-white/5"
                >
                  {/* Image */}
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-surface-700/50">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-medium text-white truncate pr-2">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="p-1 text-white/30 hover:text-red-400 transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity */}
                      <div className="flex items-center bg-surface-700/50 rounded-lg border border-white/5">
                        <button
                          onClick={() => handleQuantityChange(item.product.id, -1)}
                          className="p-1.5 text-white/50 hover:text-white transition-colors"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-8 text-center text-sm font-bold text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleQuantityChange(item.product.id, 1)}
                          className="p-1.5 text-white/50 hover:text-white transition-colors"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>

                      {/* Price */}
                      <span className="font-bold text-neon-blue">
                        ${(item.product.price * item.quantity).toFixed(0)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-white/10 px-6 py-5 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-white/50">Total</span>
              <span className="text-2xl font-display font-bold text-neon-blue neon-text-sm">
                ${total.toFixed(0)}
              </span>
            </div>

            <Button variant="primary" size="lg" className="w-full">
              Checkout
            </Button>

            <button
              onClick={clearCart}
              className="w-full text-center text-sm text-white/30 hover:text-white/50 transition-colors"
            >
              Clear cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
