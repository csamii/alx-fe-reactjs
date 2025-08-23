
function Avatar({ className = "", children, ...props }) {
  return (
    <div
      className={`relative flex size-10 shrink-0 overflow-hidden rounded-full ${className}`} {...props}>
      {children}
    </div>
  );
}

function AvatarImage({ className = "", ...props }) {
  return (
    <img 
      className={`aspect-square size-full ${className}`}
      {...props}
      alt={props.alt || "Avatar"}
    />
  );
}

function AvatarFallback({ className = "", children,  ...props }) {
  return (
    <div className={`bg-muted flex size-full items-center justify-center rounded-full ${className}`} {...props}>
      {children}
    </div>
  );
}

export { Avatar, AvatarImage, AvatarFallback };
