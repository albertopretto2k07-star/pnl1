import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Brain, Menu, X, Sparkles } from 'lucide-react'

export default function Navbar({ userMode, setUserMode }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/learn', label: 'Impara' },
    { to: '/dashboard', label: 'Dashboard' },
    { to: '/pricing', label: 'Prezzi' },
  ]

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary-500/30 transition-all">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="font-display text-xl font-bold text-white">
              Neuro<span className="text-primary-400">Master</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  location.pathname === link.to
                    ? 'text-white bg-primary-500/20 border border-primary-500/30'
                    : 'text-surface-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mode Toggle + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center bg-surface-800 rounded-lg p-0.5 border border-surface-700">
              <button
                onClick={() => setUserMode('b2c')}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                  userMode === 'b2c'
                    ? 'bg-primary-500 text-white shadow-md'
                    : 'text-surface-400 hover:text-white'
                }`}
              >
                Privati
              </button>
              <button
                onClick={() => setUserMode('b2b')}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                  userMode === 'b2b'
                    ? 'bg-primary-500 text-white shadow-md'
                    : 'text-surface-400 hover:text-white'
                }`}
              >
                Aziende
              </button>
            </div>
            <Link
              to="/learn"
              className="btn-primary flex items-center gap-2 !py-2 !px-5 !text-sm"
            >
              <Sparkles className="w-4 h-4" />
              Inizia Ora
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-surface-300 hover:text-white hover:bg-white/5"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden glass border-t border-white/5"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    location.pathname === link.to
                      ? 'text-white bg-primary-500/20'
                      : 'text-surface-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-2 pt-3 border-t border-white/5">
                <button
                  onClick={() => setUserMode('b2c')}
                  className={`flex-1 py-2 rounded-lg text-xs font-semibold ${
                    userMode === 'b2c' ? 'bg-primary-500 text-white' : 'bg-surface-800 text-surface-400'
                  }`}
                >
                  Privati
                </button>
                <button
                  onClick={() => setUserMode('b2b')}
                  className={`flex-1 py-2 rounded-lg text-xs font-semibold ${
                    userMode === 'b2b' ? 'bg-primary-500 text-white' : 'bg-surface-800 text-surface-400'
                  }`}
                >
                  Aziende
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
