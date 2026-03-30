import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Brain, Lightbulb, MessageSquare, Zap, Mic, Lock, CheckCircle, ChevronRight, Flame, Star } from 'lucide-react'
import { learningPaths, dailyChallenge } from '../data/pnlContent'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

const stagger = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
}

const iconMap = {
  brain: Brain,
  lightbulb: Lightbulb,
  messages: MessageSquare,
  zap: Zap,
  mic: Mic,
}

// Simulated user progress
const userProgress = {
  'l1': 'completed', 'l2': 'completed', 'l3': 'completed',
  'l4': 'completed', 'l5': 'current',
  'l6': 'locked', 'l7': 'locked', 'l8': 'locked',
  'l9': 'locked', 'l10': 'locked', 'l11': 'locked',
  'l12': 'locked', 'l13': 'locked', 'l14': 'locked',
}

function DailyChallengeBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-2xl p-6 mb-10 border-l-4 border-l-warm-500"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex items-center gap-3 flex-1">
          <div className="w-12 h-12 rounded-xl bg-warm-500/20 flex items-center justify-center shrink-0">
            <Flame className="w-6 h-6 text-warm-500" />
          </div>
          <div>
            <h3 className="font-display font-semibold text-white">{dailyChallenge.title}</h3>
            <p className="text-sm text-surface-300">{dailyChallenge.task}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-warm-400">+{dailyChallenge.xp} XP</span>
          <button className="btn-primary !py-2 !px-5 !text-sm">
            Completa
          </button>
        </div>
      </div>
    </motion.div>
  )
}

function PathCard({ path }) {
  const Icon = iconMap[path.icon] || Brain
  const completedLessons = path.modules.flatMap(m => m.lessons).filter(l => userProgress[l.id] === 'completed').length
  const totalLessons = path.modules.flatMap(m => m.lessons).length
  const progress = Math.round((completedLessons / totalLessons) * 100)

  return (
    <motion.div variants={fadeUp} className="glass rounded-2xl overflow-hidden card-hover">
      {/* Path header */}
      <div className="p-6 border-b border-white/5">
        <div className="flex items-start justify-between mb-4">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: `${path.color}15` }}>
            <Icon className="w-7 h-7" style={{ color: path.color }} />
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            path.difficulty === 'Principiante' ? 'bg-accent-500/20 text-accent-400' :
            path.difficulty === 'Intermedio' ? 'bg-warm-500/20 text-warm-400' :
            'bg-purple-500/20 text-purple-400'
          }`}>
            {path.difficulty}
          </span>
        </div>
        <h3 className="font-display text-xl font-bold text-white mb-2">{path.title}</h3>
        <p className="text-sm text-surface-400 leading-relaxed mb-4">{path.description}</p>
        <div className="flex items-center gap-4 text-xs text-surface-500">
          <span>{path.duration}</span>
          <span>{path.xpTotal} XP</span>
          <span>{totalLessons} lezioni</span>
        </div>
        {/* Progress bar */}
        <div className="mt-4">
          <div className="flex justify-between text-xs mb-1">
            <span className="text-surface-400">{progress}% completato</span>
            <span className="text-surface-500">{completedLessons}/{totalLessons}</span>
          </div>
          <div className="w-full bg-surface-700 rounded-full h-2">
            <div
              className="h-2 rounded-full transition-all"
              style={{ width: `${progress}%`, background: `linear-gradient(90deg, ${path.color}, ${path.color}88)` }}
            />
          </div>
        </div>
      </div>

      {/* Modules & Lessons - Duolingo style */}
      <div className="p-4">
        {path.modules.map((module, mi) => (
          <div key={module.id} className="mb-4 last:mb-0">
            <p className="text-xs font-semibold text-surface-500 uppercase tracking-wider mb-3 px-2">
              {module.title}
            </p>
            <div className="space-y-1">
              {module.lessons.map((lesson, li) => {
                const status = userProgress[lesson.id] || 'locked'
                const isCompleted = status === 'completed'
                const isCurrent = status === 'current'
                const isLocked = status === 'locked'

                return (
                  <Link
                    key={lesson.id}
                    to={isLocked ? '#' : `/learn/${path.id}/${module.id}/${lesson.id}`}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all group ${
                      isCurrent
                        ? 'bg-primary-500/10 border border-primary-500/30'
                        : isCompleted
                        ? 'bg-accent-500/5 hover:bg-accent-500/10'
                        : 'opacity-50 cursor-not-allowed'
                    }`}
                    onClick={e => isLocked && e.preventDefault()}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                      isCompleted ? 'bg-accent-500' :
                      isCurrent ? 'bg-primary-500 animate-pulse-glow' :
                      'bg-surface-700'
                    }`}>
                      {isCompleted ? <CheckCircle className="w-4 h-4 text-white" /> :
                       isCurrent ? <Star className="w-4 h-4 text-white" /> :
                       <Lock className="w-3.5 h-3.5 text-surface-500" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-medium truncate ${
                        isCompleted ? 'text-surface-200' :
                        isCurrent ? 'text-white' :
                        'text-surface-500'
                      }`}>
                        {lesson.title}
                      </p>
                      <p className="text-xs text-surface-500 capitalize">{lesson.type === 'quiz' ? 'Quiz' : lesson.type === 'exercise' ? 'Esercizio' : 'Teoria'} &middot; {lesson.xp} XP</p>
                    </div>
                    {!isLocked && (
                      <ChevronRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                        isCurrent ? 'text-primary-400' : 'text-surface-600'
                      }`} />
                    )}
                  </Link>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default function Learn() {
  return (
    <section className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="mb-10">
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-2">
              I tuoi percorsi
            </h1>
            <p className="text-surface-400">Scegli un percorso e inizia ad apprendere. Ogni lezione dura 5-10 minuti.</p>
          </motion.div>

          <DailyChallengeBanner />

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {learningPaths.map(path => (
              <PathCard key={path.id} path={path} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
