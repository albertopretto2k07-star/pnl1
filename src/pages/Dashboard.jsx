import { motion } from 'framer-motion'
import {
  Brain, Flame, Zap, Trophy, Target, TrendingUp,
  Calendar, Clock, Award, Star, ChevronRight, BarChart3
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { achievements, learningPaths } from '../data/pnlContent'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

const stagger = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
}

// Simulated user data
const userData = {
  name: 'Marco',
  level: 7,
  xp: 1250,
  xpToNext: 2000,
  streak: 12,
  lessonsCompleted: 18,
  totalLessons: 45,
  timeSpent: '14h 30m',
  weeklyXp: [80, 120, 95, 150, 110, 60, 0],
  unlockedAchievements: ['first-lesson', 'streak-7', 'perfect-quiz'],
  recentActivity: [
    { lesson: 'I canali sensoriali (VAK)', path: 'Fondamenti PNL', xp: 50, date: 'Oggi' },
    { lesson: 'I presupposti della PNL', path: 'Fondamenti PNL', xp: 50, date: 'Ieri' },
    { lesson: 'Quiz: Fondamenti', path: 'Fondamenti PNL', xp: 100, date: 'Ieri' },
    { lesson: 'Le origini della PNL', path: 'Fondamenti PNL', xp: 50, date: '2 giorni fa' },
  ]
}

