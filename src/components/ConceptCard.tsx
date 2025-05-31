
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, LucideIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface ConceptCardProps {
  id: string;
  title: string;
  icon: LucideIcon;
  color: string;
  description: string;
  details: string[];
}

export const ConceptCard: React.FC<ConceptCardProps> = ({
  title,
  icon: Icon,
  color,
  description,
  details
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="group relative overflow-hidden bg-white border-stone-200 hover:border-emerald-300 transition-all duration-300 shadow-sm hover:shadow-md">
      {/* Gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
      
      <div className="relative p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`p-3 rounded-xl bg-gradient-to-br ${color} shadow-sm`}>
              <Icon className="text-white" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-stone-800 group-hover:text-emerald-700 transition-colors">
                {title}
              </h3>
              <p className="text-stone-500 text-sm mt-1">{description}</p>
            </div>
          </div>
          
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 rounded-lg bg-stone-100 hover:bg-stone-200 transition-colors duration-200"
          >
            {isExpanded ? (
              <ChevronUp className="text-stone-600" size={20} />
            ) : (
              <ChevronDown className="text-stone-600" size={20} />
            )}
          </button>
        </div>

        {/* Expandable content */}
        <div className={`overflow-hidden transition-all duration-300 ${
          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="pt-4 border-t border-stone-200">
            <ul className="space-y-3">
              {details.map((detail, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${color} mt-2 flex-shrink-0`} />
                  <p className="text-stone-600 text-sm leading-relaxed">{detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Call to action when collapsed */}
        {!isExpanded && (
          <div className="mt-4 pt-4 border-t border-stone-200">
            <button
              onClick={() => setIsExpanded(true)}
              className="text-emerald-600 hover:text-emerald-700 text-sm font-medium transition-colors duration-200"
            >
              Learn more →
            </button>
          </div>
        )}
      </div>
    </Card>
  );
};
