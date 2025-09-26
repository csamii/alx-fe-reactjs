const badgeVariants = {
    default: "border-transparent bg-black text-white [a&]:hover:bg-primary/90",
    secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
    destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
    outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
};

function Badge({ className = "", variant = "default", children, ...props }) {
  return (
    <span className={`inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 overflow-hidden 
        ${badgeVariants[variant] || badgeVariants.default} ${className}`}
        {...props}
    >
      {children}
    </span>
  );
}

export { Badge };