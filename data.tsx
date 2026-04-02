import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech } from "lucide-react";

export const socialNetworks = [
    { id: 1, logo: <Youtube size={30} strokeWidth={1} />, src: "https://www.youtube.com/@ZaBaDev-pn2yq/featured" },
    { id: 2, logo: <Linkedin size={30} strokeWidth={1} />, src: "https://www.linkedin.com/in/juan-jose-zabala-rios" },
    { id: 3, logo: <Twitter size={30} strokeWidth={1} />, src: "https://x.com/ZaBaDeV_" },
    { id: 4, logo: <Rss size={30} strokeWidth={1} />, src: "#!" },
    { id: 5, logo: <Twitch size={30} strokeWidth={1} />, src: "https://www.twitch.tv/zabadev" },
];

export const itemsNavbar = [
    { id: 1, title: "Home", icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />, link: "/", tooltip: "Inicio" },
    { id: 2, title: "About", icon: <UserRound size={25} color="#fff" strokeWidth={1} />, link: "/about-me/", tooltip: "Sobre mí" },
    { id: 3, title: "Skills", icon: <BookText size={25} color="#fff" strokeWidth={1} />, link: "/skills/", tooltip: "Habilidades" },
    { id: 4, title: "Portfolio", icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />, link: "/portfolio/", tooltip: "Proyectos" },
    { id: 5, title: "Contact", icon: <Speech size={25} color="#fff" strokeWidth={1} />, link: "/contact/", tooltip: "Contacto" },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Full Stack Developer / Formador Online",
        subtitle: "ZaBaDeV",
        description: "Sumérgete en el aprendizaje del desarrollo web mientras trabajas en proyectos desafiantes que abarcan tanto el front-end como el back-end. Crea experiencias digitales interactivas y completas, explorando todo tipo de tecnologías para ofrecer soluciones innovadoras que impacten y cautiven a los usuarios.",
        date: "Actualidad",
    },
    {
        id: 2,
        title: "Acreditación Docente para Teleformación: FORMADOR/A ON LINE (SSCE002PO)",
        subtitle: "Galea Consulting",
        description: "Desarrollo de materias, métodos y sistemas de aprendizaje digitales interactivas y completas, explorando todo tipo de tecnologías.",
        date: "Nov-Dic 2024",
    },
    {
        id: 3,
        title: "Prácticas Grado Superior DAW",
        subtitle: "Higher Education Software S.L",
        description: "Únete a nuestro equipo mientras desarrollamos soluciones tecnológicas innovadoras que transforman el aprendizaje y mejoran la experiencia educativa.",
        date: "Sep-Feb 2024/25",
    },
    {
        id: 4,
        title: "Prácticas Grado Superior DAM",
        subtitle: "Higher Education Software S.L",
        description: "Únete a nuestro equipo mientras desarrollamos soluciones tecnológicas innovadoras que transforman el aprendizaje y mejoran la experiencia educativa.",
        date: "Feb-Jun 2024",
    },
];

export const dataCounter = [
    { id: 0, endCounter: 2, text: "Años de experiencia", lineRight: true, lineRightMobile: true },
    { id: 1, endCounter: 80, text: "Cursos Realizados", lineRight: true, lineRightMobile: false },
    { id: 2, endCounter: 20, text: "Proyectos finalizados", lineRight: true, lineRightMobile: true },
    { id: 3, endCounter: 1, text: "Cursos Creados", lineRight: true, lineRightMobile: true },
    { id: 4, endCounter: 1, text: "Cursos Impartidos", lineRight: true, lineRightMobile: true },
];

export const serviceData = [
    { icon: <Crop />, title: "Branding", description: "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales" },
    { icon: <Pencil />, title: "Diseño web", description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario" },
    { icon: <Computer />, title: "Desarrollo web", description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades" },
    { icon: <Book />, title: "Copywriting", description: "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia" },
    { icon: <Rocket />, title: "SEO", description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas" },
];

export const dataPortfolio = [
    { id: 1, title: "App Music Player", image: "/image-1.png", urlGithub: "https://github.com/BalaZaStudio/App-Music-Player.git", urlDemo: "https://balazastudio.github.io/App-Music-Player/" },
    { id: 2, title: "App Quiz", image: "/image-2.png", urlGithub: "https://github.com/BalaZaStudio/App-Quiz/tree/main", urlDemo: "https://balazastudio.github.io/App-Quiz/" },
    { id: 3, title: "App Memory Game", image: "/image-3.png", urlGithub: "https://github.com/BalaZaStudio/App-Memory-Game", urlDemo: "https://balazastudio.github.io/App-Memory-Game/" },
    { id: 4, title: "Example Web", image: "/image-4.png", urlGithub: "https://github.com/BalaZaStudio/Example-Web/tree/main", urlDemo: "https://balazastudio.github.io/Example-Web/" },
    { id: 5, title: "Webs Impactantes", image: "/image-5.jpg", urlGithub: "#!", urlDemo: "#!" },
    { id: 6, title: "Web Dinámica", image: "/image-6.jpg", urlGithub: "#!", urlDemo: "#!" },
    { id: 7, title: "Dark Web", image: "/image-7.jpg", urlGithub: "#!", urlDemo: "#!" },
    { id: 8, title: "E-commerce web", image: "/image-8.jpg", urlGithub: "#!", urlDemo: "#!" },
];

export const dataTestimonials = [
    { id: 1, name: "George Snow", description: "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!", imageUrl: "/profile1.png" },
    { id: 2, name: "Juan Pérez", description: "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos.", imageUrl: "/profile2.png" },
    { id: 3, name: "María García", description: "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea.", imageUrl: "/profile3.png" },
    { id: 4, name: "Laura Snow", description: "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones.", imageUrl: "/profile4.png" },
    { id: 5, name: "Carlos Sánchez", description: "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno!", imageUrl: "/profile5.png" },
    { id: 6, name: "Antonio Martínez", description: "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces.", imageUrl: "/profile6.png" },
];

export const skillsData = [
    { name: "Java SE", percentage: 80, color: "#F16529" },
    { name: "Java EE", percentage: 70, color: "#2965F1" },
    { name: "JavaScript", percentage: 90, color: "#F7DF1E" },
    { name: "React", percentage: 85, color: "#61DAFB" },
    { name: "Angular", percentage: 75, color: "#DD0031" },
    { name: "Vite", percentage: 80, color: "#646CFF" },
    { name: "Android", percentage: 70, color: "#3DDC84" },
    { name: "SQL", percentage: 85, color: "#00758F" },
    { name: "PHP", percentage: 65, color: "#777BB3" },
    { name: "C#", percentage: 80, color: "#9B4F96" },
    { name: "C++", percentage: 75, color: "#00599C" },
    { name: "C", percentage: 90, color: "#A8B9CC" },
    { name: "Next.js", percentage: 85, color: "#ffffff" },
    { name: "TypeScript", percentage: 80, color: "#3178C6" },
    { name: "Node.js", percentage: 75, color: "#339933" },
    { name: "Python", percentage: 70, color: "#3776AB" },
];
