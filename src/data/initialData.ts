import { ProfileData, SkillItem, ProjectItem, MessageItem } from '../types/portfolio';

export const initialProfileData: ProfileData = {
  name: "Brian Aryansyah Pamungkas",
  tagline: "Building Scalable Web Architecture & Medical-Grade Computer Vision Models",
  roles: [
    "Fullstack Web Developer",
    "Computer Vision & ML Developer",
    "Informatics Student at UDINUS"
  ],
  university: "Universitas Dian Nuswantoro (UDINUS)",
  major: "Teknik Informatika",
  semester: 4,
  location: "Semarang, Jawa Tengah, Indonesia",
  bio: "Mahasiswa Teknik Informatika UDINUS yang berfokus pada pengembangan arsitektur web performa tinggi dan implementasi Computer Vision. Berpengalaman merancang RESTful API terstruktur berbasis MVC (CodeIgniter 4), aplikasi frontend interaktif (React & Vite), serta integrasi model Deep Learning (YOLOv8 & OpenCV) untuk solusi peranti lunak dunia nyata.",
  email: "brianaryansyahp@gmail.com",
  github: "https://github.com/brianaryansyah",
  linkedin: "https://linkedin.com/in/brianaryansyah",
  instagram: "https://instagram.com/brianaryansyah",
  status: "Terbuka untuk Projek & Kolaborasi"
};

export const initialSkillsData: SkillItem[] = [
  {
    id: "sk-1",
    name: "React.js & Vite Ecosystem",
    category: "Frontend",
    icon: "Code2",
    level: "Advanced",
    description: "Pengembangan Single Page Application berketergantungan rendah dengan manajemen state reaktif, custom hooks, dan arsitektur komponen modular.",
    featured: true,
    size: "col-span-12 md:col-span-7 lg:col-span-8",
    color: "from-cyan-500/20 to-blue-600/10",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    highlights: ["State Management", "Component Pattern", "Vite Bundler", "Virtual DOM"]
  },
  {
    id: "sk-2",
    name: "YOLOv8 & Computer Vision",
    category: "Machine Learning",
    icon: "BrainCircuit",
    level: "Intermediate",
    description: "Deteksi objek real-time, anotasi dataset terkurasi, fine-tuning arsitektur YOLOv8, dan inferensi citra medis berpresisi tinggi.",
    featured: true,
    size: "col-span-12 md:col-span-5 lg:col-span-4",
    color: "from-emerald-500/20 to-teal-600/10",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    highlights: ["Object Detection", "Dataset Annotation", "Bounding-box Visualizer", "Precision Metrics"]
  },
  {
    id: "sk-3",
    name: "CodeIgniter 4 (MVC Architecture)",
    category: "Backend",
    icon: "Server",
    level: "Advanced",
    description: "Perancangan RESTful API terstruktur, keamanan middleware, autentikasi berbasis token/Shield, serta isolasi logika Model-View-Controller.",
    featured: true,
    size: "col-span-12 md:col-span-4 lg:col-span-4",
    color: "from-orange-500/20 to-amber-600/10",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    highlights: ["RESTful Endpoints", "Shield Auth", "Database Migrations", "Filters & Middleware"]
  },
  {
    id: "sk-4",
    name: "Python AI & Data Stack",
    category: "Data Science & AI",
    icon: "Terminal",
    level: "Advanced",
    description: "Pengolahan matriks & manipulasi data menggunakan OpenCV, PyTorch, NumPy, Pandas, serta integrasi endpoint backend berbasis Flask.",
    featured: true,
    size: "col-span-12 md:col-span-4 lg:col-span-4",
    color: "from-blue-500/20 to-indigo-600/10",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    highlights: ["OpenCV Pipeline", "PyTorch Tensors", "Feature Extraction", "Flask Microservices"]
  },
  {
    id: "sk-5",
    name: "MySQL & Relational DB Design",
    category: "Database",
    icon: "Database",
    level: "Advanced",
    description: "Normalisasi skema relasional, optimasi kueri kompleks, penataan indeks tabel, dan eksekusi transaksi basis data aman.",
    featured: true,
    size: "col-span-12 md:col-span-4 lg:col-span-4",
    color: "from-purple-500/20 to-violet-600/10",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    highlights: ["Schema Normalization", "Indexed Queries", "Foreign Key Constraints", "Performance Tuning"]
  },
  {
    id: "sk-6",
    name: "Linux Systems & Infrastructure",
    category: "DevOps",
    icon: "Cpu",
    level: "Intermediate",
    description: "Manajemen lingkungan server Linux, konfiguras Nginx/Apache reverse proxy, otomatisasi Bash script, dan manajemen servis systemd.",
    featured: false,
    size: "col-span-12 md:col-span-6 lg:col-span-6",
    color: "from-slate-500/20 to-zinc-600/10",
    badgeColor: "bg-slate-500/10 text-slate-400 border-slate-500/20",
    highlights: ["Nginx Reverse Proxy", "Bash Shell Scripting", "Systemd Services", "SSH Hardening"]
  },
  {
    id: "sk-7",
    name: "Tailwind CSS & UI Architecture",
    category: "Frontend",
    icon: "Palette",
    level: "Expert",
    description: "Konstruksi sistem desain kustom, layout ultra-responsif, micro-animations, glassmorphism, dan standar estetika antarmuka web modern.",
    featured: false,
    size: "col-span-12 md:col-span-6 lg:col-span-6",
    color: "from-sky-500/20 to-indigo-600/10",
    badgeColor: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    highlights: ["Custom Design System", "Responsive Layouts", "Dark Mode UI", "Micro-Interactions"]
  }
];

