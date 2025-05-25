import React from 'react';

const AIMapSection = () => {
  return (
    <section className="w-full bg-gray-50 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center px-4 py-2 mb-6 space-x-2 border border-gray-200 rounded-full bg-white/80">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          <span className="text-sm font-medium text-gray-700">Platform Overview</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">AI MAP Platform</h2>
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
          Your comprehensive AI platform designed for fitness & wellness businesses. Transform operations and boost revenue with intelligent automation.
        </p>
      </div>
      <div className="flex justify-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-3xl text-left">
          {/* Simulated window bar */}
          <div className="flex items-center mb-6">
            <div className="flex space-x-1 mr-3">
              <span className="w-3 h-3 bg-red-400 rounded-full inline-block"></span>
              <span className="w-3 h-3 bg-yellow-400 rounded-full inline-block"></span>
              <span className="w-3 h-3 bg-green-400 rounded-full inline-block"></span>
            </div>
            <span className="font-semibold text-gray-700 text-sm flex items-center">
              <span className="mr-2">AI MAP Dashboard</span>
              <span className="ml-1 px-2 py-0.5 text-xs bg-green-100 text-green-600 rounded-full font-medium">LIVE</span>
            </span>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className="flex flex-col space-y-2 min-w-[120px]">
              <button className="bg-black text-white rounded-lg px-4 py-2 font-semibold">Overview</button>
              <button className="text-gray-600 hover:bg-gray-100 rounded-lg px-4 py-2 text-left">Agents</button>
              <button className="text-gray-600 hover:bg-gray-100 rounded-lg px-4 py-2 text-left">Analytics</button>
              <button className="text-gray-600 hover:bg-gray-100 rounded-lg px-4 py-2 text-left">Members</button>
              <button className="text-gray-600 hover:bg-gray-100 rounded-lg px-4 py-2 text-left">Settings</button>
            </div>
            {/* Main dashboard content */}
            <div className="flex-1">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-1">Welcome back, <span className="text-green-600">Sarah</span></h3>
                <p className="text-gray-500 text-sm">Here's your business overview</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-green-600 text-2xl font-bold">+24%</div>
                  <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">REVENUE GROWTH</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-red-500 text-2xl font-bold">-18%</div>
                  <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">CHURN RATE</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-blue-600 text-2xl font-bold">93%</div>
                  <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">MEMBER SATISFACTION</div>
                </div>
              </div>
              <div>
                <div className="font-semibold text-green-700 flex items-center mb-2">
                  <span className="mr-2">Active Agents</span>
                  <span className="w-2 h-2 bg-green-500 rounded-full inline-block"></span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between bg-green-50 rounded-lg px-4 py-2">
                    <span className="font-medium text-gray-700">Click2Save</span>
                    <span className="text-green-600 text-xs font-semibold">42 members retained this week</span>
                  </div>
                  <div className="flex items-center justify-between bg-green-50 rounded-lg px-4 py-2">
                    <span className="font-medium text-gray-700">Lead Converter</span>
                    <span className="text-green-600 text-xs font-semibold">18 new signups today</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIMapSection; 