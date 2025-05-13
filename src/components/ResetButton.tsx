"use client";

import { RefreshCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'react';

interface ResetButtonProps extends HTMLAttributes<HTMLButtonElement> {}

export default function ResetButton({ className, ...props }: ResetButtonProps) {
  const handleReset = () => {
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  };

  return (
    <Button
      variant="default" // Uses primary colors defined in globals.css
      size="icon"
      onClick={handleReset}
      className={cn(
        "rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300",
        className
      )}
      aria-label="Reset page"
      {...props}
    >
      <RefreshCcw className="h-5 w-5" />
    </Button>
  );
}
