import React, { useState } from 'react';
import { 
  Check, 
  MoreHorizontal, 
  Search, 
  Bell, 
  ChevronDown, 
  PenTool, 
  FileText, 
  Plus, 
  Settings, 
  Sparkles,
  TrendingUp
} from 'lucide-react';
import { motion } from 'framer-motion';
import { LogoIcon } from './Logo';

interface ArticleRow {
  id: string;
  selected: boolean;
  author: {
    name: string;
    avatar?: string;
    initials?: string;
  };
  title: string;
  category: {
    label: string;
    type: 'saas' | 'tech' | 'growth' | 'seo';
  };
  status: 'Publié' | 'Optimisé' | 'En cours' | 'Planifié';
  seoScore: number;
  readTime: string;
  collaborators: {
    avatar?: string;
    initials?: string;
  }[];
}

const initialArticles: ArticleRow[] = [
  {
    id: '1',
    selected: true,
    author: {
      name: 'David Wilson',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80',
    },
    title: 'Comment structurer une newsletter B2B virale',
    category: { label: 'Growth', type: 'growth' },
    status: 'Publié',
    seoScore: 98,
    readTime: '4 min',
    collaborators: [
      { avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80' },
      { avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80' },
      { initials: 'BW' }
    ]
  },
  {
    id: '2',
    selected: true,
    author: {
      name: 'Jessica Hayes',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80',
    },
    title: '10 accroches psychologiques pour doubler vos clics',
    category: { label: 'SaaS', type: 'saas' },
    status: 'Publié',
    seoScore: 96,
    readTime: '6 min',
    collaborators: [
      { initials: 'AS' },
      { initials: 'MB' },
      { avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80' }
    ]
  },
  {
    id: '3',
    selected: false,
    author: {
      name: 'Constanza Perez',
      initials: 'CP',
    },
    title: 'Guide complet du référencement programmatique',
    category: { label: 'SEO', type: 'seo' },
    status: 'Optimisé',
    seoScore: 94,
    readTime: '8 min',
    collaborators: [
      { initials: 'AS' },
      { initials: 'MB' },
      { avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80' }
    ]
  },
  {
    id: '4',
    selected: false,
    author: {
      name: 'Meera Desai',
      initials: 'MD',
    },
    title: 'L’impact de l’IA générative sur les blogs d’experts',
    category: { label: 'Tech', type: 'tech' },
    status: 'Optimisé',
    seoScore: 92,
    readTime: '5 min',
    collaborators: [
      { avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80' }
    ]
  },
  {
    id: '5',
    selected: false,
    author: {
      name: 'Benjamin Weber',
      initials: 'BW',
    },
    title: 'Copywriting vs Journalisme : la nouvelle donne',
    category: { label: 'Tech', type: 'tech' },
    status: 'En cours',
    seoScore: 89,
    readTime: '3 min',
    collaborators: [
      { avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80' },
      { avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&q=80' }
    ]
  },
  {
    id: '6',
    selected: true,
    author: {
      name: 'Jacob Jones',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
    },
    title: 'La méthode AIDA appliquée aux articles de fond',
    category: { label: 'Growth', type: 'growth' },
    status: 'Publié',
    seoScore: 95,
    readTime: '7 min',
    collaborators: [
      { avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80' },
      { avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80' }
    ]
  },
  {
    id: '7',
    selected: false,
    author: {
      name: 'Maria Rodrigues',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80',
    },
    title: 'Storytelling d’entreprise : captiver en 3 actes',
    category: { label: 'SaaS', type: 'saas' },
    status: 'Planifié',
    seoScore: 91,
    readTime: '5 min',
    collaborators: [
      { avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80' },
      { initials: 'AS' }
    ]
  }
];

export const HeroMockup: React.FC = () => {
  const [articles, setArticles] = useState<ArticleRow[]>(initialArticles);

  const toggleSelect = (id: string) => {
    setArticles(prev => prev.map(a => a.id === id ? { ...a, selected: !a.selected } : a));
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.35 }}
      className="mt-14 max-w-6xl mx-auto rounded-[32px] bg-white border border-remoteBorder shadow-2xl shadow-zinc-900/5 p-3 sm:p-5 text-left overflow-hidden font-sans"
    >
      {/* 1. Header Navigation de l'application (fidèle à la capture Remote) */}
      <div className="flex items-center justify-between border-b border-remoteBorder/80 pb-4 mb-5 px-2">
        {/* Logo CopyBoost + Icones de navigation */}
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="w-8 h-8 rounded-xl bg-remoteDark flex items-center justify-center text-white shadow-xs">
            <LogoIcon className="w-4 h-4 text-white" />
          </div>
          <div className="hidden sm:flex items-center gap-4 text-remoteMuted">
            <button className="p-1 hover:text-remoteDark transition-colors">
              <FileText className="w-4 h-4 text-remoteDark" />
            </button>
            <button className="p-1 hover:text-remoteDark transition-colors">
              <PenTool className="w-4 h-4" />
            </button>
            <button className="p-1 hover:text-remoteDark transition-colors">
              <TrendingUp className="w-4 h-4" />
            </button>
            <button className="p-1 hover:text-remoteDark transition-colors">
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Fil d'ariane central au style Remote ("CopyBoost / Tous les articles") */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-remoteSurface text-xs font-medium text-remoteDark">
          <span className="w-2 h-2 rounded-sm bg-limeAccent border border-zinc-700/20"></span>
          <span>CopyBoost</span>
          <span className="text-remoteSubtle">/</span>
          <span className="font-semibold flex items-center gap-1">
            Tous les articles
            <ChevronDown className="w-3.5 h-3.5 text-remoteMuted" />
          </span>
        </div>

        {/* Outils & Profil utilisateur à droite */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-1 bg-limeAccent/80 text-remoteDark px-2 py-1 rounded-full text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=60&q=80" 
              alt="Jessica" 
              className="w-5 h-5 rounded-full object-cover"
            />
          </div>
          <button className="p-1.5 text-remoteMuted hover:text-remoteDark rounded-full hover:bg-remoteSurface transition-colors">
            <Search className="w-4 h-4" />
          </button>
          <button className="p-1.5 text-remoteMuted hover:text-remoteDark rounded-full hover:bg-remoteSurface transition-colors">
            <Bell className="w-4 h-4" />
          </button>
          <button className="p-1.5 text-remoteMuted hover:text-remoteDark rounded-full hover:bg-remoteSurface transition-colors">
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 2. Titre de page et filtres de statut (Good morning, Jessica!) */}
      <div className="px-3 sm:px-4 mb-6">
        <div className="flex items-center gap-2.5 mb-3">
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80" 
            alt="Jessica" 
            className="w-7 h-7 rounded-full object-cover ring-2 ring-limeAccent"
          />
          <h3 className="text-xl sm:text-2xl font-bold text-remoteDark tracking-tight">
            Bonjour, Jessica !
          </h3>
        </div>

        {/* Sélecteurs de filtre (Team All / Status Publié) */}
        <div className="flex items-center gap-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-remoteSurface border border-remoteBorder text-xs text-remoteMuted">
            <span>Catégorie</span>
            <span className="font-bold text-remoteDark">Toutes</span>
            <ChevronDown className="w-3 h-3 text-remoteMuted ml-0.5" />
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-remoteSurface border border-remoteBorder text-xs text-remoteMuted">
            <span>Statut</span>
            <span className="font-bold text-remoteDark">En ligne</span>
            <ChevronDown className="w-3 h-3 text-remoteMuted ml-0.5" />
          </div>
        </div>
      </div>

      {/* 3. Table de données granularisée CopyBoost (tableau exact à la capture Remote) */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[760px]">
          <thead>
            <tr className="text-[11px] font-semibold text-remoteMuted uppercase tracking-wider border-b border-remoteBorder/80">
              <th className="py-2.5 px-3 w-8">
                <span className="sr-only">Sélectionner</span>
              </th>
              <th className="py-2.5 px-3">RÉDACTEUR</th>
              <th className="py-2.5 px-3">ARTICLE DE BLOG</th>
              <th className="py-2.5 px-3">STATUT</th>
              <th className="py-2.5 px-3">SCORE SEO</th>
              <th className="py-2.5 px-3">COLLABORATEURS</th>
              <th className="py-2.5 px-3 w-8"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-remoteBorder/40">
            {articles.map((item) => (
              <tr 
                key={item.id}
                className={`transition-colors group ${
                  item.selected ? 'bg-remoteSurface/45' : 'hover:bg-remoteBg/60'
                }`}
              >
                {/* Case à cocher personnalisée */}
                <td className="py-3 px-3">
                  <button 
                    onClick={() => toggleSelect(item.id)}
                    className={`w-4 h-4 rounded-md flex items-center justify-center transition-all ${
                      item.selected 
                        ? 'bg-remoteDark text-white shadow-xs' 
                        : 'border border-zinc-300 hover:border-zinc-400 bg-white'
                    }`}
                  >
                    {item.selected && <Check className="w-3 h-3 stroke-[3]" />}
                  </button>
                </td>

                {/* Rédacteur avec Avatar ou Initiales */}
                <td className="py-3 px-3">
                  <div className="flex items-center gap-2.5">
                    {item.author.avatar ? (
                      <img 
                        src={item.author.avatar} 
                        alt={item.author.name}
                        className="w-7 h-7 rounded-full object-cover ring-1 ring-zinc-200" 
                      />
                    ) : (
                      <div className="w-7 h-7 rounded-full bg-zinc-200 text-zinc-700 font-bold text-[10px] flex items-center justify-center">
                        {item.author.initials}
                      </div>
                    )}
                    <span className="font-semibold text-remoteDark whitespace-nowrap">
                      {item.author.name}
                    </span>
                  </div>
                </td>

                {/* Titre de l'article + Badge catégorie */}
                <td className="py-3 px-3">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-remoteDark line-clamp-1 max-w-[260px]">
                      {item.title}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md shrink-0 ${
                      item.category.type === 'growth' 
                        ? 'bg-limeAccent text-remoteDark' 
                        : item.category.type === 'tech'
                        ? 'bg-limeAccent/90 text-remoteDark'
                        : 'bg-remoteDark text-white'
                    }`}>
                      {item.category.label}
                    </span>
                  </div>
                </td>

                {/* Statut (Pilule de statut inspirée de "Pending") */}
                <td className="py-3 px-3 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-remoteSurface text-remoteMuted border border-remoteBorder/60">
                    {item.status}
                  </span>
                </td>

                {/* Score SEO (analogue à la colonne Amount $200,000) */}
                <td className="py-3 px-3 whitespace-nowrap">
                  <span className="font-bold text-remoteDark text-sm">
                    {item.seoScore} / 100
                  </span>
                </td>

                {/* Avatars superposés (analogue à Team) */}
                <td className="py-3 px-3">
                  <div className="flex -space-x-1.5 items-center">
                    {item.collaborators.map((collab, i) => (
                      collab.avatar ? (
                        <img 
                          key={i}
                          src={collab.avatar}
                          alt="collaborateur"
                          className="w-6 h-6 rounded-full object-cover ring-2 ring-white"
                        />
                      ) : (
                        <div 
                          key={i}
                          className="w-6 h-6 rounded-full bg-zinc-200 text-zinc-700 text-[9px] font-bold flex items-center justify-center ring-2 ring-white"
                        >
                          {collab.initials}
                        </div>
                      )
                    ))}
                  </div>
                </td>

                {/* Menu d'actions trois points */}
                <td className="py-3 px-3 text-right">
                  <button className="text-zinc-400 hover:text-remoteDark transition-colors p-1">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 4. Barre inférieure avec roue dentée de paramètres */}
      <div className="pt-3 px-3 border-t border-remoteBorder/60 flex items-center justify-between text-xs text-remoteSubtle">
        <button className="p-1 text-remoteMuted hover:text-remoteDark transition-colors">
          <Settings className="w-4 h-4" />
        </button>
        <span className="text-[11px]">7 articles sur 15 synchronisés avec Ghost & WordPress</span>
      </div>

    </motion.div>
  );
};
