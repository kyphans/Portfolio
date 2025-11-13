'use client'

import { useTheme } from 'next-themes'
import NextTopLoader from 'nextjs-toploader'
import { useEffect, useState } from 'react'

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

  // Theme colors
  const colors = {
    pink: '#fa002e',
    green: '#00ff00',
  }

  const color = theme === 'green' ? colors.green : colors.pink

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
