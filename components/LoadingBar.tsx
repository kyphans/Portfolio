'use client'

import { useTheme } from 'next-themes'
import NextTopLoader from 'nextjs-toploader'
import { useEffect, useState } from 'react'
import { THEME_COLORS } from '@/lib/constants/colors'

export default function LoadingBar() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  // Get color from theme constants
  const color = theme === 'green' ? THEME_COLORS.green.primary : THEME_COLORS.pink.primary

  return (
    <NextTopLoader
      color={color}
      initialPosition={0.08}
      crawlSpeed={200}
      height={3}
      crawl={true}
      showSpinner={false}
      easing="ease"
      speed={200}
      shadow={`0 0 10px ${color},0 0 5px ${color}`}
      zIndex={9999}
    />
  )
}
