'use client'

import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex gap-2">
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="p-2 rounded-md hover:bg-accent"
        aria-label="Toggle dark/light mode"
      >
        <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </button>
      <select 
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        className="bg-background border border-primary rounded-md px-2 text-sm"
      >
        <option value="pink">Pink</option>
        <option value="green">Green</option>
      </select>
    </div>
  )
} 