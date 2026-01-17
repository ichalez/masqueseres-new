-- Semilla de datos para MasQueSeres
-- Ejecuta esto en el SQL Editor de Supabase

-- Limpiar tablas
TRUNCATE episodes, guests, blog_posts CASCADE;

-- Insertar Episodios y capturar IDs para los invitados
DO $$
DECLARE
  ep1_id uuid;
  ep2_id uuid;
  ep3_id uuid;
  ep4_id uuid;
  ep5_id uuid;
  ep6_id uuid;
BEGIN
  -- Episodio 1 (Real)
  INSERT INTO episodes (youtube_id, title, description, summary, published_at, duration, thumbnail_url)
  VALUES (
    'WG4GYMwapWk', 
    'TANTRA: Más allá del sexo', 
    'En este capítulo de estreno, Diana se sienta con Madhur, un experto en el camino del Tantra, para tener una conversación profunda y reveladora sobre la verdadera esencia de esta práctica milenaria. Lejos de los mitos y la comercialización, exploramos el Tantra como un camino de presencia absoluta, de conexión con la energía vital y de expansión de la consciencia a través del cuerpo y el espíritu.', 
    'Descubrimos que el Tantra no es lo que nos han contado. Es una invitación a vivir con el corazón abierto y los sentidos despiertos.', 
    '2024-01-15', 
    '52:30', 
    'https://img.youtube.com/vi/WG4GYMwapWk/maxresdefault.jpg'
  )
  RETURNING id INTO ep1_id;

  -- Episodio 2 (Placeholder)
  INSERT INTO episodes (youtube_id, title, description, summary, published_at, duration, thumbnail_url)
  VALUES ('dQw4w9WgXcQ', 'El Arte del Silencio Interior', 'Descubrimos técnicas milenarias adaptadas a la vida moderna.', 'Vivimos en un mundo saturado de ruido...', '2023-11-20', '38:15', 'https://images.unsplash.com/photo-1499209974431-9dac3adaf471?q=80&w=2070&auto=format&fit=crop')
  RETURNING id INTO ep2_id;

  -- Episodio 3 (Placeholder)
  INSERT INTO episodes (youtube_id, title, description, summary, published_at, duration, thumbnail_url)
  VALUES ('L_jWHffIx5E', 'Conectando con el "Ser"', '¿Somos lo que hacemos o somos lo que sentimos?', 'Una inmersión profunda en la ontología del lenguaje...', '2023-12-05', '52:04', 'https://images.unsplash.com/photo-1518063319789-7217e6706b04?q=80&w=1974&auto=format&fit=crop')
  RETURNING id INTO ep3_id;

  -- Insertar Invitados vinculados
  INSERT INTO guests (episode_id, name, role, photo_url, bio) VALUES
  (ep1_id, 'Madhur', 'Experto en Tantra y Meditación', 'https://images.unsplash.com/photo-1545389336-cf09bd822c56?q=80&w=1964&auto=format&fit=crop', 'Madhur es un facilitador con años de experiencia acompañando a personas en el despertar de la consciencia a través del cuerpo y la energía vital.'),
  (ep2_id, 'Marc Soler', 'Instructor de Mindfulness', 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop', 'Fundador del centro Quietud...'),
  (ep3_id, 'Dra. Clara Méndez', 'Filósofa y Consultora', 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop', 'Investigadora especializada...');
END $$;

-- Insertar Blogs
INSERT INTO blog_posts (title, excerpt, content, published_at, author, image_url, category) VALUES
('5 Pasos para una introspección efectiva', 'Aprender a mirar hacia adentro es una habilidad que se entrena.', 'La introspección no es solo pensar...', '2023-10-12', 'Equipo Más que seres', 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=2070&auto=format&fit=crop', 'Crecimiento'),
('La ciencia detrás de la conexión humana', '¿Por qué nos sentimos tan bien cuando conectamos profundamente?', 'Los seres humanos somos animales sociales...', '2023-10-18', 'Dr. Alejandro M.', 'https://images.unsplash.com/photo-1521791136366-3e91374ba23f?q=80&w=2069&auto=format&fit=crop', 'Ciencia'),
('Escuchar para entender, no para responder', 'La mayoría de nosotros escuchamos esperando nuestro turno.', 'La escucha activa es un regalo...', '2023-10-25', 'Marta Soler', 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop', 'Comunicación');
