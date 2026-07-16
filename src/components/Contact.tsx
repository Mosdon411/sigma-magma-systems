import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('Energy & Technology');
  const [message, setMessage] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);

    // Simulate server request latency
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Clear input fields
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');

      // Auto clear success indicator
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 4000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sigma-blue dark:text-cyan-400 block mb-2">
            Connect With Our Engineers
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Initiate a System Integration
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-3">
            Whether inquiring about renewable micro-grids, applied R&D programs, or real estate tech ventures, we respond to corporate briefs within 24 hours.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Touchpoints info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800">
              <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-6">
                Abuja Office Touchpoints
              </h3>
              
              <div className="space-y-6">
                {/* Physical Location */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-sigma-blue/10 rounded-xl text-sigma-blue dark:text-cyan-400 shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Our Headquarters</h4>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-100 mt-1">
                      Katampe Main, FCT – Abuja, Nigeria
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">Corporate Headquarters & R&D Lab</p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-sigma-green/10 rounded-xl text-sigma-green shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Hotlines</h4>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-100 mt-1">
                      (+234) 8167657878
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">Operations Director, Monday – Saturday</p>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-sigma-blue/10 rounded-xl text-sigma-blue shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Channels</h4>
                    <a
                      href="mailto:sigmamagmasystems@gmail.com"
                      className="text-sm font-semibold text-sigma-blue dark:text-cyan-400 mt-1 hover:underline block"
                    >
                      sigmamagmasystems@gmail.com
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5">Corporate & Tender Proposals</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Corporate Registration Registry details */}
            <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-md border border-slate-800 relative overflow-hidden">
              <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 text-white/5 opacity-10 select-none pointer-events-none">
                <ShieldCheck className="h-44 w-44" />
              </div>
              <h3 className="font-display text-base font-bold text-white flex items-center gap-2 mb-3">
                <ShieldCheck className="h-5 w-5 text-emerald-400" />
                Licensed & Incorporated Entity
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Sigma Magma Systems is registered under the laws of the Federal Republic of Nigeria (CAC Registration Number: <strong>RC 1920630</strong>). Our systems engineering and architectural advisory teams adhere strictly to environmental, fire, and safety policies.
              </p>
            </div>
          </div>

          {/* Right Column: Submission Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 p-8 rounded-2xl shadow-lg relative">
              
              {submitSuccess && (
                <div className="absolute inset-0 bg-white/95 dark:bg-slate-900/95 rounded-2xl z-20 flex flex-col items-center justify-center text-center p-8 animate-in fade-in duration-300" id="success-notification">
                  <CheckCircle2 className="h-14 w-14 text-emerald-500 mb-4 animate-bounce" />
                  <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                    Transmission Dispatched!
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-sm">
                    Thank you. Your project inquiry has been queued into our operations queue. Our representative will contact you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="mt-6 px-5 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-semibold uppercase tracking-wider rounded-lg text-slate-700 dark:text-slate-300 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              )}

              <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-6">
                Inquiry Dispatch Terminal
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Dooaondo Moses"
                      className="w-full px-4 py-2.5 text-sm bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sigma-blue"
                      id="contact-form-name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. moses@sigmamagma.com"
                      className="w-full px-4 py-2.5 text-sm bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sigma-blue"
                      id="contact-form-email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Phone Number</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. (+234) 8167657878"
                      className="w-full px-4 py-2.5 text-sm bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sigma-blue"
                      id="contact-form-phone"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Inquiry Sector</label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-4 py-2.5 text-sm bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sigma-blue"
                      id="contact-form-category"
                    >
                      <option value="Energy & Technology">Energy & Technology</option>
                      <option value="R&D Labs">R&D Labs</option>
                      <option value="Real Estate Development">Real Estate Development</option>
                      <option value="Media Investment Auditing">Media Investment Auditing</option>
                      <option value="Training & Consultancy">Training & Consultancy</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Message Detail *</label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Provide a summary of your system challenges or procurement needs..."
                    className="w-full px-4 py-2.5 text-sm bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sigma-blue resize-y"
                    id="contact-form-message"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-5 rounded-lg text-sm font-semibold tracking-wider bg-sigma-blue hover:bg-blue-700 disabled:bg-blue-400 text-white shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                    id="contact-submit-btn"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Dispersing Message...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        DISPATCH PROPOSAL
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
