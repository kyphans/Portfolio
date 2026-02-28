"use client";

import { FC, ReactNode } from "react";
import { Cursor, CursorFollow, CursorProvider } from "@/components/ui/cursor";
import { MousePointer2 } from "lucide-react";

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

  return (
    <div className={className}>
      {children}
      <CursorProvider>
        <Cursor>
          <MousePointer2
            className={`h-6 w-6 ${isInverted ? "fill-white text-white" : "fill-primary text-primary"}`}
          />
        </Cursor>
        <CursorFollow align="bottom-right" sideOffset={10}>
          <div
            className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-bold uppercase tracking-wider shadow-lg ${
              isInverted
                ? "bg-white text-primary"
                : "bg-primary text-white"
            }`}
          >
            {sectionName}
          </div>
        </CursorFollow>
      </CursorProvider>
    </div>
  );
};

export default SectionCursor;
