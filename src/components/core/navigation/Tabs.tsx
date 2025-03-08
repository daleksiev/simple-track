"use client";

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: number;
  className?: string;
}

export function Tabs({ tabs, defaultTab = 0, className = "" }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <div className={`tabs ${className}`}>
      {tabs.map((tab, index) => (
        <a
          key={index}
          className={`tab tab-bordered ${
            activeTab === index ? "tab-active" : ""
          }`}
          onClick={() => setActiveTab(index)}
        >
          {tab.label}
        </a>
      ))}
    </div>
  );
}
