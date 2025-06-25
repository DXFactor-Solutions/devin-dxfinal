"use client";

import { cn } from "../lib/utils";
import { LucideIcon } from "lucide-react";

interface DisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  stats?: {
    value: string;
    label: string;
  };
  category?: string;
}

export function DisplayCard({
  className,
  icon,
  title = "Featured",
  description = "Discover amazing content",
  stats,
  category,
}: DisplayCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl bg-white border border-gray-100 p-6 shadow-md transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
        className
      )}
    >
      {/* Category label */}
      {category && (
        <div className="absolute top-3 right-3 bg-green-50 px-2 py-0.5 rounded-full">
          <span className="text-xs font-medium text-green-600 uppercase tracking-wider">
            {category}
          </span>
        </div>
      )}
      
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center mr-3">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>
      
      <p className="text-gray-600 mb-6 text-sm">{description}</p>
      
      {stats && (
        <div className="flex items-center gap-3 bg-gray-50 px-3 py-2 rounded-lg w-auto self-start">
          <span className="text-3xl font-bold text-green-600">{stats.value}</span>
          <span className="text-xs text-gray-500 uppercase tracking-wide">{stats.label}</span>
        </div>
      )}
    </div>
  );
}

interface DisplayCardsProps {
  cards?: DisplayCardProps[];
}

export function DisplayCards({ cards }: DisplayCardsProps) {
  const defaultCards = [
    {
      title: "Click2Save",
      description: "Proactively identifies at-risk members and deploys targeted retention strategies.",
      stats: {
        value: "85%",
        label: "reduction in churn rate"
      },
      category: "Retention"
    },
    {
      title: "Member Concierge",
      description: "24/7 AI-powered member support that handles inquiries and recommendations.",
      stats: {
        value: "90%",
        label: "query resolution rate"
      },
      category: "Experience",
      className: "translate-x-4 translate-y-4"
    },
    {
      title: "Lead Converter",
      description: "Intelligently nurtures prospects through personalized journeys.",
      stats: {
        value: "40%",
        label: "increase in lead conversion"
      },
      category: "Growth",
      className: "translate-x-8 translate-y-8"
    },
  ];

  const displayCards = cards || defaultCards;

  return (
    <div className="grid [grid-template-areas:'stack'] place-items-center opacity-100 animate-in fade-in-0 duration-700">
      {displayCards.map((cardProps, index) => (
        <DisplayCard key={index} {...cardProps} />
      ))}
    </div>
  );
} 