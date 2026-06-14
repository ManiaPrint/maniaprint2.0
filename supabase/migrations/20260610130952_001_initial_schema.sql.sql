-- Products table
CREATE TABLE products (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  images TEXT[] NOT NULL DEFAULT '{}',
  category TEXT NOT NULL CHECK (category IN ('art', 'functional', 'miniatures', 'prototypes')),
  material TEXT NOT NULL,
  dimensions TEXT,
  in_stock BOOLEAN DEFAULT true,
  featured BOOLEAN DEFAULT false,
  rating DECIMAL(3,2) DEFAULT 0.00,
  reviews INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Policies for products (public read)
CREATE POLICY "products_public_read" ON products FOR SELECT
  TO public USING (true);

CREATE POLICY "products_authenticated_all" ON products FOR ALL
  TO authenticated USING (true) WITH CHECK (true);

-- Orders table
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_email TEXT NOT NULL,
  customer_name TEXT NOT NULL,
  customer_phone TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'completed', 'cancelled', 'refunded')),
  total DECIMAL(10,2) NOT NULL,
  stripe_payment_intent_id TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Policies for orders
CREATE POLICY "orders_authenticated_all" ON orders FOR ALL
  TO authenticated USING (true) WITH CHECK (true);

-- Order items table
CREATE TABLE order_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id UUID NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  product_id TEXT NOT NULL REFERENCES products(id) ON DELETE SET NULL,
  quantity INTEGER NOT NULL DEFAULT 1,
  unit_price DECIMAL(10,2) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

-- Policies for order items
CREATE POLICY "order_items_authenticated_all" ON order_items FOR ALL
  TO authenticated USING (true) WITH CHECK (true);

-- Contact submissions table
CREATE TABLE contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  project_type TEXT,
  budget TEXT,
  message TEXT NOT NULL,
  files TEXT[] DEFAULT '{}',
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied', 'archived')),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Policies for contact submissions
CREATE POLICY "contact_submissions_insert" ON contact_submissions FOR INSERT
  TO authenticated WITH CHECK (true);

CREATE POLICY "contact_submissions_authenticated_all" ON contact_submissions FOR ALL
  TO authenticated USING (true);

-- Newsletter subscribers table
CREATE TABLE newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  subscribed_at TIMESTAMPTZ DEFAULT now(),
  is_active BOOLEAN DEFAULT true
);

-- Enable RLS
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Policies for newsletter
CREATE POLICY "newsletter_insert" ON newsletter_subscribers FOR INSERT
  TO authenticated WITH CHECK (true);

CREATE POLICY "newsletter_authenticated_all" ON newsletter_subscribers FOR ALL
  TO authenticated USING (true);

-- Testimonials table
CREATE TABLE testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  role TEXT,
  company TEXT,
  image TEXT,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  text TEXT NOT NULL,
  is_approved BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Policies for testimonials
CREATE POLICY "testimonials_public_read" ON testimonials FOR SELECT
  TO public USING (is_approved = true);

CREATE POLICY "testimonials_authenticated_all" ON testimonials FOR ALL
  TO authenticated USING (true) WITH CHECK (true);

