import React, { useState } from 'react';
import { ArrowRight, Sparkles, Zap, Target, TrendingUp } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyEmail: '',
    message: '',
    interestedIn: 'AI Agents',
    robotCheck: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  const services = [
    { id: 'AI Agents', icon: <Sparkles className="w-3 h-3" /> },
    { id: 'Click2Save', icon: <Target className="w-3 h-3" /> },
    { id: 'Custom Solution', icon: <Zap className="w-3 h-3" /> },
    { id: 'Other', icon: <TrendingUp className="w-3 h-3" /> }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-green-50/30 relative overflow-hidden flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          style={{
            animation: 'blob 7s infinite'
          }}
        ></div>
        <div 
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          style={{
            animation: 'blob 7s infinite',
            animationDelay: '2s'
          }}
        ></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          
          {/* Left Side - Content */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium mb-3">
              <Sparkles className="w-3 h-3" />
              <span>AI-Powered Solutions</span>
            </div>
            
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 leading-tight">
              Unlock Growth with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
                AI & Digital
              </span>{' '}
              Innovation
            </h1>
            
            <p className="text-base text-gray-600 mb-6 leading-relaxed max-w-2xl">
              Tell us your challenges, and we'll craft AI-driven, scalable solutions to optimize operations, enhance engagement, and drive business impact.
            </p>
            
            {/* Stats - Horizontal */}
            <div className="flex flex-wrap gap-8 items-center justify-center lg:justify-start">
              <div className="text-center lg:text-left">
                <div className="text-xl font-bold text-gray-900">$100M</div>
                <div className="text-xs text-gray-600">Revenue Generated</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl font-bold text-gray-900">99%</div>
                <div className="text-xs text-gray-600">Retention Rate</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl font-bold text-gray-900">100+</div>
                <div className="text-xs text-gray-600">Happy Clients</div>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                  <div className="w-6 h-6 rounded-full bg-gray-400"></div>
                  <div className="w-6 h-6 rounded-full bg-gray-500"></div>
                </div>
                <span>Trusted by leading brands</span>
              </div>
            </div>
          </div>

          {/* Right Side - Compact Form */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl blur-xl opacity-20 scale-95"></div>
              
              <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-6 border border-gray-100">
                <div className="space-y-3">
                  {/* Form Header */}
                  <div className="text-center mb-4">
                    <h2 className="text-lg font-bold text-gray-900">Start Your AI Journey</h2>
                    <p className="text-xs text-gray-600">Get a demo in 24 hours</p>
                  </div>

                  {/* Service Selection - 2x2 Grid */}
                  <div className="grid grid-cols-2 gap-2">
                    {services.map((service) => (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, interestedIn: service.id }))}
                        className={`relative py-2 px-2 rounded-lg text-xs font-medium transition-all duration-300 flex items-center justify-center gap-1 ${
                          formData.interestedIn === service.id
                            ? 'bg-gradient-to-r from-green-600 to-green-500 text-white shadow-md'
                            : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {service.icon}
                        <span className="hidden sm:inline">{service.id}</span>
                        <span className="sm:hidden">{service.id.split(' ')[0]}</span>
                      </button>
                    ))}
                  </div>

                  {/* Two-column input layout */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="relative">
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-green-500 transition-all duration-300 outline-none text-sm"
                        placeholder="Full Name"
                      />
                    </div>

                    <div className="relative">
                      <input
                        type="email"
                        name="companyEmail"
                        value={formData.companyEmail}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-green-500 transition-all duration-300 outline-none text-sm"
                        placeholder="Company Email"
                      />
                    </div>
                  </div>

                  {/* Message - full width but shorter */}
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={2}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-green-500 transition-all duration-300 outline-none resize-none text-sm"
                      placeholder="Tell us about your project (optional)"
                    />
                  </div>

                  {/* Checkbox and Submit in one row */}
                  <div className="flex items-center gap-3">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        name="robotCheck"
                        id="robotCheck"
                        checked={formData.robotCheck}
                        onChange={handleChange}
                        className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                      />
                      <label htmlFor="robotCheck" className="text-xs text-gray-600">
                        I'm not a robot
                      </label>
                    </div>

                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting || !formData.robotCheck}
                      className={`flex-1 py-2 px-4 rounded-lg font-medium text-sm transition-all duration-500 ${
                        isSubmitting || !formData.robotCheck
                          ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                          : showSuccess
                          ? 'bg-green-600 text-white'
                          : 'bg-gradient-to-r from-green-600 to-green-500 text-white hover:shadow-lg'
                      }`}
                    >
                      <span className="flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <>
                            <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Processing...</span>
                          </>
                        ) : showSuccess ? (
                          <>
                            <svg className="w-3 h-3" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                              <path d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Success!</span>
                          </>
                        ) : (
                          <>
                            <span>Get Started</span>
                            <ArrowRight className="w-3 h-3" />
                          </>
                        )}
                      </span>
                    </button>
                  </div>

                  {/* Trust Badge */}
                  <div className="text-center text-xs text-gray-500 flex items-center justify-center gap-1">
                    <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span>Secure & Confidential</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
      `}} />
    </div>
  );
};

export default ContactForm; 