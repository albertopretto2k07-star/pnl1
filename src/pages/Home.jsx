import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Brain, Sparkles, ArrowRight, Star, Users, BarChart3,
  Settings, Award, User, Trophy, Target, Heart,
  Zap, Shield, Clock, TrendingUp, ChevronRight
} from 'lucide-react'
import { b2bFeatures, b2cFeatures, testimonials } from '../data/pnlContent'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const stagger = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const iconMap = {
  users: Users, 'bar-chart': BarChart3, settings: Settings, award: Award,
  user: User, trophy: Trophy, target: Target, heart: Heart
}

function HeroSection({ userMode }) {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute top-40 right-1/4 w-80 h-80 bg-accent-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-light mb-8">
            <Sparkles className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-medium text-primary-300">
              {userMode === 'b2b' ? 'Formazione aziendale di nuova generazione' : 'Il futuro dell\'apprendimento mentale'}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeUp}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            {userMode === 'b2b' ? (
              <>
                Potenzia il tuo{' '}
                <span className="gradient-text">team</span>
                <br />
                con la PNL
              </>
            ) : (
              <>
                Riprogramma la{' '}
                <span className="gradient-text">tua mente</span>
                <br />
                con la PNL
              </>
            )}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl text-surface-300 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            {userMode === 'b2b'
              ? 'Piattaforma di formazione aziendale basata su PNL, tecniche di memoria e neuroscienze. Migliora comunicazione, leadership e performance del tuo team.'
              : 'Impara le più potenti tecniche di Programmazione Neuro-Linguistica, memoria e neuroscienze con un metodo interattivo ispirato a Duolingo. 10 minuti al giorno bastano.'
            }
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/learn" className="btn-primary flex items-center justify-center gap-2 text-lg !py-4 !px-8">
              {userMode === 'b2b' ? 'Richiedi una Demo' : 'Inizia Gratis'}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/pricing" className="btn-secondary flex items-center justify-center gap-2 text-lg !py-4 !px-8">
              Scopri i Piani
            </Link>
          </motion.div>

          {/* Social proof */}
          <motion.div variants={fadeUp} className="mt-12 flex flex-wrap items-center justify-center gap-8 text-surface-400">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 border-2 border-surface-950 flex items-center justify-center text-xs font-bold text-white">
                    {['M', 'G', 'A', 'S'][i]}
                  </div>
                ))}
              </div>
              <span className="text-sm">25.000+ iscritti</span>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-sm ml-1">4.9/5 rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-accent-400" />
              <span className="text-sm">Contenuti scientificamente validati</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Hero visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 relative"
        >
          <div className="glass rounded-2xl p-6 sm:p-8 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Lesson card preview */}
              <div className="bg-surface-800/50 rounded-xl p-5 border border-white/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center">
                    <Brain className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Palazzo della Memoria</p>
                    <p className="text-xs text-surface-400">Lezione 3 di 8</p>
                  </div>
                </div>
                <div className="w-full bg-surface-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-primary-500 to-accent-400 h-2 rounded-full" style={{ width: '37.5%' }} />
                </div>
                <p className="text-xs text-surface-400 mt-2">37% completato</p>
              </div>

              {/* Stats card */}
              <div className="bg-surface-800/50 rounded-xl p-5 border border-white/5">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-semibold text-white">Streak attuale</p>
                  <span className="text-2xl">🔥</span>
                </div>
                <p className="text-4xl font-display font-bold text-white mb-1">12</p>
                <p className="text-xs text-surface-400">giorni consecutivi</p>
                <div className="flex gap-1 mt-3">
                  {['L', 'M', 'M', 'G', 'V', 'S', 'D'].map((d, i) => (
                    <div
                      key={i}
                      className={`flex-1 h-6 rounded text-xs flex items-center justify-center font-medium ${
                        i < 5 ? 'bg-accent-500/20 text-accent-400' : 'bg-surface-700 text-surface-500'
                      }`}
                    >
                      {d}
                    </div>
                  ))}
                </div>
              </div>

              {/* XP card */}
              <div className="bg-surface-800/50 rounded-xl p-5 border border-white/5">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-semibold text-white">Punti XP</p>
                  <Zap className="w-5 h-5 text-yellow-400" />
                </div>
                <p className="text-4xl font-display font-bold gradient-text mb-1">1,250</p>
                <p className="text-xs text-surface-400">+150 questa settimana</p>
                <div className="flex items-center gap-2 mt-3 text-xs">
                  <TrendingUp className="w-3 h-3 text-accent-400" />
                  <span className="text-accent-400 font-medium">+23% rispetto alla settimana scorsa</span>
                </div>
              </div>
            </div>
          </div>

          {/* Glow effect */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-primary-500/10 blur-3xl rounded-full" />
        </motion.div>
      </div>
    </section>
  )
}