-- Insert initial products
INSERT INTO products (id, name, description, price, images, category, material, dimensions, in_stock, featured, rating, reviews) VALUES
('1', 'Geometric Vase', 'Modern geometric design vase with intricate layered patterns. Perfect for contemporary home decor. Holds water safely for fresh flowers.', 45.00, ARRAY['https://images.unsplash.com/photo-1612196808214-b8e1d6145a8d?w=800&q=80'], 'art', 'PLA', '20cm x 12cm x 12cm', true, true, 4.90, 32),
('2', 'Modular Desk Organizer', 'Customizable desk organization system with interchangeable compartments. Keep your workspace tidy with this sleek, modern solution.', 35.00, ARRAY['https://images.unsplash.com/photo-1586953208270-767889fa9dba?w=800&q=80'], 'functional', 'PETG', '15cm x 10cm x 8cm', true, true, 4.80, 47),
('3', 'Fantasy Dragon Miniature', 'Highly detailed fantasy dragon figure, perfect for tabletop gaming or display. Hand-painted finish available on request.', 28.00, ARRAY['https://images.unsplash.com/photo-1594736797933-d0401d7d23dd?w=800&q=80'], 'miniatures', 'Resin', '8cm x 6cm x 7cm', true, false, 4.95, 128),
('4', 'Luminescent Moon Lamp', 'Stunning moon-surface lamp with LED lighting. Creates an ambient glow perfect for bedrooms or living spaces.', 65.00, ARRAY['https://images.unsplash.com/photo-1507003211169-0a86a7c4e94c?w=800&q=80'], 'art', 'PLA', '15cm diameter', true, true, 5.00, 89),
('5', 'Phone Stand & Charger Dock', 'Ergonomic phone stand with integrated cable management. Compatible with all modern smartphones. Adjustable viewing angle.', 24.00, ARRAY['https://images.unsplash.com/photo-1523206489230-c012744f0f28?w=800&q=80'], 'functional', 'PETG', '12cm x 8cm x 10cm', false, false, 4.70, 63),
('6', 'Succulent Planter Set', 'Set of 3 geometric planters in ascending sizes. Drainage holes included. Perfect for small succulents or cacti.', 42.00, ARRAY['https://images.unsplash.com/photo-1485955900006-10f4c3a4bfd9?w=800&q=80'], 'art', 'PLA', 'Various sizes', true, false, 4.85, 41),
('7', 'D&D Figure Collection', 'Set of 6 customizable D&D character miniatures. Includes warrior, mage, rogue, cleric, ranger, and bard classes.', 55.00, ARRAY['https://images.unsplash.com/photo-1606567595336-2920723c3acf?w=800&q=80'], 'miniatures', 'Resin', '3-5cm each', true, true, 4.90, 156),
('8', 'Mechanical Keycap Set', 'Artisan keycap set with unique textures and designs. Compatible with Cherry MX switches. Set of 12 keys.', 38.00, ARRAY['https://images.unsplash.com/photo-1618384837923-ef5d13b7e7ce?w=800&q=80'], 'functional', 'Resin', 'Standard keycap size', true, false, 4.75, 92),
('9', 'Architectural Model Kit', 'Famous building scale model kit. Precision printed with detailed facades. Assembly required, glue included.', 89.00, ARRAY['https://images.unsplash.com/photo-1487958449933-283abbdac8e9?w=800&q=80'], 'prototypes', 'PLA', '25cm x 15cm x 20cm', true, false, 4.80, 28),
('10', 'Artistic Spiral Bowl', 'Mesmerizing spiral-patterned bowl with organic flowing design. Decorative piece perfect for dry arrangements.', 52.00, ARRAY['https://images.unsplash.com/photo-1578749556568-f18fd3209bf0?w=800&q=80'], 'art', 'PLA', '18cm x 18cm x 8cm', true, false, 4.85, 37),
('11', 'Cable Management Clips', 'Pack of 20 cable clips in 4 different sizes. Keep your cables organized and accessible. Self-adhesive backing.', 15.00, ARRAY['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80'], 'functional', 'TPU', 'Various sizes', true, false, 4.60, 203),
('12', 'Anatomical Heart Model', 'Detailed anatomical heart model for educational purposes. Accurate proportions and labeled chambers.', 78.00, ARRAY['https://images.unsplash.com/photo-1559758175-0eb30cd8c063?w=800&q=80'], 'prototypes', 'Resin', '12cm x 10cm x 8cm', true, true, 4.95, 45);

-- Insert sample testimonials
INSERT INTO testimonials (name, role, company, image, rating, text, is_approved) VALUES
('Sarah Chen', 'Product Designer', 'TechVentures Inc.', 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80', 5, 'ManiaPrint transformed our prototypes into stunning physical models. The attention to detail and quality exceeded our expectations. Will definitely use for all our future projects!', true),
('Michael Torres', 'Creative Director', 'ArtHouse Studio', 'https://images.unsplash.com/photo-1507003211169-0a65ee3e8fd7?w=400&q=80', 5, 'The custom art pieces I ordered were absolutely beautiful. The team worked with me to perfect every detail. Their expertise in material selection made all the difference.', true),
('Emily Rodriguez', 'Game Developer', 'Indie Games Co.', 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80', 5, 'My D&D miniatures came out incredibly detailed! The resin quality and paint-ready surface made them perfect for my table. Fast shipping and great packaging too.', true),
('David Kim', 'Engineering Lead', 'RoboTech Solutions', 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80', 5, 'We needed functional parts that could withstand real use. ManiaPrint recommended the perfect material and delivered parts that passed all our stress tests.', true),
('Jessica Williams', 'Interior Designer', 'Modern Spaces', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80', 5, 'The custom vases I ordered for a client project were showstoppers. Everyone asked where they came from! ManiaPrint is now my go-to for unique decor pieces.', true),
('Robert Chang', 'Architecture Student', 'Design University', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80', 5, 'My thesis model was printed flawlessly. The precision and scale accuracy helped me graduate with honors. Affordable pricing for students too!', true);

-- Create index for faster queries
CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_products_featured ON products(featured);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_contact_submissions_status ON contact_submissions(status);
