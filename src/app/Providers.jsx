'use client'
import { ThemeProvider } from "next-themes"
import { children } from "react"

export default function Providers({children}) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      {/* //to use this attribute go to tailwind.config.js : darkMode :'class', */}
        <div className="text-gray-200 dark:text-gray-800 dark:bg-gray-500 min-h-screen select-none transition-colors duration-300">
            {children}
        </div>
    </ThemeProvider>
  )
}