function FeaturesSection({ userMode }) {
  const features = userMode === 'b2b' ? b2bFeatures : b2cFeatures

  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-950/20 to-transparent" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeUp} className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            {userMode === 'b2b' ? 'Formazione che trasforma le aziende' : 'Tutto quello di cui hai bisogno'}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-surface-300 max-w-2xl mx-auto">
            {userMode === 'b2b'
              ? 'Strumenti professionali per la crescita del tuo team basati su evidenze scientifiche'
              : 'Un percorso di apprendimento completo, personalizzato e scientificamente fondato'
            }
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {features.map((feature, i) => {
            const Icon = iconMap[feature.icon] || Brain
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className="glass rounded-2xl p-6 card-hover group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-4 group-hover:bg-primary-500/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="font-display font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-surface-400 leading-relaxed">{feature.description}</p>
                {feature.stats && (
                  <div className="mt-4 pt-4 border-t border-white/5">
                    <span className="text-sm font-semibold text-accent-400">{feature.stats}</span>
                  </div>
                )}
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

function HowItWorksSection() {
  const steps = [
    {
      num: '01',
      title: 'Scegli il tuo percorso',
      desc: 'Fondamenti PNL, Tecniche di Memoria, Comunicazione o Neuroscienze. Ogni percorso è strutturato in moduli progressivi.',
      icon: Target
    },
    {
      num: '02',
      title: 'Impara con lezioni interattive',
      desc: 'Teoria chiara e concisa, quiz immediati, esercizi pratici. Come Duolingo, ma per la tua mente.',
      icon: Brain
    },
    {
      num: '03',
      title: 'Pratica ogni giorno',
      desc: 'Sfide giornaliere, streak motivazionali e tecniche da applicare subito nella vita reale.',
      icon: Zap
    },
    {
      num: '04',
      title: 'Misura i tuoi progressi',
      desc: 'Dashboard con statistiche, XP, achievement e certificati al completamento di ogni percorso.',
      icon: TrendingUp
    }
  ]

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeUp} className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Come funziona
          </motion.h2>
          <motion.p variants={fadeUp} className="text-surface-300">
            Un metodo semplice e scientificamente fondato
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {steps.map((step, i) => (
            <motion.div key={i} variants={fadeUp} className="relative">
              <div className="glass rounded-2xl p-6 h-full">
                <span className="font-display text-5xl font-bold text-primary-500/10">{step.num}</span>
                <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center mt-4 mb-3">
                  <step.icon className="w-5 h-5 text-primary-400" />
                </div>
                <h3 className="font-display font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-surface-400 leading-relaxed">{step.desc}</p>
              </div>
              {i < 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 z-10">
                  <ChevronRight className="w-6 h-6 text-primary-500/30" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function TestimonialsSection({ userMode }) {
  const filtered = testimonials.filter(t => t.type === userMode)

  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-950/10 to-transparent" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeUp} className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            {userMode === 'b2b' ? 'Le aziende che ci scelgono' : 'Cosa dicono i nostri utenti'}
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {filtered.map((t, i) => (
            <motion.div key={i} variants={fadeUp} className="glass rounded-2xl p-6 card-hover">
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-surface-200 leading-relaxed mb-6 text-sm italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-sm font-bold text-white">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-surface-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function CTASection({ userMode }) {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900" />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-40 h-40 border border-white/20 rounded-full" />
            <div className="absolute bottom-10 right-10 w-60 h-60 border border-white/20 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-white/10 rounded-full" />
          </div>
          <div className="relative z-10 p-10 sm:p-16 text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              {userMode === 'b2b'
                ? 'Porta il tuo team al livello successivo'
                : 'Inizia oggi il tuo viaggio mentale'
              }
            </h2>
            <p className="text-primary-100/80 max-w-xl mx-auto mb-8">
              {userMode === 'b2b'
                ? 'Richiedi una demo gratuita e scopri come NeuroMaster può trasformare la formazione aziendale.'
                : 'Unisciti a 25.000+ persone che stanno già potenziando la propria mente. Il primo percorso è gratuito.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={userMode === 'b2b' ? '/pricing' : '/learn'}
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 font-semibold py-4 px-8 rounded-xl hover:bg-primary-50 transition-all hover:shadow-lg text-lg"
              >
                {userMode === 'b2b' ? 'Richiedi Demo Gratuita' : 'Inizia Gratis'}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <p className="text-xs text-primary-200/60 mt-4">
              {userMode === 'b2b' ? 'Nessun impegno. Setup in 24 ore.' : 'Nessuna carta di credito richiesta'}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function Home({ userMode, setUserMode }) {
  return (
    <>
      <HeroSection userMode={userMode} />
      <FeaturesSection userMode={userMode} />
      <HowItWorksSection />
      <TestimonialsSection userMode={userMode} />
      <CTASection userMode={userMode} />
    </>
  )
}
