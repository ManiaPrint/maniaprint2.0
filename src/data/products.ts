export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: 'art' | 'functional' | 'miniatures' | 'prototypes';
  material: string;
  dimensions: string;
  inStock: boolean;
  featured: boolean;
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Geometric Vase',
    description: 'Modern geometric design vase with intricate layered patterns. Perfect for contemporary home decor. Holds water safely for fresh flowers.',
    price: 45.00,
    images: [
      'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8d?w=800&q=80',
    ],
    category: 'art',
    material: 'PLA',
    dimensions: '20cm x 12cm x 12cm',
    inStock: true,
    featured: true,
    rating: 4.9,
    reviews: 32,
  },
  {
    id: '2',
    name: 'Modular Desk Organizer',
    description: 'Customizable desk organization system with interchangeable compartments. Keep your workspace tidy with this sleek, modern solution.',
    price: 35.00,
    images: [
      'https://images.unsplash.com/photo-1586953208270-767889fa9dba?w=800&q=80',
    ],
    category: 'functional',
    material: 'PETG',
    dimensions: '15cm x 10cm x 8cm',
    inStock: true,
    featured: true,
    rating: 4.8,
    reviews: 47,
  },
  {
    id: '3',
    name: 'Fantasy Dragon Miniature',
    description: 'Highly detailed fantasy dragon figure, perfect for tabletop gaming or display. Hand-painted finish available on request.',
    price: 28.00,
    images: [
      'https://images.unsplash.com/photo-1594736797933-d0401d7d23dd?w=800&q=80',
    ],
    category: 'miniatures',
    material: 'Resin',
    dimensions: '8cm x 6cm x 7cm',
    inStock: true,
    featured: false,
    rating: 4.95,
    reviews: 128,
  },
  {
    id: '4',
    name: 'Luminescent Moon Lamp',
    description: 'Stunning moon-surface lamp with LED lighting. Creates an ambient glow perfect for bedrooms or living spaces.',
    price: 65.00,
    images: [
      'https://images.unsplash.com/photo-1507003211169-0a86a7c4e94c?w=800&q=80',
    ],
    category: 'art',
    material: 'PLA',
    dimensions: '15cm diameter',
    inStock: true,
    featured: true,
    rating: 5.0,
    reviews: 89,
  },
  {
    id: '5',
    name: 'Phone Stand & Charger Dock',
    description: 'Ergonomic phone stand with integrated cable management. Compatible with all modern smartphones. Adjustable viewing angle.',
    price: 24.00,
    images: [
      'https://images.unsplash.com/photo-1523206489230-c012744f0f28?w=800&q=80',
    ],
    category: 'functional',
    material: 'PETG',
    dimensions: '12cm x 8cm x 10cm',
    inStock: false,
    featured: false,
    rating: 4.7,
    reviews: 63,
  },
  {
    id: '6',
    name: 'Succulent Planter Set',
    description: 'Set of 3 geometric planters in ascending sizes. Drainage holes included. Perfect for small succulents or cacti.',
    price: 42.00,
    images: [
      'https://images.unsplash.com/photo-1485955900006-10f4c3a4bfd9?w=800&q=80',
    ],
    category: 'art',
    material: 'PLA',
    dimensions: 'Various sizes',
    inStock: true,
    featured: false,
    rating: 4.85,
    reviews: 41,
  },
  {
    id: '7',
    name: 'D&D Figure Collection',
    description: 'Set of 6 customizable D&D character miniatures. Includes warrior, mage, rogue, cleric, ranger, and bard classes.',
    price: 55.00,
    images: [
      'https://images.unsplash.com/photo-1606567595336-2920723c3acf?w=800&q=80',
    ],
    category: 'miniatures',
    material: 'Resin',
    dimensions: '3-5cm each',
    inStock: true,
    featured: true,
    rating: 4.9,
    reviews: 156,
  },
  {
    id: '8',
    name: 'Mechanical Keycap Set',
    description: 'Artisan keycap set with unique textures and designs. Compatible with Cherry MX switches. Set of 12 keys.',
    price: 38.00,
    images: [
      'https://images.unsplash.com/photo-1618384837923-ef5d13b7e7ce?w=800&q=80',
    ],
    category: 'functional',
    material: 'Resin',
    dimensions: 'Standard keycap size',
    inStock: true,
    featured: false,
    rating: 4.75,
    reviews: 92,
  },
  {
    id: '9',
    name: 'Architectural Model Kit',
    description: 'Famous building scale model kit. Precision printed with detailed facades. Assembly required, glue included.',
    price: 89.00,
    images: [
      'https://images.unsplash.com/photo-1487958449933-283abbdac8e9?w=800&q=80',
    ],
    category: 'prototypes',
    material: 'PLA',
    dimensions: '25cm x 15cm x 20cm',
    inStock: true,
    featured: false,
    rating: 4.8,
    reviews: 28,
  },
  {
    id: '10',
    name: 'Artistic Spiral Bowl',
    description: 'Mesmerizing spiral-patterned bowl with organic flowing design. Decorative piece perfect for dry arrangements.',
    price: 52.00,
    images: [
      'https://images.unsplash.com/photo-1578749556568-f18fd3209bf0?w=800&q=80',
    ],
    category: 'art',
    material: 'PLA',
    dimensions: '18cm x 18cm x 8cm',
    inStock: true,
    featured: false,
    rating: 4.85,
    reviews: 37,
  },
  {
    id: '11',
    name: 'Cable Management Clips',
    description: 'Pack of 20 cable clips in 4 different sizes. Keep your cables organized and accessible. Self-adhesive backing.',
    price: 15.00,
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    ],
    category: 'functional',
    material: 'TPU',
    dimensions: 'Various sizes',
    inStock: true,
    featured: false,
    rating: 4.6,
    reviews: 203,
  },
  {
    id: '12',
    name: 'Anatomical Heart Model',
    description: 'Detailed anatomical heart model for educational purposes. Accurate proportions and labeled chambers.',
    price: 78.00,
    images: [
      'https://images.unsplash.com/photo-1559758175-0eb30cd8c063?w=800&q=80',
    ],
    category: 'prototypes',
    material: 'Resin',
    dimensions: '12cm x 10cm x 8cm',
    inStock: true,
    featured: true,
    rating: 4.95,
    reviews: 45,
  },
];

export const categories = [
  { id: 'all', label: 'All Products', count: products.length },
  { id: 'art', label: 'Art & Decor', count: products.filter(p => p.category === 'art').length },
  { id: 'functional', label: 'Functional', count: products.filter(p => p.category === 'functional').length },
  { id: 'miniatures', label: 'Miniatures', count: products.filter(p => p.category === 'miniatures').length },
  { id: 'prototypes', label: 'Prototypes', count: products.filter(p => p.category === 'prototypes').length },
];