function StatCard({ icon: Icon, label, value, sub, color = 'primary' }) {
  const colorClasses = {
    primary: 'bg-primary-500/10 text-primary-400',
    accent: 'bg-accent-500/10 text-accent-400',
    warm: 'bg-warm-500/10 text-warm-400',
    purple: 'bg-purple-500/10 text-purple-400',
  }

  return (
    <motion.div variants={fadeUp} className="glass rounded-2xl p-5 card-hover">
      <div className="flex items-start justify-between mb-3">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${colorClasses[color]}`}>
          <Icon className="w-5 h-5" />
        </div>
        {sub && <span className="text-xs text-accent-400 font-medium">{sub}</span>}
      </div>
      <p className="text-2xl font-display font-bold text-white">{value}</p>
      <p className="text-xs text-surface-400 mt-1">{label}</p>
    </motion.div>
  )
}

function WeeklyChart() {
  const days = ['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom']
  const max = Math.max(...userData.weeklyXp)

  return (
    <motion.div variants={fadeUp} className="glass rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-display font-semibold text-white">Attivita Settimanale</h3>
        <div className="flex items-center gap-2 text-xs text-surface-400">
          <BarChart3 className="w-4 h-4" />
          <span>Questa settimana</span>
        </div>
      </div>
      <div className="flex items-end gap-2 h-32">
        {userData.weeklyXp.map((xp, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-2">
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: `${max > 0 ? (xp / max) * 100 : 0}%` }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`w-full rounded-t-lg ${
                i === 6 ? 'bg-surface-700' : 'bg-gradient-to-t from-primary-600 to-primary-400'
              }`}
              style={{ minHeight: xp > 0 ? '8px' : '4px' }}
            />
            <span className="text-xs text-surface-500">{days[i]}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
        <span className="text-sm text-surface-400">Totale settimana</span>
        <span className="text-sm font-semibold text-primary-400">{userData.weeklyXp.reduce((a, b) => a + b, 0)} XP</span>
      </div>
    </motion.div>
  )
}

function AchievementsGrid() {
  return (
    <motion.div variants={fadeUp} className="glass rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-display font-semibold text-white">Achievement</h3>
        <span className="text-xs text-surface-500">{userData.unlockedAchievements.length}/{achievements.length}</span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {achievements.map(a => {
          const unlocked = userData.unlockedAchievements.includes(a.id)
          return (
            <div
              key={a.id}
              className={`p-3 rounded-xl text-center transition-all ${
                unlocked
                  ? 'bg-primary-500/10 border border-primary-500/20'
                  : 'bg-surface-800/30 border border-white/5 opacity-40'
              }`}
            >
              <span className="text-2xl">{a.icon}</span>
              <p className="text-xs font-semibold text-white mt-2">{a.title}</p>
              <p className="text-xs text-surface-500 mt-0.5">{a.xp} XP</p>
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}

function RecentActivity() {
  return (
    <motion.div variants={fadeUp} className="glass rounded-2xl p-6">
      <h3 className="font-display font-semibold text-white mb-4">Attivita Recente</h3>
      <div className="space-y-3">
        {userData.recentActivity.map((activity, i) => (
          <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-surface-800/30">
            <div className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center shrink-0">
              <Brain className="w-4 h-4 text-primary-400" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">{activity.lesson}</p>
              <p className="text-xs text-surface-500">{activity.path}</p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-sm font-semibold text-accent-400">+{activity.xp} XP</p>
              <p className="text-xs text-surface-500">{activity.date}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

function LevelProgress() {
  const progress = (userData.xp / userData.xpToNext) * 100

  return (
    <motion.div variants={fadeUp} className="glass rounded-2xl p-6">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
          <span className="font-display text-2xl font-bold text-white">{userData.level}</span>
        </div>
        <div className="flex-1">
          <h3 className="font-display font-semibold text-white">Ciao, {userData.name}!</h3>
          <p className="text-sm text-surface-400">Livello {userData.level} - Apprendista</p>
        </div>
      </div>
      <div>
        <div className="flex justify-between text-xs mb-1">
          <span className="text-surface-400">{userData.xp} XP</span>
          <span className="text-surface-500">{userData.xpToNext} XP</span>
        </div>
        <div className="w-full bg-surface-700 rounded-full h-3">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-3 rounded-full bg-gradient-to-r from-primary-500 to-accent-400"
          />
        </div>
        <p className="text-xs text-surface-500 mt-1">{userData.xpToNext - userData.xp} XP al prossimo livello</p>
      </div>
    </motion.div>
  )
}

function PathProgress() {
  return (
    <motion.div variants={fadeUp} className="glass rounded-2xl p-6">
      <h3 className="font-display font-semibold text-white mb-4">Percorsi in Corso</h3>
      <div className="space-y-4">
        {learningPaths.slice(0, 3).map(path => {
          const total = path.modules.flatMap(m => m.lessons).length
          const completed = path.id === 'foundations' ? 4 : 0
          const pct = Math.round((completed / total) * 100)
          return (
            <Link key={path.id} to="/learn" className="block group">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${path.color}15` }}>
                  <Brain className="w-4 h-4" style={{ color: path.color }} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-white group-hover:text-primary-400 transition-colors">{path.title}</p>
                  <p className="text-xs text-surface-500">{completed}/{total} lezioni</p>
                </div>
                <ChevronRight className="w-4 h-4 text-surface-600 group-hover:text-primary-400 transition-all group-hover:translate-x-1" />
              </div>
              <div className="w-full bg-surface-700 rounded-full h-1.5">
                <div
                  className="h-1.5 rounded-full"
                  style={{ width: `${pct}%`, background: path.color }}
                />
              </div>
            </Link>
          )
        })}
      </div>
    </motion.div>
  )
}

export default function Dashboard() {
  return (
    <section className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.h1 variants={fadeUp} className="font-display text-3xl font-bold text-white mb-8">
            Dashboard
          </motion.h1>

          {/* Level + Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-6">
            <LevelProgress />
            <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <StatCard icon={Flame} label="Streak" value={`${userData.streak} giorni`} sub="+1 oggi" color="warm" />
              <StatCard icon={Zap} label="XP Totali" value={userData.xp.toLocaleString()} color="primary" />
              <StatCard icon={Target} label="Lezioni" value={`${userData.lessonsCompleted}/${userData.totalLessons}`} color="accent" />
              <StatCard icon={Clock} label="Tempo Totale" value={userData.timeSpent} color="purple" />
            </div>
          </div>

          {/* Charts + Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-6">
            <WeeklyChart />
            <RecentActivity />
          </div>

          {/* Achievements + Path Progress */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <AchievementsGrid />
            <PathProgress />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
