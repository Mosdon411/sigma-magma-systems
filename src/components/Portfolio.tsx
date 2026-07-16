import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, Calendar, Tag, User, MapPin, PlusCircle, CheckCircle2, X } from 'lucide-react';
import { Project } from '../types';
import { INITIAL_PROJECTS } from '../data';

export default function Portfolio() {
  const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // New project creation state
  const [showAddForm, setShowAddForm] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<'energy-tech' | 'rd' | 'real-estate' | 'creative'>('energy-tech');
  const [newDesc, setNewDesc] = useState('');
  const [newDetails, setNewDetails] = useState('');
  const [newClient, setNewClient] = useState('');
  const [newLoc, setNewLoc] = useState('');
  const [newTags, setNewTags] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);

  // Filter and Search Logic
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'all' || project.category === selectedCategory;
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [projects, selectedCategory, searchQuery]);

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'energy-tech', label: 'Energy & Tech' },
    { value: 'rd', label: 'R&D Labs' },
    { value: 'real-estate', label: 'Real Estate' },
    { value: 'creative', label: 'Creative Programs' },
  ];

  // Handler for adding a custom project
  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newDesc || !newDetails) return;

    const tagsArray = newTags
      ? newTags.split(',').map((t) => t.trim()).filter((t) => t.length > 0)
      : ['Custom Solution', 'Sigma Magma'];

    const newProjItem: Project = {
      id: `proj-${Date.now()}`,
      title: newTitle,
      category: newCategory,
      description: newDesc,
      fullDetails: newDetails,
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800', // standard high tech mesh image
      client: newClient || 'Sigma Magma Partner',
      location: newLoc || 'Abuja, Nigeria',
      date: 'Just Now',
      tags: tagsArray,
    };

    setProjects([newProjItem, ...projects]);
    setFormSuccess(true);

    // Reset fields
    setNewTitle('');
    setNewDesc('');
    setNewDetails('');
    setNewClient('');
    setNewLoc('');
    setNewTags('');

    setTimeout(() => {
      setFormSuccess(false);
      setShowAddForm(false);
    }, 2000);
  };

  return (
    <section id="portfolio" className="py-24 bg-slate-50 dark:bg-slate-900/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sigma-blue dark:text-cyan-400 block mb-2">
              Our Record of Impact
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              Dynamic Portfolio Showcase
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-3 max-w-md">
              Filter by system category, query specific project tags, or test the live environment by adding a custom development record below.
            </p>
          </div>

          {/* Quick Add Simulation Action */}
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 shadow transition-all whitespace-nowrap cursor-pointer self-start md:self-end"
            id="portfolio-add-simulation-btn"
          >
            <PlusCircle className="h-4 w-4" />
            {showAddForm ? 'Cancel Sandbox' : 'Simulate Adding Project'}
          </button>
        </div>

        {/* Project Pitch Sandbox Form */}
        {showAddForm && (
          <div className="mb-12 bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 border border-slate-100 dark:border-slate-800 shadow-md animate-in fade-in duration-300">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                  Local Sandbox Simulator
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Add a dynamic project. It will appear instantly at the head of the portfolio list using react state.
                </p>
              </div>
              <button
                onClick={() => setShowAddForm(false)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                id="close-add-form-btn"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {formSuccess ? (
              <div className="flex flex-col items-center justify-center py-8 text-center bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 rounded-xl">
                <CheckCircle2 className="h-12 w-12 text-emerald-500 mb-3 animate-bounce" />
                <h4 className="font-display font-bold text-base">Project Compiled & Added!</h4>
                <p className="text-xs mt-1">Check the list below to explore your custom portfolio card.</p>
              </div>
            ) : (
              <form onSubmit={handleAddProject} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Project Title *</label>
                    <input
                      type="text"
                      required
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                      placeholder="e.g. Katampe Hydro power Station"
                      className="w-full px-4 py-2 text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sigma-blue"
                      id="new-project-title"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Category *</label>
                    <select
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value as any)}
                      className="w-full px-4 py-2 text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sigma-blue"
                      id="new-project-category"
                    >
                      <option value="energy-tech">Energy & Tech</option>
                      <option value="rd">R&D Labs</option>
                      <option value="real-estate">Real Estate</option>
                      <option value="creative">Creative Programs</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Client Org</label>
                    <input
                      type="text"
                      value={newClient}
                      onChange={(e) => setNewClient(e.target.value)}
                      placeholder="e.g. Federal Ministry of Power"
                      className="w-full px-4 py-2 text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sigma-blue"
                      id="new-project-client"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Location</label>
                    <input
                      type="text"
                      value={newLoc}
                      onChange={(e) => setNewLoc(e.target.value)}
                      placeholder="e.g. Katampe Main, Abuja"
                      className="w-full px-4 py-2 text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sigma-blue"
                      id="new-project-loc"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Tags (Comma separated)</label>
                    <input
                      type="text"
                      value={newTags}
                      onChange={(e) => setNewTags(e.target.value)}
                      placeholder="e.g. Microgrid, Automation, Consulting"
                      className="w-full px-4 py-2 text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sigma-blue"
                      id="new-project-tags"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Teaser Description *</label>
                    <input
                      type="text"
                      required
                      value={newDesc}
                      onChange={(e) => setNewDesc(e.target.value)}
                      placeholder="A short tagline for the portfolio card"
                      className="w-full px-4 py-2 text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sigma-blue"
                      id="new-project-desc"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Full Implementation Details *</label>
                    <textarea
                      required
                      rows={2}
                      value={newDetails}
                      onChange={(e) => setNewDetails(e.target.value)}
                      placeholder="Comprehensive details showing methodologies and project impact"
                      className="w-full px-4 py-2 text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sigma-blue resize-y"
                      id="new-project-details"
                    />
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-sigma-blue hover:bg-blue-700 text-white font-semibold rounded-lg text-sm transition-colors cursor-pointer"
                    id="submit-new-project-btn"
                  >
                    Commit to Portfolio
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* Filters and Search Bar Row */}
        <div className="mb-10 flex flex-col lg:flex-row gap-5 justify-between items-center">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full lg:w-auto" id="portfolio-categories-container">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-lg transition-all duration-300 ${
                  selectedCategory === cat.value
                    ? 'bg-sigma-blue text-white shadow-md'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
                id={`cat-tab-${cat.value}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:max-w-sm">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search projects, client, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm border border-slate-100 dark:border-slate-800 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-sigma-blue"
              id="portfolio-search-input"
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
            <SlidersHorizontal className="h-10 w-10 text-slate-300 dark:text-slate-600 mx-auto mb-4" />
            <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white">No Projects Found</h3>
            <p className="text-sm text-slate-500 mt-1">Try relaxing your search query or choosing another category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 dark:border-slate-800/80 transition-all duration-300 flex flex-col h-full cursor-pointer hover:-translate-y-1"
                id={`portfolio-item-${project.id}`}
              >
                {/* Visual Cover */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-950">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10 duration-300" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Category Pill */}
                  <span className="absolute bottom-4 left-4 z-20 text-[9px] font-bold tracking-wider uppercase bg-slate-950/80 backdrop-blur-md text-white px-2.5 py-1 rounded-md border border-white/10">
                    {project.category.replace('-', ' ')}
                  </span>
                </div>

                {/* Body Content */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <span className="text-[10px] font-semibold text-slate-400 font-mono block mb-1">
                      {project.date}
                    </span>
                    <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white group-hover:text-sigma-blue dark:group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Metadata & Tag row */}
                  <div className="mt-5 pt-4 border-t border-slate-50 dark:border-slate-800/60 flex flex-wrap gap-1">
                    {project.tags.slice(0, 2).map((tag, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                      >
                        <Tag className="h-2.5 w-2.5" />
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 2 && (
                      <span className="text-[10px] text-slate-400 self-center ml-1">
                        +{project.tags.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Detailed Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200" id="portfolio-modal">
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-100 dark:border-slate-800 animate-in zoom-in-95 duration-200">
              {/* Header Visual */}
              <div className="relative h-60 bg-slate-950">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-slate-950/60 hover:bg-slate-900 text-white rounded-full border border-white/10 transition-colors focus:outline-none"
                  aria-label="Close modal"
                  id="close-modal-btn"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Floating Category Tag */}
                <span className="absolute bottom-4 left-6 text-xs font-bold tracking-widest text-cyan-400 uppercase">
                  {selectedProject.category.replace('-', ' ')}
                </span>
              </div>

              {/* Modal Body */}
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-slate-900 dark:text-white leading-snug">
                    {selectedProject.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-xs text-slate-500 dark:text-slate-400 mt-3 font-medium">
                    {selectedProject.client && (
                      <span className="flex items-center gap-1">
                        <User className="h-3.5 w-3.5 text-sigma-blue dark:text-cyan-400" />
                        Client: <strong className="text-slate-700 dark:text-slate-200">{selectedProject.client}</strong>
                      </span>
                    )}
                    {selectedProject.location && (
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5 text-sigma-blue dark:text-cyan-400" />
                        Location: <strong className="text-slate-700 dark:text-slate-200">{selectedProject.location}</strong>
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-sigma-blue dark:text-cyan-400" />
                      Completed: <strong className="text-slate-700 dark:text-slate-200">{selectedProject.date}</strong>
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Project Background & Implementation
                  </h4>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 whitespace-pre-line">
                    {selectedProject.fullDetails}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    Involved Disciplines & Key Terms
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 text-[11px] font-semibold tracking-wide px-3 py-1 bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-800/60 text-slate-600 dark:text-slate-300 rounded-md"
                      >
                        <Tag className="h-2.5 w-2.5 text-sigma-blue dark:text-cyan-400" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold rounded-lg text-sm transition-colors cursor-pointer"
                    id="modal-footer-close-btn"
                  >
                    Close Showcase
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
