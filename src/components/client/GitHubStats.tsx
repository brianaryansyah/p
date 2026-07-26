import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GitBranch, Star, GitPullRequest, Eye, Trophy, Github, ArrowUpRight, Flame, Code2, Loader2 } from 'lucide-react';

interface RepoCard {
  name: string;
  description: string;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
  url: string;
}

interface GitHubUser {
  public_repos: number;
  followers: number;
}

const LANG_COLORS: Record<string, string> = {
  JavaScript: 'bg-yellow-400',
  TypeScript: 'bg-cyan-400',
  Python: 'bg-blue-400',
  PHP: 'bg-purple-400',
  Java: 'bg-red-400',
  HTML: 'bg-orange-400',
  CSS: 'bg-sky-400',
  'Jupyter Notebook': 'bg-orange-300',
  Shell: 'bg-green-400',
};

const GITHUB_USERNAME = 'brianaryansyah';

export const GitHubStats: React.FC = () => {
  const [repos, setRepos] = useState<RepoCard[]>([]);
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=stars&per_page=100`)
        ]);

        if (!userRes.ok || !reposRes.ok) throw new Error('GitHub API error');

        const userData = await userRes.json();
        const reposData = await reposRes.json();

        setUser(userData);

        const sortedRepos = reposData
          .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
          .slice(0, 5)
          .map((repo: any) => ({
            name: repo.name,
            description: repo.description || 'No description available',
            language: repo.language || 'Unknown',
            languageColor: LANG_COLORS[repo.language] || 'bg-zinc-400',
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            url: repo.html_url
          }));

        setRepos(sortedRepos);
      } catch (err) {
        console.error('Failed to fetch GitHub data:', err);
        setError(true);
        setRepos([
          {
            name: 'sicasa-cataractscan',
            description: 'AI-powered cataract detection system using YOLOv8 computer vision with Flask REST API and React frontend',
            language: 'Python',
            languageColor: 'bg-blue-400',
            stars: 0,
            forks: 0,
            url: `https://github.com/${GITHUB_USERNAME}/sicasa-cataractscan`
          },
          {
            name: 'sipintar-app',
            description: 'Academic management ERP with CodeIgniter 4 MVC, multi-role RBAC authentication, and automated reporting',
            language: 'PHP',
            languageColor: 'bg-purple-400',
            stars: 0,
            forks: 0,
            url: `https://github.com/${GITHUB_USERNAME}/sipintar-app`
          },
          {
            name: 'phishing-url-detection',
            description: 'Lexical URL threat classifier using 18+ feature extraction with Random Forest and XGBoost ensemble',
            language: 'Python',
            languageColor: 'bg-blue-400',
            stars: 0,
            forks: 0,
            url: `https://github.com/${GITHUB_USERNAME}/phishing-url-detection`
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  const totalStars = repos.reduce((sum, r) => sum + r.stars, 0);
  const totalForks = repos.reduce((sum, r) => sum + r.forks, 0);

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
              {error ? 'Menampilkan data statis karena API tidak tersedia.' : 'Data diambil secara real-time dari GitHub API.'}
            </p>
          </div>
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.04] hover:bg-white/10 text-zinc-200 hover:text-white font-bold text-xs border border-white/10 transition-all backdrop-blur-md shrink-0"
          >
            <span>VISIT GITHUB</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-14">
          {[
            { label: 'Public Repositories', value: user ? `${user.public_repos}+` : '—', icon: GitBranch, color: 'text-emerald-400' },
            { label: 'Total Stars Earned', value: loading ? '—' : `${totalStars}+`, icon: Star, color: 'text-amber-400' },
            { label: 'GitHub Followers', value: user ? `${user.followers}+` : '—', icon: Eye, color: 'text-purple-400' }
          ].map((stat, i) => {
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
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono mb-1">
                  {loading ? <Loader2 className="w-6 h-6 animate-spin inline" /> : stat.value}
                </span>
                <span className="text-xs font-bold text-zinc-400">{stat.label}</span>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-8">
          {/* Featured Repositories */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2 mb-2">
              <Code2 className="w-5 h-5 text-cyan-400" />
              <h3 className="text-lg font-extrabold text-white">
                {loading ? 'Loading repositories...' : 'Featured Repositories'}
              </h3>
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
