-- Semilla de datos para MasQueSeres
-- Ejecuta esto en el SQL Editor de Supabase

-- Limpiar tablas (opcional, cuidado si ya tienes datos)
-- TRUNCATE episodes, guests, blog_posts CASCADE;

-- Insertar Episodios y capturar IDs para los invitados
DO $$
DECLARE
  ep6_id uuid;
  ep4_id uuid;
  ep1_id uuid;
  ep2_id uuid;
  ep3_id uuid;
BEGIN
  -- Episodio 6
  INSERT INTO episodes (youtube_id, title, description, summary, published_at, duration, thumbnail_url)
  VALUES ('dQw4w9WgXcQ', 'Jornada etnográfica', 'Descubrimos técnicas milenarias adaptadas a la vida moderna.', 'Vivimos en un mundo saturado de ruido...', '2023-10-22', '38:15', 'https://images.unsplash.com/photo-1499209974431-9dac3adaf471?q=80&w=2070&auto=format&fit=crop')
  RETURNING id INTO ep6_id;

  -- Episodio 4
  INSERT INTO episodes (youtube_id, title, description, summary, published_at, duration, thumbnail_url)
  VALUES ('dQw4w9WgXcQ', 'Tantra: El camino de la presencia absoluta', 'Exploramos con Madur la verdadera esencia del Tantra...', 'En este episodio nos sumergimos en una conversación transformadora...', '2023-11-05', '58:40', 'https://images.unsplash.com/photo-1545389336-cf09bd822c56?q=80&w=1964&auto=format&fit=crop')
  RETURNING id INTO ep4_id;

  -- Episodio 1
  INSERT INTO episodes (youtube_id, title, description, summary, published_at, duration, thumbnail_url)
  VALUES ('9bZkp7q19f0', 'La Vulnerabilidad como Superpoder', 'En este episodio exploramos por qué mostrar nuestras grietas nos hace más fuertes.', 'Hoy conversamos sobre cómo la honestidad radical...', '2023-10-15', '45:20', 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=2070&auto=format&fit=crop')
  RETURNING id INTO ep1_id;

  -- Episodio 2
  INSERT INTO episodes (youtube_id, title, description, summary, published_at, duration, thumbnail_url)
  VALUES ('dQw4w9WgXcQ', 'El Arte del Silencio Interior', 'Descubrimos técnicas milenarias adaptadas a la vida moderna.', 'Vivimos en un mundo saturado de ruido...', '2023-10-22', '38:15', 'https://images.unsplash.com/photo-1499209974431-9dac3adaf471?q=80&w=2070&auto=format&fit=crop')
  RETURNING id INTO ep2_id;

  -- Episodio 3
  INSERT INTO episodes (youtube_id, title, description, summary, published_at, duration, thumbnail_url)
  VALUES ('L_jWHffIx5E', 'Conectando con el "Ser"', '¿Somos lo que hacemos o somos lo que sentimos?', 'Una inmersión profunda en la ontología del lenguaje...', '2023-10-29', '52:04', 'https://images.unsplash.com/photo-1518063319789-7217e6706b04?q=80&w=1974&auto=format&fit=crop')
  RETURNING id INTO ep3_id;

  -- Insertar Invitados vinculados
  INSERT INTO guests (episode_id, name, role, photo_url, bio) VALUES
  (ep6_id, 'Marc Soler', 'Instructor de Mindfulness', 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop', 'Fundador del centro Quietud...'),
  (ep4_id, 'Madur', 'Maestro de Tantra y Meditación', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop', 'Con más de 20 años de experiencia...'),
  (ep1_id, 'Dra. Elena Ruiz', 'Psicóloga Clínica y Escritora', 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop', 'Experta en terapia de aceptación...'),
  (ep2_id, 'Marc Soler', 'Instructor de Mindfulness', 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop', 'Fundador del centro Quietud...'),
  (ep3_id, 'Dra. Clara Méndez', 'Filósofa y Consultora', 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop', 'Investigadora especializada...');
END $$;

-- Insertar Blogs
INSERT INTO blog_posts (title, excerpt, content, published_at, author, image_url, category) VALUES
('5 Pasos para una introspección efectiva', 'Aprender a mirar hacia adentro es una habilidad que se entrena.', 'La introspección no es solo pensar...', '2023-10-12', 'Equipo Más que seres', 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=2070&auto=format&fit=crop', 'Crecimiento'),
('La ciencia detrás de la conexión humana', '¿Por qué nos sentimos tan bien cuando conectamos profundamente?', 'Los seres humanos somos animales sociales...', '2023-10-18', 'Dr. Alejandro M.', 'https://images.unsplash.com/photo-1521791136366-3e91374ba23f?q=80&w=2069&auto=format&fit=crop', 'Ciencia'),
('Escuchar para entender, no para responder', 'La mayoría de nosotros escuchamos esperando nuestro turno.', 'La escucha activa es un regalo...', '2023-10-25', 'Marta Soler', 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop', 'Comunicación');
