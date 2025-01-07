import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className={`fixed top-4 right-4 p-2 rounded-full transition-colors duration-200 ${
        theme === 'dark' 
          ? 'bg-white/10 text-white/80 hover:bg-white/20' 
          : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
      }`}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  )
}

