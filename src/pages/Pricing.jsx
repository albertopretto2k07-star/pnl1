import { motion } from 'framer-motion'
import { Check, Sparkles, ArrowRight } from 'lucide-react'
import { pricingPlans } from '../data/pnlContent'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
}

function PricingCard({ plan }) {
  return (
    <motion.div
      variants={fadeUp}
      className={`rounded-2xl p-6 sm:p-8 flex flex-col h-full transition-all ${
        plan.highlighted
          ? 'glass border-primary-500/40 relative overflow-hidden'
          : 'glass'
      }`}
    >
      {plan.highlighted && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-accent-400 to-primary-500" />
      )}
      {plan.highlighted && (
        <div className="flex items-center gap-1.5 mb-4">
          <Sparkles className="w-4 h-4 text-primary-400" />
          <span className="text-xs font-semibold text-primary-400 uppercase tracking-wider">Piu Popolare</span>
        </div>
      )}

      <h3 className="font-display text-xl font-bold text-white">{plan.name}</h3>
      <p className="text-sm text-surface-400 mt-1 mb-6">{plan.description}</p>

      <div className="mb-6">
        {plan.price === 'Custom' ? (
          <span className="font-display text-4xl font-bold text-white">Custom</span>
        ) : (
          <>
            <span className="font-display text-4xl font-bold text-white">
              {plan.price === '0' ? 'Gratis' : `€${plan.price}`}
            </span>
            {plan.period && plan.price !== '0' && (
              <span className="text-surface-400 ml-1">{plan.period}</span>
            )}
          </>
        )}
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <Check className={`w-4 h-4 mt-0.5 shrink-0 ${
              plan.highlighted ? 'text-primary-400' : 'text-accent-400'
            }`} />
            <span className="text-sm text-surface-300">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all ${
          plan.highlighted
            ? 'btn-primary'
            : 'btn-secondary'
        }`}
      >
        {plan.cta}
        <ArrowRight className="w-4 h-4" />
      </button>
    </motion.div>
  )
}

export default function Pricing({ userMode, setUserMode }) {
  const plans = pricingPlans[userMode]

  return (
    <section className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="text-center mb-12">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {userMode === 'b2b' ? 'Piani per Aziende' : 'Scegli il tuo Piano'}
            </h1>
            <p className="text-surface-300 max-w-xl mx-auto mb-8">
              {userMode === 'b2b'
                ? 'Investire nelle competenze del tuo team ha un ROI misurabile. Scegli il piano adatto alla tua organizzazione.'
                : 'Inizia gratuitamente e sblocca il pieno potenziale della tua mente quando sei pronto.'
              }
            </p>

            {/* Mode toggle */}
            <div className="inline-flex items-center bg-surface-800 rounded-xl p-1 border border-surface-700">
              <button
                onClick={() => setUserMode('b2c')}
                className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  userMode === 'b2c'
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/20'
                    : 'text-surface-400 hover:text-white'
                }`}
              >
                Privati
              </button>
              <button
                onClick={() => setUserMode('b2b')}
                className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  userMode === 'b2b'
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/20'
                    : 'text-surface-400 hover:text-white'
                }`}
              >
                Aziende
              </button>
            </div>
          </motion.div>

          {/* Pricing cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map(plan => (
              <PricingCard key={plan.name} plan={plan} />
            ))}
          </div>

          {/* FAQ / Trust */}
          <motion.div variants={fadeUp} className="mt-16 text-center">
            <div className="glass rounded-2xl p-8 max-w-3xl mx-auto">
              <h3 className="font-display text-xl font-bold text-white mb-6">Domande Frequenti</h3>
              <div className="space-y-4 text-left">
                {[
                  {
                    q: 'Posso provare gratuitamente?',
                    a: userMode === 'b2b'
                      ? 'Si! Offriamo una demo gratuita con setup completo in 24 ore. Nessun impegno.'
                      : 'Certo! Il piano Free include accesso a 3 lezioni e il piano Pro ha 7 giorni di prova gratuita.'
                  },
                  {
                    q: 'I contenuti sono scientificamente validati?',
                    a: 'Tutti i nostri contenuti si basano su ricerche pubblicate su riviste peer-reviewed di neuroscienze e psicologia cognitiva.'
                  },
                  {
                    q: 'Posso annullare in qualsiasi momento?',
                    a: 'Si, puoi annullare il tuo abbonamento in qualsiasi momento senza penali. Nessun vincolo contrattuale.'
                  }
                ].map((faq, i) => (
                  <div key={i} className="p-4 rounded-xl bg-surface-800/30 border border-white/5">
                    <p className="text-sm font-semibold text-white mb-1">{faq.q}</p>
                    <p className="text-sm text-surface-400">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