export const initialProjectsData: ProjectItem[] = [
  {
    id: "proj-1",
    title: "SiCASA — CataractScan AI",
    category: "Machine Learning & Web",
    description: "Sistem skrining dan deteksi katarak otomatis berbasis AI menggunakan model Computer Vision YOLOv8 dan antarmuka web interaktif berbasis Flask & React.",
    longDescription: "SiCASA (CataractScan AI) dirancang untuk membantu analisis citra medis mata secara otomatis. Arsitektur YOLOv8 yang di-fine-tune dengan dataset medis terkurasi mampu mendeteksi serta mengklasifikasikan tingkat katarak dengan tingkat presisi tinggi (<45ms latency per frame). Visualisasi bounding box otomatis memudahkan analisis bagi praktisi medis.",
    architectureDetails: "Deteksi YOLOv8 PyTorch -> Flask REST API Inference Endpoint -> React Frontend Rendering dengan Dynamic Bounding Box Overlay",
    keyAchievements: ["Model Accuracy >96%", "Inference Speed <45ms", "Seamless Web Overlay"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
    techStack: ["Python", "YOLOv8", "OpenCV", "Flask", "React", "Tailwind CSS"],
    featured: true,
    githubUrl: "https://github.com/brianaryansyah/sicasa-cataractscan",
    demoUrl: "#",
    date: "2024"
  },
  {
    id: "proj-2",
    title: "SiPINTAR — Academic Management ERP",
    category: "Fullstack Web",
    description: "Sistem manajemen akademis dan administrasi sekolah terpadu dengan arsitektur MVC CodeIgniter 4, autentikasi multi-peran (RBAC), dan pelaporan otomatis.",
    longDescription: "Platform web terintegrasi untuk pengelolaan nilai siswa, presensi digital, mata pelajaran, serta portal berorientasi guru dan murid. Menggunakan CodeIgniter 4 sebagai backend terstruktur dengan MySQL relational database yang dioptimasi untuk kueri cepat.",
    architectureDetails: "CodeIgniter 4 (MVC) -> Service Layer & Repository Pattern -> MySQL Relational Database -> Responsive Dashboard UI",
    keyAchievements: ["Multi-role RBAC Auth", "Automatic Report Generation", "Sub-second Query Times"],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1200&auto=format&fit=crop",
    techStack: ["CodeIgniter 4", "PHP 8", "MySQL", "JavaScript", "Tailwind CSS"],
    featured: true,
    githubUrl: "https://github.com/brianaryansyah/sipintar-app",
    demoUrl: "#",
    date: "2024"
  },
  {
    id: "proj-3",
    title: "Phishing Guard — Lexical URL Threat Classifier",
    category: "Machine Learning",
    description: "Model analisis keamanan tautan web untuk mendeteksi ancaman phishing secara eksplisit menggunakan ekstraksi 18+ fitur lexical URL dan algoritma Machine Learning.",
    longDescription: "Sistem deteksi cyber security yang mengekstrak fitur lexical unik dari URL (seperti entropi string, keberadaan alamat IP, struktur subdomain, umur SSL, dan kedalaman pengalihan HTTP) untuk mengklasifikasikan tautan aman versus berbahaya secara otomatis.",
    architectureDetails: "Feature Extraction Pipeline (Pandas & NLTK) -> Random Forest & XGBoost Ensemble Model -> Streamlit Real-Time Visualizer",
    keyAchievements: ["18+ Lexical Features Extracted", "False Positive Rate <2%", "Real-time Threat Scoring"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
    techStack: ["Python", "Scikit-Learn", "Pandas", "Streamlit", "NLTK"],
    featured: true,
    githubUrl: "https://github.com/brianaryansyah/phishing-url-detection",
    demoUrl: "#",
    date: "2023"
  },
  {
    id: "proj-4",
    title: "Smart Digital Library Management",
    category: "Fullstack Web",
    description: "Aplikasi perpustakaan digital untuk transaksi peminjaman buku, penghitungan denda otomatis, pencarian buku real-time, dan ekspor laporan terstruktur.",
    longDescription: "Sistem informasi perpustakaan berbasis web dengan pencarian terindeks, integrasi barcode scanner untuk efisiensi registrasi buku, serta modul analitik bulanan statistik peminjaman.",
    architectureDetails: "CodeIgniter 4 -> MySQL Relational Schema -> DataTables Server-Side Processing",
    keyAchievements: ["Real-time Book Search", "Barcode Scanner Support", "Automated Fine Calculation"],
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200&auto=format&fit=crop",
    techStack: ["CodeIgniter 4", "MySQL", "JavaScript", "Bootstrap 5", "DataTables"],
    featured: false,
    githubUrl: "https://github.com/brianaryansyah/library-management",
    demoUrl: "#",
    date: "2023"
  }
];

export const initialMessagesData: MessageItem[] = [
  {
    id: "msg-1",
    name: "Dimas Prasetyo",
    email: "dimas@techcorp.id",
    subject: "Tawaran Kolaborasi Projek Web & AI",
    message: "Halo Brian, saya tertarik dengan proyek SiCASA CataractScan buatanmu. Bisakah kita berdiskusi lebih lanjut mengenai integrasi webnya?",
    date: "2026-07-20T14:30:00Z",
    read: false
  },
  {
    id: "msg-2",
    name: "Siti Rahmawati",
    email: "siti.rahma@gmail.com",
    subject: "Pertanyaan seputar CodeIgniter 4 MVC",
    message: "Salam Brian, penjelasanmu tentang arsitektur MVC di CodeIgniter 4 sangat membantu! Apakah membuka sesi sharing seputar Machine Learning juga?",
    date: "2026-07-18T09:15:00Z",
    read: true
  }
];
