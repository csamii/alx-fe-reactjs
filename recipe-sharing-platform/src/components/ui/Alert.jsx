function Alert({ className = "", children, ...props
}) {
  return (
    <div
      role="alert"
      className={`relative w-full rounded-lg border px-4 py-3 text-sm grid grid-cols-[0_1fr] items-start gap-y-0.5 [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

function AlertTitle({ className = "", children, ...props }) {
  return (
    <div
      className={`col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

function AlertDescription({ className = "", children, ...props }) {
  return (
    <div
      className={`text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export { Alert, AlertTitle, AlertDescription };
