import { FC, ReactNode } from "react";

interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  description?: ReactNode;
  className?: string;
}

export const SectionHeader: FC<SectionHeaderProps> = ({
  subtitle,
  title,
  description,
  className = "",
}) => {
  return (
    <div className={`mb-16 text-center ${className}`}>
      {subtitle && (
        <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-primary">
          {subtitle}
        </span>
      )}
      <h1 className="mb-6 font-poppins text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
        {title}
      </h1>
      {description && (
        <p className="text-muted-foreground mx-auto max-w-2xl text-[15px] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
