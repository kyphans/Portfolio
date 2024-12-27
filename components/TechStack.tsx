"use client";

import { FC, useEffect, useState } from "react";
import Image from "next/image";

interface Language {
  name: string;
  icon: string;
}

interface GithubRepo {
  language: string | null;
}

// Mapping tên ngôn ngữ từ Github API sang tên icon
const skillIconsMapping: { [key: string]: string } = {
  JavaScript: "javascript.svg",
  TypeScript: "typescript.svg", 
  Python: "python.svg",
  Java: "java.svg",
  "C#": "cs.svg",
  "C++": "cpp.svg",
  PHP: "php.svg",
  Ruby: "ruby.svg",
  Swift: "swift.svg",
  Go: "go.svg",
  Rust: "rust.svg",
  HTML: "html.svg",
  CSS: "css.svg",
  Vue: "vue.svg",
  React: "react.svg",
  Angular: "angular.svg",
  "NextJs": "nextjs.svg",
  Node: "nodejs.svg",
  Docker: "docker.svg",
  Git: "git.svg",
  MongoDB: "mongodb.svg",
  PostgreSQL: "postgresql.svg",
  Redis: "redis.svg",
  AWS: "aws.svg",
  Firebase: "firebase.svg",
  TailwindCSS: "tailwindcss.svg",
};

// Các skill bổ sung
const additionalSkills = [
  { name: "CSS", icon: "/icons/css.svg" },
  { name: "NEXTJS", icon: "/icons/nextjs.svg" },
  { name: "NODEJS", icon: "/icons/nodejs.svg" },
  { name: "DOCKER", icon: "/icons/docker.svg" },
  { name: "GIT", icon: "/icons/git.svg" },
  { name: "MONGODB", icon: "/icons/mongodb.svg" },
  { name: "POSTGRESQL", icon: "/icons/postgresql.svg" },
  { name: "REDIS", icon: "/icons/redis.svg" },
  { name: "AWS", icon: "/icons/aws.svg" },
  { name: "FIREBASE", icon: "/icons/firebase.svg" },
  { name: "TAILWIND", icon: "/icons/tailwindcss.svg" }
];

// Tạo danh sách ngôn ngữ từ API và bổ sung
const generateLanguageList = (repos: GithubRepo[]): Language[] => {
  const uniqueLanguages = new Set<string>(
    repos
      .map((repo) => repo.language)
      .filter((lang): lang is string => lang !== null),
  );

  const languageList = Array.from(uniqueLanguages).map((lang: string) => {
    const skillIcon = skillIconsMapping[lang] || `${lang.toLowerCase()}.svg`;
    return {
      name: lang,
      icon: `/icons/${skillIcon}`,
    };
  });

  return [...languageList, ...additionalSkills];
};


const TechStack: FC = () => {
  const [languages, setLanguages] = useState<Language[]>([]);

  const LanguagesIcon: FC<{ languages: Language[] }> = ({ languages }) => (
    <>
      {languages.map((lang, index) => (
        <div
          key={`${lang.name}-${index}`}
          className="group relative h-24 w-24 flex-shrink-0 md:mx-8"
        >
          <div className="group-hover:paused absolute inset-0 rounded-full bg-gradient-to-r from-primary/0 to-primary/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <Image
            src={lang.icon}
            alt={lang.name}
            width={96}
            height={96}
            className="object-contain p-2 md:p-4"
          />
          <div className="group-hover:paused absolute bottom-0 left-1/2 -translate-x-1/2 transform opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="rounded bg-background/80 px-2 py-1 text-sm font-medium">
              {lang.name}
            </span>
          </div>
        </div>
      ))}
    </>
  );

  const ScrollRow: FC<{
    direction: "left" | "right";
    languages: Language[];
  }> = ({ direction, languages }) => (
    <div
      className={`${direction === "right" ? "animate-loop-scroll-right" : "animate-loop-scroll-left"} flex space-x-4 md:space-x-16`}
    >
      <LanguagesIcon languages={languages} />
    </div>
  );

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/kyphans/repos",
        );
        const repos: GithubRepo[] = await response.json();
        const allSkills = generateLanguageList(repos);
        setLanguages([...allSkills, ...allSkills]); // Infinite scroll effect
      } catch (error) {
        console.error("Error fetching languages:", error);
      }
    };

    fetchLanguages();
  }, []);

  return (
    <div className="overflow-hidden bg-background py-20" id="Skills">
      <div className="container relative px-0">
        <div className="absolute inset-y-0 left-0 z-40 w-20 bg-gradient-to-l from-transparent to-background" />
        <div className="absolute inset-y-0 right-0 z-40 w-20 bg-gradient-to-r from-transparent to-background" />
        <div className="relative z-50 mb-12 text-center">
          <h1 className="mb-4 text-5xl font-bold">Technical Skills</h1>
          <p className="text-muted">
            Technologies I use in my development journey
          </p>
        </div>

        {/* Infinite Scroll Container */}
        <div className="relative w-full md:min-h-[240px]">
          {/* Row 1 - Left to Right */}
          <div className="flex space-x-4 overflow-hidden md:space-x-16">
            <ScrollRow direction="left" languages={languages} />
            <ScrollRow
              direction="left"
              languages={languages}
              aria-hidden="true"
            />
          </div>

          {/* Row 2 - Right to Left */}
          <div className="mt-12 flex space-x-4 overflow-hidden md:space-x-16">
            <ScrollRow direction="right" languages={languages} />
            <ScrollRow
              direction="right"
              languages={languages}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
