import React, { useState } from "react";
import { ChevronDownIcon } from "lucide-react";

function Accordion({ children, className="" }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className={`w-full border rounded-md ${className}`}>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          isOpen: openIndex === index,
          onToggle: () =>
            setOpenIndex(openIndex === index ? null : index),
        })
      )}
    </div>
  );
}

function AccordionItem({ title, children, isOpen, onToggle, className="" }) {
  return (
    <div className={`border-b ${className}`}>
      <button
        onClick={onToggle}
        className="w-full flex justify-between py-4 text-left"
      >
        {title}
        <span>{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && <div className="pb-4 text-sm">{children}</div>}
    </div>
  );
}

export { Accordion, AccordionItem };
