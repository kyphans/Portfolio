"use client";

import { FC, ReactNode, useState, useEffect } from "react";
import { Cursor, CursorFollow, CursorProvider } from "@/components/ui/cursor";
import { MousePointer2 } from "lucide-react";

// Hook to detect lg breakpoint (1024px)
function useIsLargeScreen() {
  const [isLarge, setIsLarge] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsLarge(window.innerWidth >= 1024);
    };

    // Check on mount
    checkScreen();

    // Listen for resize
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return isLarge;
}

interface SectionCursorProps {
  children: ReactNode;
  sectionName: string;
  className?: string;
  variant?: "default" | "inverted";
}

export const SectionCursor: FC<SectionCursorProps> = ({
  children,
  sectionName,
  className,
  variant = "default",
}) => {
  const isInverted = variant === "inverted";
  const isLargeScreen = useIsLargeScreen();

  return (
    <div className={className}>
      {children}
      {isLargeScreen && (
        <CursorProvider>
          <Cursor>
            <MousePointer2
              className={`h-6 w-6 ${isInverted ? "fill-white text-white" : "fill-primary text-primary"}`}
            />
          </Cursor>
          <CursorFollow align="bottom-right" sideOffset={10}>
            <div
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-bold uppercase tracking-wider shadow-lg ${
                isInverted ? "bg-white text-primary" : "bg-primary text-white"
              }`}
            >
              {sectionName}
            </div>
          </CursorFollow>
        </CursorProvider>
      )}
    </div>
  );
};

export default SectionCursor;
