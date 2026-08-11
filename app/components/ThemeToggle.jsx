'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { MdDarkMode, MdLightMode } from 'react-icons/md'

const getSystemTheme = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'

// Reads whatever the pre-paint script in layout.js already decided, so the
// button's icon matches what is actually on screen.
const getCurrentTheme = () => {
  if (typeof document === 'undefined') return 'light'
  const explicit = document.documentElement.getAttribute('data-theme')
  return explicit === 'dark' || explicit === 'light' ? explicit : getSystemTheme()
}

const ThemeToggle = ({ className = '' }) => {
  const [theme, setTheme] = useState('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setTheme(getCurrentTheme())
    setMounted(true)
  }, [])

  // Keep following the OS while the user has not made an explicit choice.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => {
      if (!localStorage.getItem('theme')) setTheme(mq.matches ? 'dark' : 'light')
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const toggle = useCallback(() => {
    const next = getCurrentTheme() === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', next)
    try {
      localStorage.setItem('theme', next)
    } catch (e) {
      // Storage can be unavailable (private mode); the theme still applies.
    }
    setTheme(next)
  }, [])

  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`flex items-center justify-center text-primary opacity-80 hover:opacity-100 transition-opacity ${className}`}
    >
      {/* Render a stable icon until mounted so SSR and client markup match. */}
      {mounted && isDark ? (
        <MdLightMode className="w-full h-full" />
      ) : (
        <MdDarkMode className="w-full h-full" />
      )}
    </button>
  )
}

export default ThemeToggle
