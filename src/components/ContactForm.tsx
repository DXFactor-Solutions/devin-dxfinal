import React, { useState } from 'react';
import { ArrowRight, Sparkles, Zap, Target, TrendingUp, Shield, Clock } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyEmail: '',
    message: '',
    interestedIn: 'Concierge (Free)',
    agreeToTerms: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }, 2000);
  };

  const agentOptions = [
    'Concierge (Free)',
    'Click2Save',
    'Member Concierge',
    'Not Sure / Recommend One'
  ];

  return (
    <section id="contact" className="relative py-4 sm:py-6 lg:py-8 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="relative mx-auto px-4 sm:px-6 lg:px-16 py-4 sm:py-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-10 items-center">
          
          {/* Left Side - Content */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 bg-green-100 text-green-800 px-2 sm:px-2.5 py-0.5 rounded-full text-xs font-medium mb-2 sm:mb-3">
              <Sparkles className="w-2.5 h-2.5" />
              <span>Proven Outcomes</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">
              Ready to Launch?
            </h1>
            
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Start with a free AI Agent—or tell us what you're looking for.
            </p>
            
            <p className="text-sm text-gray-600 mb-4 sm:mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Deploy Concierge Agent instantly, or request a custom solution like Click2Save. We'll match you to the right agent.
            </p>
            
            {/* Stats - Horizontal */}
            <div className="flex flex-wrap gap-6 sm:gap-10 items-center justify-center lg:justify-start">
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-bold text-green-600">$2B+</div>
                <div className="text-xs text-gray-600">Outcomes Delivered</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-bold text-green-600">120%</div>
                <div className="text-xs text-gray-600">Net Revenue Retention</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-bold text-green-600">100+</div>
                <div className="text-xs text-gray-600">Happy Operators</div>
              </div>
            </div>
            
            <div className="mt-4 sm:mt-6 flex items-center gap-2 text-xs text-gray-500 justify-center lg:justify-start">
              <div className="flex items-center gap-1">
                <span className="text-green-600">✓</span>
                <span>Trusted by Fitness SF, Crunch, Wisconsin Athletic Club, and 100s more</span>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 rounded-2xl blur-xl opacity-30 scale-95"></div>
              
              <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg p-6 border border-green-100">
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Agent Selection Dropdown */}
                  <div>
                    <label htmlFor="interestedIn" className="block text-sm font-medium text-gray-700 mb-2">
                      Which agent are you interested in?
                    </label>
                    <select
                      id="interestedIn"
                      name="interestedIn"
                      value={formData.interestedIn}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-green-500 transition-all duration-300 outline-none text-sm text-black appearance-none cursor-pointer"
                      style={{ color: 'black' }}
                    >
                      {agentOptions.map((option) => (
                        <option key={option} value={option} className="text-black bg-white">
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Full Name */}
                  <div>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-green-500 transition-all duration-300 outline-none text-sm"
                      placeholder="Full Name"
                    />
                  </div>

                  {/* Company Email */}
                  <div>
                    <input
                      type="email"
                      name="companyEmail"
                      value={formData.companyEmail}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-green-500 transition-all duration-300 outline-none text-sm"
                      placeholder="Company Email"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-green-500 transition-all duration-300 outline-none resize-none text-sm"
                      placeholder="Tell us more about your project or goals"
                    />
                  </div>

                  {/* Terms and Submit */}
                  <div className="space-y-4">
                    <label className="flex items-start gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleChange}
                        className="mt-0.5 w-4 h-4 text-green-600 bg-gray-50 border-gray-300 rounded focus:ring-green-500 focus:ring-2"
                      />
                      <span className="text-xs text-gray-600">
                        I agree to the{' '}
                        <a href="#" className="text-green-600 hover:underline">Terms and Privacy Policy</a>
                      </span>
                    </label>

                    <button
                      type="submit"
                      disabled={!formData.agreeToTerms || isSubmitting}
                      className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-3 px-4 rounded-lg font-medium text-sm hover:from-green-700 hover:to-green-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98] shadow-md"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          Get Started
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      )}
                    </button>
                  </div>

                  {/* Trust indicators */}
                  <div className="flex items-center justify-center gap-4 pt-2">
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Shield className="w-3 h-3" />
                      <span>SSL Secured</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock className="w-3 h-3" />
                      <span>24hr Response</span>
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="text-xs text-gray-500">We'll reach out in 24 hours. No spam.</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm; 