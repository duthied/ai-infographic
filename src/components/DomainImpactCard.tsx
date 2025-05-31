
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface DomainImpactCardProps {
  id: string;
  title: string;
  icon: LucideIcon;
  color: string;
  description: string;
  impacts: (string | React.ReactNode)[];
}

export const DomainImpactCard: React.FC<DomainImpactCardProps> = ({
  title,
  icon: Icon,
  color,
  description,
  impacts
}) => {
  return (
    <Card className="group relative overflow-hidden bg-white border-stone-200 hover:border-emerald-300 transition-all duration-300 shadow-sm hover:shadow-md h-full">
      {/* Gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
      
      <div className="relative p-6 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-4">
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

        {/* Impact list */}
        <div className="flex-1">
          <ul className="space-y-3">
            {impacts.map((impact, index) => (
              <li key={index} className="flex items-start space-x-3">
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${color} mt-2 flex-shrink-0`} />
                <p className="text-stone-600 text-sm leading-relaxed">{impact}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
};
