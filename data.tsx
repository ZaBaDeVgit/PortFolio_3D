export const profile = {
  name: 'Juan José Zabala Ríos',
  brand: 'ZaBaDeV',
  role: 'Full Stack Developer & Formador',
  github: 'https://github.com/ZaBaDeVgit',
  linkedin: 'https://www.linkedin.com/in/juan-jose-zabala-rios',
  youtube: 'https://www.youtube.com/@ZaBaDev-pn2yq/featured',
  twitch: 'https://www.twitch.tv/zabadev',
};

export const navigation = [
  { label: 'Inicio', href: '/' },
  { label: 'Sobre mí', href: '/about-me/' },
  { label: 'Proyectos', href: '/portfolio/' },
  { label: 'Stack', href: '/skills/' },
];

export type Project = {
  id: number;
  title: string;
  category: 'Aplicaciones' | 'Web' | 'Juegos';
  description: string;
  image: string;
  tags: string[];
  urlGithub: string;
  urlDemo: string;
  accent: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'Music Player',
    category: 'Aplicaciones',
    description:
      'Tu música, a tu ritmo. Un reproductor con una interfaz visual centrada en la experiencia de escucha.',
    image: '/image-1.png',
    tags: ['JavaScript', 'CSS', 'Audio'],
    urlGithub: 'https://github.com/BalaZaStudio/App-Music-Player',
    urlDemo: 'https://balazastudio.github.io/App-Music-Player/',
    accent: 'violet',
  },
  {
    id: 2,
    title: 'Quiz App',
    category: 'Aplicaciones',
    description:
      'Aprender también puede ser un reto. Una aplicación de preguntas para poner a prueba tus conocimientos.',
    image: '/image-2.png',
    tags: ['JavaScript', 'HTML', 'CSS'],
    urlGithub: 'https://github.com/BalaZaStudio/App-Quiz',
    urlDemo: 'https://balazastudio.github.io/App-Quiz/',
    accent: 'green',
  },
  {
    id: 3,
    title: 'Memory Game',
    category: 'Juegos',
    description:
      'Pequeñas interacciones, grandes desafíos. Un juego de parejas para entrenar la memoria.',
    image: '/image-3.png',
    tags: ['JavaScript', 'Game logic', 'CSS'],
    urlGithub: 'https://github.com/BalaZaStudio/App-Memory-Game',
    urlDemo: 'https://balazastudio.github.io/App-Memory-Game/',
    accent: 'blue',
  },
  {
    id: 4,
    title: 'Example Web',
    category: 'Web',
    description:
      'Explorando el equilibrio entre diseño y código con una experiencia web adaptable a cualquier pantalla.',
    image: '/image-4.png',
    tags: ['HTML', 'CSS', 'Responsive'],
    urlGithub: 'https://github.com/BalaZaStudio/Example-Web',
    urlDemo: 'https://balazastudio.github.io/Example-Web/',
    accent: 'orange',
  },
];

export const experience = [
  {
    date: 'Actualidad',
    title: 'Desarrollo Full Stack & formación online',
    company: 'ZaBaDeV',
    description:
      'Desarrollo experiencias web y comparto lo que aprendo. Del frontend al backend, con curiosidad y atención a los detalles.',
  },
  {
    date: 'Sep. 2024 — Feb. 2025',
    title: 'Prácticas · Desarrollo de Aplicaciones Web',
    company: 'Higher Education Software S.L.',
    description:
      'Desarrollo de soluciones web en un entorno profesional y participación en proyectos de tecnología educativa.',
  },
  {
    date: 'Nov. — Dic. 2024',
    title: 'Acreditación de formador online',
    company: 'Galea Consulting · SSCE002PO',
    description:
      'Metodologías, recursos y herramientas para diseñar experiencias de aprendizaje digital.',
  },
  {
    date: 'Feb. — Jun. 2024',
    title: 'Prácticas · Desarrollo de Aplicaciones Multiplataforma',
    company: 'Higher Education Software S.L.',
    description:
      'Primeros retos profesionales en desarrollo de software y trabajo en equipo.',
  },
];

export const skillGroups = [
  {
    number: '01',
    title: 'Frontend',
    description: 'Interfaces que se sienten tan bien como se ven.',
    skills: [
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Angular',
      'HTML & CSS',
      'Vite',
    ],
  },
  {
    number: '02',
    title: 'Backend & datos',
    description: 'La lógica que da vida a cada experiencia.',
    skills: ['Java', 'Node.js', 'PHP', 'Python', 'SQL', 'C#'],
  },
  {
    number: '03',
    title: 'Más allá de la web',
    description: 'Otras plataformas. La misma curiosidad.',
    skills: [
      'Android',
      'C',
      'C++',
      'Git & GitHub',
      'Three.js',
      'Formación online',
    ],
  },
];
