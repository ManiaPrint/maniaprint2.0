import React from 'react';

interface TabsProps {
  tabs: { id: string; label: string; count?: number }[];
  activeTab: string;
  onChange: (tabId: string) => void;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onChange,
  className = '',
}) => {
  return (
    <div
      className={`
        flex flex-wrap gap-2 p-1 rounded-xl
        bg-surface-700/30 border border-white/5
        ${className}
      `}
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`
            flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium
            transition-all duration-200
            ${activeTab === tab.id
              ? 'bg-neon-blue/10 text-neon-blue border border-neon-blue/20'
              : 'text-white/60 hover:text-white hover:bg-white/5'
            }
          `}
        >
          {tab.label}
          {tab.count !== undefined && (
            <span
              className={`
                rounded-full px-2 py-0.5 text-xs
                ${activeTab === tab.id
                  ? 'bg-neon-blue/20 text-neon-blue'
                  : 'bg-white/10 text-white/40'
                }
              `}
            >
              {tab.count}
            </span>
          )}
        </button>
      ))}
    </div>
  );
};
