import React, { useState, useEffect } from 'react';
import { X, ChevronUp, ChevronDown } from 'lucide-react';

interface ROICalculatorProps {
  isOpen: boolean;
  onClose: () => void;
  agentName?: string;
}

const ROICalculator: React.FC<ROICalculatorProps> = ({ isOpen, onClose, agentName = "AI Agents" }) => {
  // Click2Save specific state
  const [cancelRequests, setCancelRequests] = useState(300);
  const [saveRate, setSaveRate] = useState(8);
  const [membershipFee, setMembershipFee] = useState(150);
  
  // Concierge specific state
  const [numAgents, setNumAgents] = useState(20);
  const [avgSalary, setAvgSalary] = useState(50000);
  const [supportRequests, setSupportRequests] = useState(50);
  const [handlingTime, setHandlingTime] = useState(100);
  const [automationRate, setAutomationRate] = useState(50);
  
  // Collections specific state
  const [outstandingBalance, setOutstandingBalance] = useState(12000);
  const [collectionRate, setCollectionRate] = useState(96);
  const [collectionHours, setCollectionHours] = useState(15);
  const [collectorRate, setCollectorRate] = useState(25);
  
  // Sales Agent specific state
  const [monthlyLeads, setMonthlyLeads] = useState(100);
  const [conversionLift, setConversionLift] = useState(5);
  const [avgMembershipDues, setAvgMembershipDues] = useState(70);
  const [salesHoursSaved, setSalesHoursSaved] = useState(10);
  const [salesHourlyRate, setSalesHourlyRate] = useState(30);
  
  // Learning & Development specific state
  const [monthlyHires, setMonthlyHires] = useState(10);
  const [trainingHours, setTrainingHours] = useState(8);
  const [trainerRate, setTrainerRate] = useState(25);
  
  // Group Fitness specific state
  const [additionalCheckIns, setAdditionalCheckIns] = useState(50);
  const [classValue, setClassValue] = useState(15);

  // Get agent-specific calculator
  const getCalculatorContent = () => {
    switch(agentName) {
      case 'Click2Save':
        return renderClick2SaveCalculator();
      case 'Concierge':
        return renderConciergeCalculator();
      case 'Collections':
        return renderCollectionsCalculator();
      case 'Sales Agent':
        return renderSalesCalculator();
      case 'Learning & Development':
        return renderLearningCalculator();
      case 'Group Fitness':
        return renderGroupFitnessCalculator();
      default:
        return renderConciergeCalculator(); // Default fallback
    }
  };

  // Click2Save Calculator
  const renderClick2SaveCalculator = () => {
    const membersSaved = Math.round(cancelRequests * (saveRate / 100));
    const monthlyRevenue = membersSaved * membershipFee;
    const annualRevenue = monthlyRevenue * 12;
    const hoursPerWeek = 1; // Hours saved per week on cancellation processing
    const hoursSavedMonthly = hoursPerWeek * 4;
    const hoursSavedAnnually = hoursSavedMonthly * 12;

    return (
      <>
        <div className="space-y-4 sm:space-y-6">
          {/* Cancel Requests */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
              Average Cancel Requests Per Month
            </label>
            <div className="relative">
              <input
                type="number"
                value={cancelRequests}
                onChange={(e) => setCancelRequests(Number(e.target.value))}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-base sm:text-lg"
                aria-label="Average cancel requests per month"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col">
                <button
                  onClick={() => setCancelRequests(prev => prev + 10)}
                  className="hover:bg-gray-100 rounded p-0.5"
                  aria-label="Increase cancel requests"
                >
                  <ChevronUp className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-gray-600" />
                </button>
                <button
                  onClick={() => setCancelRequests(prev => Math.max(0, prev - 10))}
                  className="hover:bg-gray-100 rounded p-0.5"
                  aria-label="Decrease cancel requests"
                >
                  <ChevronDown className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-gray-600" />
                </button>
              </div>
            </div>
            <p className="text-[10px] sm:text-xs text-gray-500 mt-1">Min: 0 - Max: 10000</p>
          </div>

          {/* Save Rate Slider */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
              Member Save Retention Rate
            </label>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xl sm:text-2xl font-bold text-gray-900">{saveRate}%</span>
              </div>
              <div className="relative">
                <input
                  type="range"
                  min="0"
                  max="15"
                  value={saveRate}
                  onChange={(e) => setSaveRate(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  aria-label="Member save retention rate"
                  style={{
                    background: `linear-gradient(to right, #10B981 0%, #10B981 ${(saveRate / 15) * 100}%, #E5E7EB ${(saveRate / 15) * 100}%, #E5E7EB 100%)`
                  }}
                />
              </div>
              <p className="text-[10px] sm:text-xs text-gray-500">10-15% is average based on existing clients</p>
            </div>
          </div>

          {/* Membership Fees */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
              Membership Fees
            </label>
            <div className="relative">
              <input
                type="number"
                value={membershipFee}
                onChange={(e) => setMembershipFee(Number(e.target.value))}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-base sm:text-lg"
                aria-label="Membership fees"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col">
                <button
                  onClick={() => setMembershipFee(prev => prev + 10)}
                  className="hover:bg-gray-100 rounded p-0.5"
                  aria-label="Increase membership fee"
                >
                  <ChevronUp className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-gray-600" />
                </button>
                <button
                  onClick={() => setMembershipFee(prev => Math.max(0, prev - 10))}
                  className="hover:bg-gray-100 rounded p-0.5"
                  aria-label="Decrease membership fee"
                >
                  <ChevronDown className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-gray-600" />
                </button>
              </div>
            </div>
            <p className="text-[10px] sm:text-xs text-gray-500 mt-1">Min: 0 - Max: 10000</p>
          </div>

          {/* Hours Question */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
              How many hours does your team spend on dealing with cancellations per week?
            </label>
            <div className="relative">
              <input
                type="number"
                value={hoursPerWeek}
                onChange={(e) => {}} // Read-only for now
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg bg-gray-50 text-base sm:text-lg"
                aria-label="Hours spent on cancellations"
                readOnly
              />
            </div>
            <p className="text-[10px] sm:text-xs text-gray-500 mt-1">Min: 1 - Max: 5000</p>
          </div>
        </div>

        {/* ROI Summary */}
        <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 h-fit border border-gray-200">
          <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4 sm:mb-6">ROI Summary</h3>
          
          <div className="space-y-3 sm:space-y-4">
            <div className="flex justify-between items-center">
              <p className="text-xs sm:text-sm text-gray-600">Members Saved</p>
              <p className="text-lg sm:text-xl font-bold text-gray-900">{membersSaved}</p>
            </div>
            
            <div className="flex justify-between items-center">
              <p className="text-xs sm:text-sm text-gray-600">Monthly Revenue Retained</p>
              <p className="text-lg sm:text-xl font-bold text-gray-900">${monthlyRevenue.toLocaleString()}</p>
            </div>
            
            <div className="flex justify-between items-center">
              <p className="text-xs sm:text-sm text-gray-600">Annual Revenue Retained</p>
              <p className="text-lg sm:text-xl font-bold text-green-600">${annualRevenue.toLocaleString()}</p>
            </div>
            
            <div className="pt-3 sm:pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center mb-1.5 sm:mb-2">
                <p className="text-xs sm:text-sm text-gray-600">Monthly</p>
                <p className="text-base sm:text-lg font-semibold text-gray-900">{hoursSavedMonthly} Hrs</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-xs sm:text-sm text-gray-600">Annually</p>
                <p className="text-base sm:text-lg font-semibold text-gray-900">{hoursSavedAnnually} Hrs</p>
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-8">
            <button
              onClick={onClose}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors text-sm sm:text-base"
            >
              Get Started with Click2Save
            </button>
          </div>
        </div>
      </>
    );
  };

  // Concierge Calculator (existing logic)
  const renderConciergeCalculator = () => {
    const monthlyRequests = supportRequests;
    const automatedRequests = monthlyRequests * (automationRate / 100);
    const timeSavedMinutes = automatedRequests * handlingTime;
    const timeSavedHours = timeSavedMinutes / 60;
    const hourlyRate = avgSalary / (52 * 40);
    const monthlySavings = timeSavedHours * hourlyRate;

    return (
      <>
        <div className="space-y-6">
          {/* Number of Support Agents */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number of Support Agents
            </label>
            <div className="relative">
              <input
                type="number"
                value={numAgents}
                onChange={(e) => setNumAgents(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-lg"
                aria-label="Number of support agents"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col">
                <button
                  onClick={() => setNumAgents(prev => prev + 1)}
                  className="hover:bg-gray-100 rounded p-0.5"
                  aria-label="Increase number of agents"
                >
                  <ChevronUp className="w-4 h-4 text-gray-600" />
                </button>
                <button
                  onClick={() => setNumAgents(prev => Math.max(1, prev - 1))}
                  className="hover:bg-gray-100 rounded p-0.5"
                  aria-label="Decrease number of agents"
                >
                  <ChevronDown className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Average Annual Salary */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Average Annual Salary per Agent
            </label>
            <div className="relative">
              <input
                type="number"
                value={avgSalary}
                onChange={(e) => setAvgSalary(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-lg"
                aria-label="Average annual salary per agent"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col">
                <button
                  onClick={() => setAvgSalary(prev => prev + 1000)}
                  className="hover:bg-gray-100 rounded p-0.5"
                  aria-label="Increase salary"
                >
                  <ChevronUp className="w-4 h-4 text-gray-600" />
                </button>
                <button
                  onClick={() => setAvgSalary(prev => Math.max(0, prev - 1000))}
                  className="hover:bg-gray-100 rounded p-0.5"
                  aria-label="Decrease salary"
                >
                  <ChevronDown className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Support Requests */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Average Number of Support Requests per Month
            </label>
            <div className="relative">
              <input
                type="number"
                value={supportRequests}
                onChange={(e) => setSupportRequests(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-lg"
                aria-label="Average number of support requests per month"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col">
                <button
                  onClick={() => setSupportRequests(prev => prev + 10)}
                  className="hover:bg-gray-100 rounded p-0.5"
                  aria-label="Increase support requests"
                >
                  <ChevronUp className="w-4 h-4 text-gray-600" />
                </button>
                <button
                  onClick={() => setSupportRequests(prev => Math.max(0, prev - 10))}
                  className="hover:bg-gray-100 rounded p-0.5"
                  aria-label="Decrease support requests"
                >
                  <ChevronDown className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Handling Time */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Average Handling Time per Request (minutes)
            </label>
            <div className="relative">
              <input
                type="number"
                value={handlingTime}
                onChange={(e) => setHandlingTime(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-lg"
                aria-label="Average handling time per request in minutes"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col">
                <button
                  onClick={() => setHandlingTime(prev => prev + 5)}
                  className="hover:bg-gray-100 rounded p-0.5"
                  aria-label="Increase handling time"
                >
                  <ChevronUp className="w-4 h-4 text-gray-600" />
                </button>
                <button
                  onClick={() => setHandlingTime(prev => Math.max(1, prev - 5))}
                  className="hover:bg-gray-100 rounded p-0.5"
                  aria-label="Decrease handling time"
                >
                  <ChevronDown className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Automation Rate Slider */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Estimated Automation Rate (%)
            </label>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-gray-900">{automationRate}%</span>
              </div>
              <div className="relative">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={automationRate}
                  onChange={(e) => setAutomationRate(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  aria-label="Estimated automation rate percentage"
                  style={{
                    background: `linear-gradient(to right, #4F46E5 0%, #4F46E5 ${automationRate}%, #E5E7EB ${automationRate}%, #E5E7EB 100%)`
                  }}
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>0%</span>
                  <span>100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ROI Summary */}
        <div className="bg-green-50 rounded-xl p-6 h-fit">
          <h3 className="text-lg font-bold text-gray-900 mb-6">ROI Summary</h3>
          
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-600 mb-2">Estimated Time Saved</p>
              <p className="text-3xl font-bold text-gray-900">{Math.round(timeSavedHours)} hours/month</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-600 mb-2">Projected Cost Savings</p>
              <p className="text-3xl font-bold text-gray-900">${Math.round(monthlySavings).toLocaleString()}/month</p>
            </div>

            <div className="pt-4 border-t border-green-200">
              <p className="text-sm text-gray-600 mb-2">Annual Savings</p>
              <p className="text-2xl font-bold text-green-600">
                ${(Math.round(monthlySavings) * 12).toLocaleString()}/year
              </p>
            </div>
          </div>

          <div className="mt-8">
            <button
              onClick={onClose}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Get Started with Concierge
            </button>
          </div>
        </div>
      </>
    );
  };

  // Collections Calculator
  const renderCollectionsCalculator = () => {
    const revenueRecovered = outstandingBalance * (collectionRate / 100);
    const laborSavings = collectionHours * collectorRate;
    const monthlyTotal = revenueRecovered + laborSavings;
    const annualTotal = monthlyTotal * 12;

    return (
      <>
        <div className="space-y-6">
          {/* Outstanding Balance */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Monthly Outstanding Balance ($)
            </label>
            <div className="relative">
              <input
                type="number"
                value={outstandingBalance}
                onChange={(e) => setOutstandingBalance(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-lg"
                aria-label="Monthly outstanding balance"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col">
                <button
                  onClick={() => setOutstandingBalance(prev => prev + 1000)}
                  className="hover:bg-gray-100 rounded p-0.5"
                  aria-label="Increase outstanding balance"
                >
                  <ChevronUp className="w-4 h-4 text-gray-600" />
                </button>
                <button
                  onClick={() => setOutstandingBalance(prev => Math.max(0, prev - 1000))}
                  className="hover:bg-gray-100 rounded p-0.5"
                  aria-label="Decrease outstanding balance"
                >
                  <ChevronDown className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Collection Rate */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Collection Recovery Rate (%)
            </label>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-gray-900">{collectionRate}%</span>
              </div>
              <div className="relative">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={collectionRate}
                  onChange={(e) => setCollectionRate(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  aria-label="Collection recovery rate"
                  style={{
                    background: `linear-gradient(to right, #10B981 0%, #10B981 ${collectionRate}%, #E5E7EB ${collectionRate}%, #E5E7EB 100%)`
                  }}
                />
              </div>
              <p className="text-xs text-gray-500">Industry average: 96%</p>
            </div>
          </div>

          {/* Collection Hours */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Hours Spent on Collections per Month
            </label>
            <div className="relative">
              <input
                type="number"
                value={collectionHours}
                onChange={(e) => setCollectionHours(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-lg"
                aria-label="Hours spent on collections"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col">
                <button
                  onClick={() => setCollectionHours(prev => prev + 1)}
                  className="hover:bg-gray-100 rounded p-0.5"
                  aria-label="Increase collection hours"
                >
                  <ChevronUp className="w-4 h-4 text-gray-600" />
                </button>
                <button
                  onClick={() => setCollectionHours(prev => Math.max(0, prev - 1))}
                  className="hover:bg-gray-100 rounded p-0.5"
                  aria-label="Decrease collection hours"
                >
                  <ChevronDown className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Hourly Rate */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Staff Hourly Rate ($)
            </label>
            <div className="relative">
              <input
                type="number"
                value={collectorRate}
                onChange={(e) => setCollectorRate(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-lg"
                aria-label="Staff hourly rate"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col">
                <button
                  onClick={() => setCollectorRate(prev => prev + 5)}
                  className="hover:bg-gray-100 rounded p-0.5"
                  aria-label="Increase hourly rate"
                >
                  <ChevronUp className="w-4 h-4 text-gray-600" />
                </button>
                <button
                  onClick={() => setCollectorRate(prev => Math.max(0, prev - 5))}
                  className="hover:bg-gray-100 rounded p-0.5"
                  aria-label="Decrease hourly rate"
                >
                  <ChevronDown className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ROI Summary */}
        <div className="bg-green-50 rounded-xl p-6 h-fit">
          <h3 className="text-lg font-bold text-gray-900 mb-6">ROI Summary</h3>
          
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-600 mb-2">Revenue Recovered</p>
              <p className="text-3xl font-bold text-gray-900">${Math.round(revenueRecovered).toLocaleString()}/month</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-600 mb-2">Labor Cost Savings</p>
              <p className="text-2xl font-bold text-gray-900">${Math.round(laborSavings).toLocaleString()}/month</p>
            </div>

            <div className="pt-4 border-t border-green-200">
              <p className="text-sm text-gray-600 mb-2">Total Monthly Value</p>
              <p className="text-3xl font-bold text-green-600">${Math.round(monthlyTotal).toLocaleString()}/month</p>
            </div>

            <div>
              <p className="text-sm text-gray-600 mb-2">Annual Value</p>
              <p className="text-2xl font-bold text-green-600">${Math.round(annualTotal).toLocaleString()}/year</p>
            </div>
          </div>

          <div className="mt-8">
            <button
              onClick={onClose}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Get Started with Collections
            </button>
          </div>
        </div>
      </>
    );
  };

  // Sales Agent Calculator
  const renderSalesCalculator = () => {
    const newMembers = monthlyLeads * (conversionLift / 100);
    const newRevenue = newMembers * avgMembershipDues;
    const laborSavings = salesHoursSaved * salesHourlyRate;
    const monthlyTotal = newRevenue + laborSavings;
    const annualTotal = monthlyTotal * 12;

    return (
      <>
        <div className="space-y-6">
          {/* Monthly Leads */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Monthly Lead Volume
            </label>
            <div className="relative">
              <input
                type="number"
                value={monthlyLeads}
                onChange={(e) => setMonthlyLeads(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-lg"
                aria-label="Monthly lead volume"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col">
                <button
                  onClick={() => setMonthlyLeads(prev => prev + 10)}
                  className="hover:bg-gray-100 rounded p-0.5"
                  aria-label="Increase leads"
                >
                  <ChevronUp className="w-4 h-4 text-gray-600" />
                </button>
                <button
                  onClick={() => setMonthlyLeads(prev => Math.max(0, prev - 10))}
                  className="hover:bg-gray-100 rounded p-0.5"
                  aria-label="Decrease leads"
                >
                  <ChevronDown className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Conversion Lift */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Expected Conversion Lift (%)
            </label>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-gray-900">{conversionLift}%</span>
              </div>
              <div className="relative">
                <input
                  type="range"
                  min="0"
                  max="20"
                  value={conversionLift}
                  onChange={(e) => setConversionLift(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  aria-label="Expected conversion lift"
                  style={{
                    background: `linear-gradient(to right, #4F46E5 0%, #4F46E5 ${(conversionLift / 20) * 100}%, #E5E7EB ${(conversionLift / 20) * 100}%, #E5E7EB 100%)`
                  }}
                />
              </div>
            </div>
          </div>

          {/* Average Membership Dues */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Average Monthly Membership Dues ($)
            </label>
            <div className="relative">
              <input
                type="number"
                value={avgMembershipDues}
                onChange={(e) => setAvgMembershipDues(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-lg"
                aria-label="Average membership dues"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col">
                <button
                  onClick={() => setAvgMembershipDues(prev => prev + 10)}
                  className="hover:bg-gray-100 rounded p-0.5"
                  aria-label="Increase dues"
                >
                  <ChevronUp className="w-4 h-4 text-gray-600" />
                </button>
                <button
                  onClick={() => setAvgMembershipDues(prev => Math.max(0, prev - 10))}
                  className="hover:bg-gray-100 rounded p-0.5"
                  aria-label="Decrease dues"
                >
                  <ChevronDown className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Hours Saved */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Hours Saved on Lead Follow-up per Month
            </label>
            <div className="relative">
              <input
                type="number"
                value={salesHoursSaved}
                onChange={(e) => setSalesHoursSaved(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-lg"
                aria-label="Hours saved on lead follow-up"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col">
                <button
                  onClick={() => setSalesHoursSaved(prev => prev + 1)}
                  className="hover:bg-gray-100 rounded p-0.5"
                  aria-label="Increase hours"
                >
                  <ChevronUp className="w-4 h-4 text-gray-600" />
                </button>
                <button
                  onClick={() => setSalesHoursSaved(prev => Math.max(0, prev - 1))}
                  className="hover:bg-gray-100 rounded p-0.5"
                  aria-label="Decrease hours"
                >
                  <ChevronDown className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ROI Summary */}
        <div className="bg-green-50 rounded-xl p-6 h-fit">
          <h3 className="text-lg font-bold text-gray-900 mb-6">ROI Summary</h3>
          
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-600 mb-2">New Members per Month</p>
              <p className="text-3xl font-bold text-gray-900">{newMembers.toFixed(1)}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-600 mb-2">New Monthly Revenue</p>
              <p className="text-3xl font-bold text-gray-900">${Math.round(newRevenue).toLocaleString()}/month</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-600 mb-2">Labor Savings</p>
              <p className="text-2xl font-bold text-gray-900">${Math.round(laborSavings).toLocaleString()}/month</p>
            </div>

            <div className="pt-4 border-t border-green-200">
              <p className="text-sm text-gray-600 mb-2">Total Monthly Value</p>
              <p className="text-3xl font-bold text-green-600">${Math.round(monthlyTotal).toLocaleString()}/month</p>
            </div>

            <div>
              <p className="text-sm text-gray-600 mb-2">Annual Value</p>
              <p className="text-2xl font-bold text-green-600">${Math.round(annualTotal).toLocaleString()}/year</p>
            </div>
          </div>

          <div className="mt-8">
            <button
              onClick={onClose}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Get Started with Sales Agent
            </button>
          </div>
        </div>
      </>
    );
  };

  // Learning & Development Calculator
  const renderLearningCalculator = () => {
    const monthlySavings = monthlyHires * trainingHours * trainerRate;
    const annualSavings = monthlySavings * 12;

    return (
      <>
        <div className="space-y-6">
          {/* Monthly Hires */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Average New Hires per Month
            </label>
            <div className="relative">
              <input
                type="number"
                value={monthlyHires}
                onChange={(e) => setMonthlyHires(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-lg"
                aria-label="Average new hires per month"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col">
                <button
                  onClick={() => setMonthlyHires(prev => prev + 1)}
                  className="hover:bg-gray-100 rounded p-0.5"
                  aria-label="Increase hires"
                >
                  <ChevronUp className="w-4 h-4 text-gray-600" />
                </button>
                <button
                  onClick={() => setMonthlyHires(prev => Math.max(0, prev - 1))}
                  className="hover:bg-gray-100 rounded p-0.5"
                  aria-label="Decrease hires"
                >
                  <ChevronDown className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Training Hours */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Training Hours per New Hire
            </label>
            <div className="relative">
              <input
                type="number"
                value={trainingHours}
                onChange={(e) => setTrainingHours(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-lg"
                aria-label="Training hours per new hire"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col">
                <button
                  onClick={() => setTrainingHours(prev => prev + 1)}
                  className="hover:bg-gray-100 rounded p-0.5"
                  aria-label="Increase training hours"
                >
                  <ChevronUp className="w-4 h-4 text-gray-600" />
                </button>
                <button
                  onClick={() => setTrainingHours(prev => Math.max(0, prev - 1))}
                  className="hover:bg-gray-100 rounded p-0.5"
                  aria-label="Decrease training hours"
                >
                  <ChevronDown className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Trainer Rate */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Trainer Hourly Rate ($)
            </label>
            <div className="relative">
              <input
                type="number"
                value={trainerRate}
                onChange={(e) => setTrainerRate(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-lg"
                aria-label="Trainer hourly rate"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col">
                <button
                  onClick={() => setTrainerRate(prev => prev + 5)}
                  className="hover:bg-gray-100 rounded p-0.5"
                  aria-label="Increase rate"
                >
                  <ChevronUp className="w-4 h-4 text-gray-600" />
                </button>
                <button
                  onClick={() => setTrainerRate(prev => Math.max(0, prev - 5))}
                  className="hover:bg-gray-100 rounded p-0.5"
                  aria-label="Decrease rate"
                >
                  <ChevronDown className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ROI Summary */}
        <div className="bg-green-50 rounded-xl p-6 h-fit">
          <h3 className="text-lg font-bold text-gray-900 mb-6">ROI Summary</h3>
          
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-600 mb-2">Training Hours Saved per Month</p>
              <p className="text-3xl font-bold text-gray-900">{monthlyHires * trainingHours} hours</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-600 mb-2">Monthly Cost Savings</p>
              <p className="text-3xl font-bold text-gray-900">${Math.round(monthlySavings).toLocaleString()}/month</p>
            </div>

            <div className="pt-4 border-t border-green-200">
              <p className="text-sm text-gray-600 mb-2">Annual Savings</p>
              <p className="text-2xl font-bold text-green-600">${Math.round(annualSavings).toLocaleString()}/year</p>
            </div>

            <div className="bg-green-100 rounded-lg p-3 mt-4">
              <p className="text-sm text-green-800">
                <strong>Additional Benefits:</strong> 40% faster onboarding, 90% process standardization
              </p>
            </div>
          </div>

          <div className="mt-8">
            <button
              onClick={onClose}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Get Started with Learning & Development
            </button>
          </div>
        </div>
      </>
    );
  };

  // Group Fitness Calculator
  const renderGroupFitnessCalculator = () => {
    const monthlyEngagementValue = additionalCheckIns * classValue;
    const annualEngagementValue = monthlyEngagementValue * 12;

    return (
      <>
        <div className="space-y-6">
          {/* Additional Check-ins */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Additional Class Check-ins per Month
            </label>
            <div className="relative">
              <input
                type="number"
                value={additionalCheckIns}
                onChange={(e) => setAdditionalCheckIns(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-lg"
                aria-label="Additional class check-ins per month"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col">
                <button
                  onClick={() => setAdditionalCheckIns(prev => prev + 10)}
                  className="hover:bg-gray-100 rounded p-0.5"
                  aria-label="Increase check-ins"
                >
                  <ChevronUp className="w-4 h-4 text-gray-600" />
                </button>
                <button
                  onClick={() => setAdditionalCheckIns(prev => Math.max(0, prev - 10))}
                  className="hover:bg-gray-100 rounded p-0.5"
                  aria-label="Decrease check-ins"
                >
                  <ChevronDown className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Class Value */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Value per Class Session ($)
            </label>
            <div className="relative">
              <input
                type="number"
                value={classValue}
                onChange={(e) => setClassValue(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-lg"
                aria-label="Value per class session"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col">
                <button
                  onClick={() => setClassValue(prev => prev + 5)}
                  className="hover:bg-gray-100 rounded p-0.5"
                  aria-label="Increase value"
                >
                  <ChevronUp className="w-4 h-4 text-gray-600" />
                </button>
                <button
                  onClick={() => setClassValue(prev => Math.max(0, prev - 5))}
                  className="hover:bg-gray-100 rounded p-0.5"
                  aria-label="Decrease value"
                >
                  <ChevronDown className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ROI Summary */}
        <div className="bg-green-50 rounded-xl p-6 h-fit">
          <h3 className="text-lg font-bold text-gray-900 mb-6">ROI Summary</h3>
          
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-600 mb-2">Additional Monthly Check-ins</p>
              <p className="text-3xl font-bold text-gray-900">{additionalCheckIns}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-600 mb-2">Monthly Engagement Value</p>
              <p className="text-3xl font-bold text-gray-900">${Math.round(monthlyEngagementValue).toLocaleString()}/month</p>
            </div>

            <div className="pt-4 border-t border-green-200">
              <p className="text-sm text-gray-600 mb-2">Annual Engagement Value</p>
              <p className="text-2xl font-bold text-green-600">${Math.round(annualEngagementValue).toLocaleString()}/year</p>
            </div>

            <div className="bg-green-100 rounded-lg p-3 mt-4">
              <p className="text-sm text-green-800">
                <strong>Additional Benefits:</strong> Improved member retention, better class utilization, increased member satisfaction
              </p>
            </div>
          </div>

          <div className="mt-8">
            <button
              onClick={onClose}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Get Started with Group Fitness
            </button>
          </div>
        </div>
      </>
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gray-50 px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-base sm:text-xl font-bold text-gray-900 pr-2">{agentName} ROI Calculator</h2>
          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 hover:bg-gray-200 rounded-lg transition-colors"
            aria-label="Close calculator"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 overflow-y-auto max-h-[calc(95vh-60px)] sm:max-h-[calc(90vh-80px)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {getCalculatorContent()}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          background: #4F46E5;
          cursor: pointer;
          border-radius: 50%;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: #4F46E5;
          cursor: pointer;
          border-radius: 50%;
          border: none;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        
        @media (max-width: 640px) {
          .slider::-webkit-slider-thumb {
            width: 24px;
            height: 24px;
          }
          
          .slider::-moz-range-thumb {
            width: 24px;
            height: 24px;
          }
        }
      `}} />
    </div>
  );
};

export default ROICalculator; 