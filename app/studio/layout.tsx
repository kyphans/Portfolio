import type { ReactNode } from 'react'

export default function StudioLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="h-screen w-full overflow-hidden">
      {children}
    </div>
  )
}
