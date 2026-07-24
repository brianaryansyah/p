import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, Star, GitPullRequest, Eye, Trophy, Github, ArrowUpRight, Flame, Code2 } from 'lucide-react';

interface RepoCard {
  name: string;
  description: string;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
  url: string;
}

interface StatCard {
  label: string;
  value: string;
  icon: React.ElementType;
  color: string;
}

const repos: RepoCard[] = [
  {
    name: 'sicasa-cataractscan',
    description: 'AI-powered cataract detection system using YOLOv8 computer vision with Flask REST API and React frontend',
    language: 'Python',
    languageColor: 'bg-blue-400',
    stars: 12,
    forks: 5,
    url: 'https://github.com/brianaryansyah/sicasa-cataractscan'
  },
  {
    name: 'sipintar-app',
    description: 'Academic management ERP with CodeIgniter 4 MVC, multi-role RBAC authentication, and automated reporting',
    language: 'PHP',
    languageColor: 'bg-purple-400',
    stars: 8,
    forks: 3,
    url: 'https://github.com/brianaryansyah/sipintar-app'
  },
  {
    name: 'phishing-url-detection',
    description: 'Lexical URL threat classifier using 18+ feature extraction with Random Forest and XGBoost ensemble',
    language: 'Python',
    languageColor: 'bg-blue-400',
    stars: 15,
    forks: 7,
    url: 'https://github.com/brianaryansyah/phishing-url-detection'
  },
  {
    name: 'p',
    description: 'Professional portfolio website built with React, TypeScript, Vite, and Tailwind CSS with CMS dashboard',
    language: 'TypeScript',
    languageColor: 'bg-cyan-400',
    stars: 6,
    forks: 2,
    url: 'https://github.com/brianaryansyah/p'
  }
];

const stats: StatCard[] = [
  { label: 'Total Repositories', value: '12+', icon: GitBranch, color: 'text-emerald-400' },
  { label: 'Total Stars Earned', value: '41+', icon: Star, color: 'text-amber-400' },
  { label: 'Open Source Contributions', value: '28+', icon: GitPullRequest, color: 'text-cyan-400' },
  { label: 'Profile Views', value: '1.2K+', icon: Eye, color: 'text-purple-400' }
];

const contributionMonths = [
  { month: 'Jan', commits: 8 },
  { month: 'Feb', commits: 15 },
  { month: 'Mar', commits: 22 },
  { month: 'Apr', commits: 18 },
  { month: 'May', commits: 30 },
  { month: 'Jun', commits: 45 },
  { month: 'Jul', commits: 38 },
  { month: 'Aug', commits: 12 },
  { month: 'Sep', commits: 25 },
  { month: 'Oct', commits: 35 },
  { month: 'Nov', commits: 42 },
  { month: 'Dec', commits: 28 }
];

const maxCommits = Math.max(...contributionMonths.map(m => m.commits));

export const GitHubStats: React.FC = () => {
  return (
    <section id="github" className="py-28 relative z-10 bg-[#08080a] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3 flex items-center gap-2 font-bold">
              <Github className="w-4 h-4" />
              <span>GitHub Activity & Open Source</span>
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Kontribusi <span className="font-serif-italic font-normal text-zinc-300">Open Source</span>
            </h2>
            <p className="text-sm text-zinc-400 mt-3 max-w-xl leading-relaxed font-normal">
              Aktivitas pengembangan dan kontribusi proyek open source di GitHub. Setiap commit adalah langkah menuju solusi teknologi yang lebih baik.
            </p>
          </div>
          <a
            href="https://github.com/brianaryansyah"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.04] hover:bg-white/10 text-zinc-200 hover:text-white font-bold text-xs border border-white/10 transition-all backdrop-blur-md shrink-0"
          >
            <span>VISIT GITHUB</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-14">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="artfolio-card rounded-3xl p-6 flex flex-col items-center text-center group"
              >
                <div className={`p-3 rounded-2xl bg-white/5 border border-white/10 mb-4 ${stat.color} group-hover:scale-110 transition-transform`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono mb-1">{stat.value}</span>
                <span className="text-xs font-bold text-zinc-400">{stat.label}</span>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Contribution Graph */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 artfolio-card rounded-3xl p-7 sm:p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-emerald-400" />
                <h3 className="text-lg font-extrabold text-white">Commit Activity</h3>
              </div>
              <span className="text-xs font-mono text-zinc-400 font-bold">2024</span>
            </div>

            {/* Bar Chart */}
            <div className="flex items-end justify-between gap-2 h-44 mt-4">
              {contributionMonths.map((month, i) => (
                <motion.div
                  key={month.month}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex-1 flex flex-col items-center gap-2 origin-bottom"
                >
                  <div
                    className="w-full rounded-t-lg bg-gradient-to-t from-emerald-500/60 to-emerald-400/30 hover:from-emerald-400/80 hover:to-emerald-300/50 transition-colors group/bar relative"
                    style={{ height: `${(month.commits / maxCommits) * 100}%`, minHeight: '4px' }}
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded-lg bg-black/80 text-[10px] font-mono text-emerald-400 font-bold opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap">
                      {month.commits} commits
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 font-bold">{month.month}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
              <span className="font-bold">Total Contributions</span>
              <span className="text-emerald-400 font-bold">
                {contributionMonths.reduce((sum, m) => sum + m.commits, 0)} commits
              </span>
            </div>
          </motion.div>

          {/* Featured Repositories */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-4"
          >
            <div className="flex items-center gap-2 mb-2">
              <Code2 className="w-5 h-5 text-cyan-400" />
              <h3 className="text-lg font-extrabold text-white">Featured Repositories</h3>
            </div>

            {repos.map((repo, i) => (
              <motion.a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -3, scale: 1.01 }}
                className="artfolio-card rounded-3xl p-6 flex items-start gap-5 group block"
              >
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-emerald-400 group-hover:scale-110 transition-transform shrink-0">
                  <Github className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1.5">
                    <h4 className="text-base font-extrabold text-white group-hover:text-emerald-400 transition-colors truncate">
                      {repo.name}
                    </h4>
                    <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-emerald-400 transition-colors shrink-0" />
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed font-normal line-clamp-2 mb-3">
                    {repo.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs font-mono">
                    <span className="flex items-center gap-1.5 text-zinc-400 font-bold">
                      <span className={`w-2.5 h-2.5 rounded-full ${repo.languageColor}`} />
                      {repo.language}
                    </span>
                    <span className="flex items-center gap-1 text-amber-400 font-bold">
                      <Star className="w-3 h-3" />
                      {repo.stars}
                    </span>
                    <span className="flex items-center gap-1 text-zinc-400 font-bold">
                      <GitBranch className="w-3 h-3" />
                      {repo.forks}
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
