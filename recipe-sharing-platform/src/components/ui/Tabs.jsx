import { useState } from "react";

function Tabs({ defaultValue, children, className = "" }) {
  const [activeTab, setActiveTab] = useState(defaultValue);
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {Array.isArray(children)
        ? children.map((child) =>
            typeof child.type === "function"
              ? child.type === TabsList
                ? <TabsList key={child.key} {...child.props} activeTab={activeTab} setActiveTab={setActiveTab} />
                : <TabsContent key={child.key} {...child.props} activeTab={activeTab} />
              : child
          )
        : children}
    </div>
  );
}

function TabsList({ children, className = "", activeTab, setActiveTab }) {
  return (
    <div className={`bg-orange-100 text-black inline-flex h-9 w-fit items-center justify-center rounded-xl p-1 ${className}`}>
      {Array.isArray(children)
        ? children.map((child) =>
            <TabsTrigger key={child.key} {...child.props} activeTab={activeTab} setActiveTab={setActiveTab} />
          )
        : children}
    </div>
  );
}

function TabsTrigger({ value, children, activeTab, setActiveTab }) {
  const isActive = activeTab === value;
  return (
    <button
      onClick={() => setActiveTab(value)}
      className={`px-3 py-1 text-sm font-medium rounded-xl transition
        ${isActive ? "bg-orange-500 text-white shadow" : "text-gray-500"}
      `}
    >
      {children}
    </button>
  );
}

function TabsContent({ value, children, activeTab, className = "" }) {
  if (activeTab !== value) return null;
  return <div className={`flex-1 outline-none ${className}`}>{children}</div>;
}

export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent
}