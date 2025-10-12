import React, { useState } from "react";
import { ChevronDownIcon } from "lucide-react";

function Accordion({ children, className=""}) {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleItem = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={`w-full border rounded-md ${className}`}>
        {React.Children.map(children, (child, index) =>
            React.cloneElement(child, {
            isOpen: openIndex === index,
            onToggle: () => toggleItem(index),
            })
        )}
        </div>
    );
}

function AccordionItem({ children, isOpen, onToggle, className="" }) {
    return (
        <div className={`border-b last:border-b-0 ${className}`}>
        {React.Children.map(children, (child) =>
            React.cloneElement(child, { isOpen, onToggle })
        )}
        </div>
    );
}

function AccordionTrigger({ children, onToggle, isOpen, className="" }) {
    return (
        <button
            onClick={onToggle}
            className={`w-full flex justify-between items-center py-4 text-left text-sm font-medium hover:underline transition-all ${className}`}
        >
        {children}
        <ChevronDownIcon
            className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
            }`}
        />
        </button>
    );
}

function AccordionContent({ children, isOpen, className="" }) {
    return (
        <div
        className={`overflow-hidden text-sm transition-all duration-300 ${className} ${
            isOpen ? "max-h-40 opacity-100 py-2" : "max-h-0 opacity-0"
        }`}
        >
        {isOpen && <div className="pb-4">{children}</div>}
        </div>
    );
}

export {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent
}