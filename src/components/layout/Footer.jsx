import { Brain, Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-surface-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                <Brain className="w-4 h-4 text-white" />
              </div>
              <span className="font-display text-lg font-bold text-white">
                Neuro<span className="text-primary-400">Master</span>
              </span>
            </Link>
            <p className="text-sm text-surface-400 leading-relaxed">
              La piattaforma leader in Italia per l'apprendimento della PNL, tecniche di memoria e neuroscienze applicate.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wider">Piattaforma</h4>
            <ul className="space-y-2.5">
              {['Percorsi', 'Tecniche di Memoria', 'Comunicazione', 'Neuroscienze', 'Certificazioni'].map(item => (
                <li key={item}>
                  <Link to="/learn" className="text-sm text-surface-400 hover:text-primary-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wider">Aziende</h4>
            <ul className="space-y-2.5">
              {['Formazione Team', 'Analytics', 'Integrazioni', 'Case Studies', 'Richiedi Demo'].map(item => (
                <li key={item}>
                  <Link to="/pricing" className="text-sm text-surface-400 hover:text-primary-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wider">Contatti</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-surface-400">
                <Mail className="w-4 h-4 text-primary-400" />
                info@neuromaster.it
              </li>
              <li className="flex items-center gap-2 text-sm text-surface-400">
                <Phone className="w-4 h-4 text-primary-400" />
                +39 02 1234 5678
              </li>
              <li className="flex items-center gap-2 text-sm text-surface-400">
                <MapPin className="w-4 h-4 text-primary-400" />
                Milano, Italia
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-surface-500">
            &copy; {new Date().getFullYear()} NeuroMaster. Tutti i diritti riservati.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Termini di Servizio', 'Cookie Policy'].map(item => (
              <a key={item} href="#" className="text-xs text-surface-500 hover:text-primary-400 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
