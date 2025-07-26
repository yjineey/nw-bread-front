'use client'

import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)
  const Icon = isDark ? Sun : Moon

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const dark =
      savedTheme === 'dark' ||
      (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
    setIsDark(dark)
    document.documentElement.classList.toggle('dark', dark)
  }, [])

  const toggleTheme = () => {
    const nextTheme = !isDark
    setIsDark(nextTheme)
    document.documentElement.classList.toggle('dark', nextTheme)
    localStorage.setItem('theme', nextTheme ? 'dark' : 'light')
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 border rounded text-sm hover-link hover:border-blue-700
              dark:hover:border-yellow-300"
    >
      <Icon />
    </button>
  )
}
