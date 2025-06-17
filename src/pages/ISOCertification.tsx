import React from 'react';
import { 
  Shield, 
  CheckCircle, 
  Search, 
  Settings, 
  RefreshCw, 
  TrendingUp,
  Lock,
  Users,
  FileCheck,
  AlertTriangle
} from 'lucide-react';

const ISOCertification = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-400">
              CERTIFICATIONS
            </h1>
            <div className="flex justify-center mb-8">
              <img 
                src="/logos/isocertif.png" 
                alt="ISO 27001:2013 Certification" 
                className="h-32 w-auto object-contain"
              />
            </div>
            <div className="inline-flex items-center bg-green-500/20 border border-green-400/30 rounded-full px-8 py-3 backdrop-blur-sm">
              <Shield className="w-6 h-6 text-green-400 mr-3" />
              <span className="text-xl font-semibold">ISO/IEC 27001:2013 Certified Digital Services Company</span>
            </div>
          </div>

          {/* Four Key Areas */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center">
              <Search className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Identify<br />Risks</h3>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center">
              <Settings className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Implement<br />Controls</h3>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center">
              <FileCheck className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Maintain<br />Compliance</h3>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center">
              <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Continuous<br />Improvement</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                At DXFactor, safeguarding your data is not just a commitment; it's a core pillar of our mission. We are proud to announce a significant milestone that underscores our unwavering dedication to security - the attainment of ISO/IEC 27001:2013 certification for our Information Security Management Systems (ISMS).
              </p>
              <p>
                In an era where data drives business operations and success, ensuring the confidentiality, integrity, and availability of information is paramount. ISO/IEC 27001:2013 certification signifies our systematic approach to protecting sensitive data, both our own and that of our valued clients.
              </p>
              <p>
                This certification is more than just a badge - it's a testament to our steadfast commitment to maintaining the highest standards of information security.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What is ISO Section */}
      <div className="py-16 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is ISO/IEC 27001:2013 Certification?</h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  ISO/IEC 27001:2013 is an internationally recognized standard for Information Security Management Systems (ISMS). It mandates a systematic approach to managing and protecting sensitive information, ensuring its confidentiality, integrity, and availability.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-white rounded-lg p-8 shadow-lg border border-green-200">
                <div className="bg-green-500 text-white rounded-lg p-6 text-center">
                  <h3 className="text-2xl font-bold mb-2">ISO 27001</h3>
                  <p className="text-sm">CERTIFIED</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Significance Section */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">The Significance of ISO/IEC 27001:2013 Certification</h2>
            <div className="mb-8">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                We have successfully attained ISO/IEC 27001:2013 certification after rigorous assessments and audits.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                By adhering to ISO/IEC 27001:2013 principles, we:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Manage information security risks</h3>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
                <div className="flex items-center mb-4">
                  <Lock className="w-8 h-8 text-green-500 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Protect sensitive data</h3>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-8 h-8 text-green-500 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Continuously improve our security measures</h3>
                </div>
              </div>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed mt-8">
              This ensures that when you choose DXFactor, you are partnering with a technology solutions provider committed to safeguarding your valuable information.
            </p>
          </div>
        </div>
      </div>

      {/* Why It Matters Section */}
      <div className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-green-400">Why It Matters</h2>
              <h3 className="text-xl font-semibold mb-4">The Age of Data: Protecting What Matters Most</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                In today's digitally connected world, data is the lifeblood of business operations. From sensitive customer information to proprietary intellectual property, data is the cornerstone of your success. But with great data comes great responsibility. The responsibility to safeguard it from evolving threats and vulnerabilities.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-2 text-green-400">Setting a Standard</h4>
                <p className="text-gray-300">Demonstrating Commitment</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-2 text-green-400">Building Trust</h4>
                <p className="text-gray-300">Future-proof</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certification Journey Section */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">The Certification Journey</h2>
            <p className="text-xl text-gray-700 text-center mb-12">Our Path to ISO/IEC 27001:2013 Certification</p>
            
            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-200"></div>
              
              <div className="space-y-12">
                {/* Initial Assessment */}
                <div className="flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <div className="bg-green-500 text-white rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Initial Assessment</h3>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center relative z-10">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-1/2 pl-8"></div>
                </div>

                {/* Risk Assessment */}
                <div className="flex items-center">
                  <div className="w-1/2 pr-8"></div>
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center relative z-10">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-1/2 pl-8">
                    <div className="bg-green-500 text-white rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Risk Assessment</h3>
                    </div>
                  </div>
                </div>

                {/* Development of ISMS */}
                <div className="flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <div className="bg-green-500 text-white rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Development of ISMS</h3>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center relative z-10">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-1/2 pl-8"></div>
                </div>

                {/* Implementation */}
                <div className="flex items-center">
                  <div className="w-1/2 pr-8"></div>
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center relative z-10">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-1/2 pl-8">
                    <div className="bg-green-500 text-white rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Implementation</h3>
                    </div>
                  </div>
                </div>

                {/* Training & Awareness */}
                <div className="flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <div className="bg-green-500 text-white rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Training & Awareness</h3>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center relative z-10">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-1/2 pl-8"></div>
                </div>

                {/* Internal Audit */}
                <div className="flex items-center">
                  <div className="w-1/2 pr-8"></div>
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center relative z-10">
                    <Search className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-1/2 pl-8">
                    <div className="bg-green-500 text-white rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Internal Audit</h3>
                    </div>
                  </div>
                </div>

                {/* External Audit */}
                <div className="flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <div className="bg-green-500 text-white rounded-lg p-4">
                      <h3 className="font-semibold mb-2">External Audit</h3>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center relative z-10">
                    <FileCheck className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-1/2 pl-8"></div>
                </div>

                {/* Certification Achievement */}
                <div className="flex items-center">
                  <div className="w-1/2 pr-8"></div>
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center relative z-10">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-1/2 pl-8">
                    <div className="bg-green-500 text-white rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Certification Achievement</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits for Clients Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Benefits for Clients</h2>
            <p className="text-xl text-gray-700 text-center mb-12">Your Data Security, Our Top Priority</p>
            <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              At DXFactor, we understand that entrusting your sensitive data to a technology solutions provider is a significant decision.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Enhanced Data Protection */}
              <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Enhanced Data Protection</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  We have implemented stringent security measures to safeguard your sensitive information.
                </p>
              </div>

              {/* Trust and Confidence */}
              <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Trust and Confidence</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Demonstrating our commitment to maintaining the highest standards of information security.
                </p>
              </div>

              {/* Compliance Assurance */}
              <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <FileCheck className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Compliance Assurance</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  The certification aligns our practices with internationally recognized standards and regulatory requirements.
                </p>
              </div>

              {/* Reduced Risk */}
              <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <AlertTriangle className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Reduced Risk</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Demonstrating our commitment to maintaining the highest standards of information security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ISOCertification; 