import { cn } from "./lib/utils";

export const Container = ({children, className}: {children: React.ReactNode, className?: string}) => {
    return (
        <div className={cn("max-w-6xl mx-auto px-8", className)}>
          {children}
      </div>
    );
}