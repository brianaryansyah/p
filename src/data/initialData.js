export const initialProfileData = {
  name: "Brian Aryansyah Pamungkas",
  tagline: "Building High-Performance Web Apps & Computer Vision Models",
  roles: ["Fullstack Web Developer", "Machine Learning Enthusiast", "Informatics Student"],
  university: "Universitas Dian Nuswantoro (UDINUS)",
  major: "Teknik Informatika",
  semester: 4,
  location: "Semarang, Indonesia",
  bio: "Mahasiswa Teknik Informatika UDINUS yang berfokus pada pengembangan aplikasi web modern (MVC Architecture, React, CodeIgniter 4) serta implementasi Machine Learning khususnya Computer Vision berbasis YOLO. Menyukai arsitektur kode yang bersih, scalable, dan UI/UX yang elegan.",
  email: "brianaryansyahp@gmail.com",
  github: "https://github.com/brianaryansyah",
  linkedin: "https://linkedin.com/in/brianaryansyah",
  instagram: "https://instagram.com/brianaryansyah",
  status: "Terbuka untuk Projek & Kolaborasi"
};

export const initialSkillsData = [
  {
    id: "sk-1",
    name: "React.js & Vite",
    category: "Frontend",
    icon: "Code2",
    level: "Advanced",
    description: "Single Page Application, Modern State Management, Hooks & Custom Components.",
    featured: true,
    size: "col-span-12 md:col-span-7 lg:col-span-8",
    color: "from-cyan-500/20 to-blue-600/10",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
  },
  {
    id: "sk-2",
    name: "YOLOv8 & Computer Vision",
    category: "Machine Learning",
    icon: "BrainCircuit",
    level: "Intermediate / Enthusiast",
    description: "Object detection, dataset annotation, model training, & deployment untuk klasifikasi gambar medis.",
    featured: true,
    size: "col-span-12 md:col-span-5 lg:col-span-4",
    color: "from-emerald-500/20 to-teal-600/10",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
  },
  {
    id: "sk-3",
    name: "CodeIgniter 4 (MVC)",
    category: "Backend",
    icon: "Server",
    level: "Advanced",
    description: "RESTful API development, Security middleware, Shield Auth, Model-View-Controller pattern.",
    featured: true,
    size: "col-span-12 md:col-span-4 lg:col-span-4",
    color: "from-orange-500/20 to-amber-600/10",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20"
  },
  {
    id: "sk-4",
    name: "Python Ecosystem",
    category: "Data Science & AI",
    icon: "Terminal",
    level: "Advanced",
    description: "OpenCV, PyTorch, NumPy, Pandas, Flask integration untuk pipeline Machine Learning.",
    featured: true,
    size: "col-span-12 md:col-span-4 lg:col-span-4",
    color: "from-blue-500/20 to-indigo-600/10",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20"
  },
  {
    id: "sk-5",
    name: "MySQL & Relational DB",
    category: "Database",
    icon: "Database",
    level: "Advanced",
    description: "Complex queries, Relational Schema Design, Indexing, and Migrations.",
    featured: true,
    size: "col-span-12 md:col-span-4 lg:col-span-4",
    color: "from-purple-500/20 to-violet-600/10",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20"
  },
  {
    id: "sk-6",
    name: "Linux & System Admin",
    category: "DevOps",
    icon: "Cpu",
    level: "Intermediate",
    description: "Bash scripting, Apache/Nginx configuration, service management, and SSH setup.",
    featured: false,
    size: "col-span-12 md:col-span-6 lg:col-span-6",
    color: "from-slate-500/20 to-zinc-600/10",
    badgeColor: "bg-slate-500/10 text-slate-400 border-slate-500/20"
  },
  {
    id: "sk-7",
    name: "Tailwind CSS & UI Design",
    category: "Frontend",
    icon: "Palette",
    level: "Expert",
    description: "Custom design systems, responsive layouts, micro-animations, glassmorphism UI.",
    featured: false,
    size: "col-span-12 md:col-span-6 lg:col-span-6",
    color: "from-sky-500/20 to-indigo-600/10",
    badgeColor: "bg-sky-500/10 text-sky-400 border-sky-500/20"
  }
];

export const initialProjectsData = [
  {
    id: "proj-1",
    title: "SiCASA - CataractScan AI",
    category: "Machine Learning & Web",
    description: "Aplikasi skrining dan deteksi katarak otomatis berbasis AI menggunakan model Computer Vision YOLOv8 dan antarmuka web interaktif berbasis Flask/Python. Membantu tenaga medis melakukan deteksi dini.",
    longDescription: "SiCASA (CataractScan AI) dirancang untuk membantu analisis citra mata pasien. Menggunakan arsitektur YOLOv8 yang di-train menggunakan dataset citra medis terkurasi, mampu mendeteksi tingkat keparahan katarak dengan akurasi tinggi dan visualisasi bounding box otomatis.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
    techStack: ["Python", "YOLOv8", "OpenCV", "Flask", "Tailwind CSS", "JavaScript"],
    featured: true,
    githubUrl: "https://github.com/brianaryansyah/sicasa-cataractscan",
    demoUrl: "#",
    date: "2024"
  },
  {
    id: "proj-2",
    title: "SiPINTAR (Sistem Informasi Pendidikan)",
    category: "Fullstack Web",
    description: "Sistem manajemen akademis dan administrasi sekolah terpadu dengan arsitektur MVC CodeIgniter 4, otentikasi peran (Multi-role Auth), dan laporan otomatis.",
    longDescription: "Sistem web komprehensif untuk pengelolaan data nilai siswa, kehadiran, mata pelajaran, serta portal guru dan murid. Menggunakan CodeIgniter 4 backend dengan MySQL relational database.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1200&auto=format&fit=crop",
    techStack: ["CodeIgniter 4", "PHP 8", "MySQL", "Bootstrap 5", "Chart.js"],
    featured: true,
    githubUrl: "https://github.com/brianaryansyah/sipintar-app",
    demoUrl: "#",
    date: "2024"
  },
  {
    id: "proj-3",
    title: "Phishing URL Guard Classifier",
    category: "Machine Learning",
    description: "Model klasifikasi keamanan link web untuk mendeteksi ancaman phishing secara otomatis menggunakan ekstraksi fitur lexical URL dan algoritma Machine Learning.",
    longDescription: "Proyek deteksi keamanan cyber yang menganalisis lebih dari 15 fitur lexical dari URL (seperti keberadaan IP, simbol khusus, umur domain, dan pengalihan HTTP) untuk mengklasifikasikan link aman vs berbahaya.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
    techStack: ["Python", "Scikit-Learn", "Pandas", "Streamlit", "NLTK"],
    featured: true,
    githubUrl: "https://github.com/brianaryansyah/phishing-url-detection",
    demoUrl: "#",
    date: "2023"
  },
  {
    id: "proj-4",
    title: "Smart Library Management System",
    category: "Fullstack Web",
    description: "Aplikasi perpustakaan digital untuk transaksi peminjaman buku, denda otomatis, pencarian buku real-time, dan ekspor laporan PDF/Excel.",
    longDescription: "Platform perpustakaan modern dengan fitur katalog interaktif, QR code barcode scanner untuk peminjaman, serta statistik peminjaman populer bulanan.",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200&auto=format&fit=crop",
    techStack: ["CodeIgniter 4", "MySQL", "jQuery", "DataTables", "AdminLTE"],
    featured: false,
    githubUrl: "https://github.com/brianaryansyah/library-management",
    demoUrl: "#",
    date: "2023"
  }
];

export const initialMessagesData = [
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
    message: "Salam Brian, tulisanmu tentang arsitektur MVC di CodeIgniter 4 sangat membantu! Apakah membuka sesi sharing seputar Machine Learning juga?",
    date: "2026-07-18T09:15:00Z",
    read: true
  }
];
